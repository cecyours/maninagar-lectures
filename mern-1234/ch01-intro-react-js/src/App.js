import React, { useState, startTransition, Suspense } from "react";
//import Numbers from "./Numbers";
const Numbers = React.lazy(() => import("./Numbers"));
function App() {
  const [counter, setCounter] = useState(0);

  const fun = (n) => {
    setCounter(n);
  };
  return (
    <>
      <button
        onClick={() => {
          fun(counter + 1);
        }}
      >
        Change key
      </button>
      <Suspense fallback={<>Loading</>}>
        <Numbers key={counter} />
      </Suspense>
    </>
  );
}

export default App;
