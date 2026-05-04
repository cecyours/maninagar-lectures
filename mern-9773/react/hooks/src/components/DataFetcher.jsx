import React, { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setData(json.slice(0, 5));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center my-3">
        <div className="spinner-border text-primary"></div>
        <p className="mt-2">Loading Data...</p>
      </div>
    );
  }

  return (
    <div className="text-start my-3">
      <h2 className="mb-3">Posts:</h2>

      {data.map((post) => (
        <div key={post.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="text-muted">ID: {post.id}</h6>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}

    </div>
  );
}

export default DataFetcher;