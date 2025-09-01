import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true); // loader state

  const navigate = useNavigate();

  const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const fetchData = async () => {
    try {
      setLoading(true); // start loading
      const [postResponse, commentsResponse] = await Promise.all([
        axios.get(URL),
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
      ]);
      setPost(postResponse.data);
      setComments(commentsResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // stop loading
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleNavigate = () => {
    navigate("/posts");
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {/* Post Section */}
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title text-primary">{post.title}</h4>
              <hr />
              <p className="card-text">{post.body}</p>
              <button
                onClick={handleNavigate}
                className="btn btn-outline-primary btn-sm mt-2"
              >
                ⬅ Back to Posts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h5 className="mb-3">💬 Comments ({comments.length})</h5>
          {comments.map((cmt) => (
            <div className="card mb-3 shadow-sm" key={cmt.id}>
              <div className="card-body">
                <h6 className="card-subtitle mb-1 text-dark fw-bold">
                  {cmt.name}
                </h6>
                <p className="text-muted small mb-2">{cmt.email}</p>
                <p className="card-text">{cmt.body}</p>
              </div>
            </div>
          ))}
          {comments.length === 0 && (
            <p className="text-muted">No comments available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
