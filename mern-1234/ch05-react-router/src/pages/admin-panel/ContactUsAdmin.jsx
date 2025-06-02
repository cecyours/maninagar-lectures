import axios from "axios";
import { useEffect, useState } from "react";

const ContactUsAdmin = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchContactUs = async () => {
    try {
      const response = await axios.get("http://localhost:9000/contact-us");
      setData(response.data.data || []);
      setError("");
    } catch (err) {
      setError("Failed to fetch contact data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchContactUs();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us Queries</h2>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {data.length === 0 ? (
        <div className="text-center text-muted">No contact queries available.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.phoneNumber}</td>
                  <td>{new Date(entry.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactUsAdmin;
