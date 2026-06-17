import React, { useState, useEffect } from "react";
function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch data on component mount
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setData(json.slice(0, 5)); // Show first 5 posts
        setLoading(false);
      });
  }, []); // Empty dependency array = runs once
  if (loading) {
    return <p>Loading data...</p>;
  }
  return (
    <div style={{ textAlign: "left", margin: "20px" }}>
      <h2>Posts:</h2>
      {data.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
export default DataFetcher;
