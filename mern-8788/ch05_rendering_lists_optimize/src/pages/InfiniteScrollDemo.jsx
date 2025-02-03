import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import logo from "../logo.svg";

function InfiniteScrollDemo() {
  const url = "https://picsum.photos/300/300?random=";
  const limit = 10; // Load 20 items at a time
  const totalItems = 20000;

  // Generate data dynamically
  const arr = Array.from({ length: totalItems }, (_, index) => ({
    url: `${url}${index}`,
    name: `My Image ${index + 1}`,
    id: index, // Unique ID for better rendering
  }));

  const [currentItems, setCurrentItems] = useState(arr.slice(0, limit));

  const fetchData = () => {
    setTimeout(() => {
      setCurrentItems((prev) => [
        ...prev,
        ...arr.slice(prev.length, prev.length + limit),
      ]);
    }, 2000);
  };

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={currentItems.length}
        next={fetchData}
        hasMore={currentItems.length < totalItems}
        loader={
          <>
            <div className="d-flex align-items-center gap-3 mt-3 bg-secondary bg-opacity-25 p-2 rounded-3">
              <div>00</div>
              <img
                width={50}
                height={50}
                src={logo}
                loading="lazy"
                className="rounded-3 border-white border p-1"
              />
              <div>loading....</div>
            </div>
          </>
        }
      >
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-center gap-3 mt-3 bg-secondary bg-opacity-50 p-2 rounded-3"
          >
            <div>{item.id + 1}</div>
            <img
              width={50}
              height={50}
              src={item.url}
              loading="lazy"
              className="rounded-3 border-white border p-1"
              alt={item.name}
            />
            <div>{item.name}</div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default InfiniteScrollDemo;
