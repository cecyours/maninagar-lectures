import { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="App">
      {user.map((data) => (
        <div key={data.id}>
          <p>{data.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
