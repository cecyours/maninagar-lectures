"use client";

import { useEffect, useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import {
  FiBriefcase,
  FiMapPin,
  FiFolder,
  FiAlertTriangle,
  FiLoader,
} from "react-icons/fi";
import { useParams, useRouter } from "next/navigation";
import ProfileImage from "@/components/ProfileImage";
import { User } from "next-auth";
import { getSession } from "next-auth/react";
import { LAYOUT_TYPES } from "@/app/config/constants";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import SubscriptionModal from "@/app/(e)/e/supscription-packages/components/SubscriptionModal";

interface SchemaField {
  adminVisible: boolean;
  arrayFields: any[];
  commonInput: boolean;
  hidden: boolean;
  isMultiple: boolean;
  isRequired: boolean;
  isUnique: boolean;
  name: string;
  orderIndex: number;
  public: boolean;
  register: boolean;
  type: string;
  userVisible: boolean;
  withLogin: boolean;
  withoutLogin: boolean;
}

interface Candidate {
  [key: string]: any; // This allows dynamic field access
}

export default function CandidateDetailPage() {
  const router = useRouter();
  const { id } = useParams();
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [session, setSession] = useState<User | null>(null);
  const [schemaName, setSchemaName] = useState(LAYOUT_TYPES.CANDIDATE_TYPE);
  const [schemaFields, setSchemaFields] = useState<SchemaField[]>([]);

  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const toast = useToast();

  // Fetch session data
  useEffect(() => {
    const fetchSessionData = async () => {
      const sessionData = await getSession();
      setSession(sessionData?.user as User);
      console.log(
        "Session status:",
        // sessionData ? "Logged in" : "Not logged in"
        sessionData
      );
    };

    fetchSessionData();
  }, []);

  // Fetch schema data
  useEffect(() => {
    const fetchSchema = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/schema?name=${schemaName}`);
        const data = response.data;
        console.log("Schema fields:", data.fields);
        setSchemaFields(data.fields);
      } catch (error) {
        console.error("Error fetching schema:", error);
        toast.toast({
          title: "Error",
          description: "Failed to fetch schema data",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSchema();
  }, [schemaName]);

  // Fetch candidate data
  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await fetch(`/api/candidate_data/${id}`);
        const rawData = await response.json();

        if (response.ok) {
          // Store all fields from rawData
          const candidateData: Candidate = {};
          Object.entries(rawData).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
              candidateData[key] = value;
            }
          });

          setCandidate(candidateData);
        } else {
          setError(rawData.error || "Failed to fetch candidate details.");
        }
      } catch (error) {
        setError("Error fetching candidate details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCandidate();
  }, [id]);

  // Filter fields based on session status
  const visibleFields = useMemo(() => {
    return schemaFields.filter((field) => {
      if (session) {
        return field.withLogin;
      }
      return field.withoutLogin;
    });
  }, [schemaFields, session]);

  const fetchSubscriptions = async () => {
    console.log("Subscription is calling");

    try {
      const res = await axios.get("/api/subscription-packages");
      console.log("SUBS PAK", res);

      setSubscriptions(res.data);
    } catch (err) {
      console.error("Failed to load subscriptions", err);
    }
  };

  const openSubscriptionModal = async () => {
    alert("Modal is opening");
    try {
      await fetchSubscriptions();
      setShowSubscriptionModal(true);
    } catch (err) {
      console.error("Failed to load subscriptions", err);
      toast.toast({
        title: "Error",
        description: "Could not load subscription packages.",
        variant: "destructive",
      });
    }
  };

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
            <FiLoader className="animate-spin text-blue-600 w-6 h-6" />
            <span className="text-gray-700 font-medium">Loading...</span>
          </div>
        </div>
      </div>
    );
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { title: "Candidates", link: "/candidates" },
            { title: "Details", link: "#" },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <div className="flex flex-col items-center text-center">
                <ProfileImage gender={candidate?.Gender} />
                <button
                  onClick={async () => {
                    await openSubscriptionModal();
                  }}
                  className="p-2 bg-green-500 text-white"
                >
                  Test Open Modal
                </button>

                <h2 className="text-2xl font-bold mt-4">
                  {candidate?.["First Name"]
                    ? candidate["First Name"][0] +
                      "-".repeat(candidate["First Name"].length - 1)
                    : "N/A"}
                  {candidate?.["Last Name"] || "N/A"}
                </h2>
                <div className="w-full border-t border-gray-200 my-4" />

                {/* CV Download Button */}
                {candidate?.["CV"] && (
                  <button
                    onClick={async () => {
                      if (!session) {
                        router.push("/sign-in");
                        return;
                      }

                      if (
                        session.role === "Employer" ||
                        session.role === "ADMIN" ||
                        session.role === "SUPER_ADMIN"
                      ) {
                        if (session.role === "Employer") {
                          try {
                            let packageId;

                            try {
                              const response = await axios.get(
                                `/api/purchased-package?empId=${session._id}`
                              );

                              // Handle 408 status
                              if (response.status === 408) {
                                await openSubscriptionModal();
                                toast.toast({
                                  title: "Package Info Error",
                                  description:
                                    response.data.error || "Package not found.",
                                  variant: "destructive",
                                });
                                return;
                              }

                              packageId =
                                response.data.purchasedPackage.packageDetails
                                  ._id;
                            } catch (error: any) {
                              console.error(
                                "Error fetching purchased package:",
                                error
                              );
                              toast.toast({
                                title: "Error",
                                description:
                                  error?.response?.data?.error ||
                                  "Something went wrong while fetching package info.",
                                variant: "destructive",
                              });
                              return;
                            }

                            // 2. Check Download Limit
                            const canDownload = await axios.get(
                              `/api/check-download-limit?empId=${session._id}&candidateId=${id}&packageId=${packageId}`
                            );

                            if (!canDownload.data.allowed) {
                              toast.toast({
                                title: "Warning",
                                description:
                                  "You have insufficient resume download limit.",
                                variant: "destructive",
                              });

                              await openSubscriptionModal();
                              return;
                            }

                            // 3. Proceed to Download
                            window.open(candidate["CV"], "_blank");

                            // 4. Deduct Download Count
                            await axios.post(`/api/deduct-download`, {
                              empId: session._id,
                              candidateId: id,
                              packageId: packageId,
                            });
                          } catch (error) {
                            console.error(
                              "Error handling download logic:",
                              error
                            );
                            toast.toast({
                              title: "Error",
                              description:
                                "Something went wrong while downloading.",
                              variant: "destructive",
                            });
                          }
                        } else {
                          // ADMIN or SUPER_ADMIN can download directly
                          window.open(candidate["CV"], "_blank");
                        }
                      } else {
                        toast.toast({
                          title: "Access Denied",
                          description:
                            "You are not eligible to download the CV.",
                          variant: "destructive",
                        });
                      }
                    }}
                    className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    <FiFolder className="w-5 h-5 mr-2" />
                    Download CV
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6">
                Candidate Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visibleFields.map((field) => (
                  <InfoCard
                    key={field.name}
                    title={field.name}
                    value={String(candidate?.[field.name] || "N/A")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {session && (
        <SubscriptionModal
          open={showSubscriptionModal}
          onClose={() => setShowSubscriptionModal(false)}
          subscriptions={subscriptions}
          empId={session._id}
          empMail={session.email}
          empName={session.name}
          empContact={session.contact}
        />
      )}
    </div>
  );
}

function InfoCard({ title, value }: { title: string; value?: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h4 className="text-gray-500 text-sm font-medium">{title}</h4>
      <p className="mt-1 font-semibold">{value || "N/A"}</p>
    </div>
  );
}
