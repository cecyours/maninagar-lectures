import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContactUsView = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const fetchContactUsData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/contact-us/${id}`
      );
      console.log(response.data.data);

      setData(response.data.data);
    } catch (error) {
      console.log("Error fething data ");
    }
  };

  useEffect(() => {
    fetchContactUsData();
  }, [id]);

  return (
    <div>
      {data.map((data, index) => (
        <div className="card">
          <span>{data.name}</span>

          <span>{data.email}</span>
        </div>
      ))}
    </div>
  );
};

export default ContactUsView;
