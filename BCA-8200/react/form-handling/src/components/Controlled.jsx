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

      {/* one username input   - jasdnfjbasdufb  */}
      {/* one password input  - admin@123 */}

      {/*  */}
    </div>
  );
};

export default Controlled;
