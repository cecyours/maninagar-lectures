import React, { useState } from "react";

const Controlled = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Controlled;
