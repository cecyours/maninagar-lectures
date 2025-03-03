import React, { useEffect, useState } from "react";

function RenderList() {
  const url = "https://picsum.photos/300/300?random=";

  const [limit, setLimit] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  let arr = Array.from({ length: 200000 }, (element, index) => ({
    url: `${url}${index}`,
    name: `My Image ${index}`,
  }));

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const totalPages = Math.ceil(arr.length / limit);
  const currentItems = arr.slice(startIndex, endIndex);

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);

    // auto scroll
    const element = document.getElementById("my-page");
    if (element) {
      element.scrollIntoView("smooth");
    }
  };
  return (
    <div className="container p-2"  id="my-page">
      <div>
        <div>
          <input
            value={limit}
            onChange={(e) => {
              setCurrentPage(1)
              setLimit(e.target.value);
            }}
          />
        </div>
        {currentItems.map((a, i) => (
          <div key={i}>
            <div className="d-flex align-items-center gap-3 mt-3 bg-secondary bg-opacity-50 p-2 rounded-3">
              <div>{(currentPage -1) * limit + i + 1}</div>
              <img
                width={50}
                height={50}
                src={`${a.url}`}
                loading="lazy"
                className="rounded-3 border-white border p-1"
              />
              <div>{a.name}</div>
            </div>
          </div>
        ))}
        <div className="d-flex mt-5 gap-5">
          <button
            className="btn btn-primary"
            disabled={currentPage == 1}
            onClick={() => {
              handleChangePage(currentPage - 1);
            }}
          >
            privious
          </button>
          {currentPage}/{totalPages}
          <button
            className="btn btn-primary"
            disabled={currentPage == totalPages}
            onClick={() => {
              handleChangePage(currentPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RenderList;
