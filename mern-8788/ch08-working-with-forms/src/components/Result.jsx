import React, { useEffect, useRef } from "react";

function Result({ marks }) {
  const m = useRef(marks);

  useEffect(() => {
    if (m.current) {
      if (marks > 33) {
        m.current.style.color = "green";
      } else {
        m.current.style.color = "red";
      }
    }
  }, [marks]);

  return <div ref={m}>{marks}</div>;
}

export default Result;
