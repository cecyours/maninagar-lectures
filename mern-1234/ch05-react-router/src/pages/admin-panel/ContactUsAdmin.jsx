import axios from "axios";
import { useEffect, useState } from "react";

const ContactUsAdmin = () => {
  const [data, setData] = useState([]);

  const fetchContactUs = async () => {
    try {
      const response = await axios.get("http://localhost:9000/contact-us");
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
        
    }
  };

  useEffect(() => {
    fetchContactUs();
  }, []);

  return (
    <div>
      <h1 className="text-center ">Contact Us Queries </h1>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>phoneNumber</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>

              <td>{data.phoneNumber}</td>

              <td>{Date(data.createdAt.toString())}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactUsAdmin;
