import React, { useEffect, useRef } from "react";

const UncontrolledForm = () => {
  const inputRef = useRef();

  console.log(inputRef);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`value is ${inputRef.current.value} `);
  };
  return (
    <div>
      <div>
        <div className="container">
          <form onSubmit={handleSubmit} action="">
            <input
              type="text"
              className="form-control border borrder-black"
              ref={inputRef}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledForm;
