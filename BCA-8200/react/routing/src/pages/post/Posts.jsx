import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/posts";

  const fetchPosts = async () => {
    try {
      const response = await axios.get(URL);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      <div>
        {/* <button className="btn btn-primary"> Add Post</button>         */}
      </div>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-3" key={post.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <Link
                  to={`/posts/${post.id}`}
                  className="card-title  text-decoration-none "
                >
                  {post.title}
                </Link>
              </div>

              <div className="card-footer">{post.id}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
