import React, { use, useState } from "react";

import m1 from "../assets/images/img1.jpg";
import m2 from "../assets/images/img2.jpg";
import m3 from "../assets/images/img3.jpg";

function LogicalOperators() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [msg, setMsg] = useState("");
  const posts = [
    { title: "python", url: m1 },
    { title: "Java", url: m2 },
    { title: "Php", url: m3 },
  ];

  return (
    <>
      <div className="d-flex align-items-center justify-content-center gap-5">
        <button
          className="btn"
          onClick={() => {
            if (currentIndex == 0) {
              setCurrentIndex(posts.length - 1);
            } else {
              setCurrentIndex((p) => p - 1);
            }
            setMsg("you press back")
          }}
        >
          &lt;
        </button>
        {/* {posts && posts.map((p, i) => <h1 className="m-2">{p.title}</h1>)} */}
        <div className="position-relative">
          <div>
            <img width={500} height={300} src={posts[currentIndex].url} />
          </div>
          <h1 className="position-absolute top-50 text-white start-50 bg-white bg-opacity-50 px-2 rounded-3 shadow">
            {" "}
            {posts[currentIndex] && posts[currentIndex].title}
          </h1>
        </div>
        <button
          className="btn"
          onClick={() => {
            if (currentIndex == posts.length - 1) {
              setCurrentIndex(0);
            } else {
              setCurrentIndex((p) => p + 1);
            }
            setMsg("you press next")

          }}
        >
          &gt;
        </button>
      </div>
      <div className="gap-2 d-flex justify-content-center">
        {posts.map((p, i) => (
          <button
            className={`${
              currentIndex == i ? "text-primary fs-3" : "text-secondary "
            } btn`}
            onClick={() => {
              setCurrentIndex(i);
            }}
          >
            *
          </button>
        ))}
      </div>
      {msg}
    </>
  );
}

export default LogicalOperators;
