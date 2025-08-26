import React, { useState } from "react";

const GenerateCard = () => {
  const [cardCount, setCardCount] = useState([]);

  const handleMinusClick = () => {
    setCardCount((prev) => prev.slice(0, -1));
  };

  const handlePlusClick = () => {
    setCardCount((prev) => [...prev, prev.length + 1]);
  };

  return (
    <>
      <button onClick={handleMinusClick} className="btn btn-secondary me-5">
        -
      </button>
      <div className="badge text-bg-danger fs-3"> {cardCount} </div>
      <button onClick={handlePlusClick} className="btn btn-secondary ms-5">
        +
      </button>

      {cardCount.map((sdjfbhds, index) => (
        <div>
          <h1>Index {index + 1}</h1>
          <p>This is a card for {index + 1}</p>
        </div>
      ))}
    </>
  );
};

export default GenerateCard;
