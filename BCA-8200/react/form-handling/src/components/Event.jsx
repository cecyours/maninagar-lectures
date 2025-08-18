const Event = () => {
  const handleClick = (e, message) => {
    console.log(e);
    console.log(message);
  };

  const handleChange = (data) => {
    console.log(data);
  };

  return (
    <div>
      <button onClick={(e) => handleClick(e, "hello")}> Click </button>

      <input type="text" onChange={(e) => handleChange(e.target.value)} />

      <div className="p-5">
        <div
          style={{ height: "200px", width: "200px" }}
          className="bg-danger"
        ></div>

        <div className="d-flex  justify-content-between">
          <button>prev</button>

          <span>1</span>

          <button>next</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
