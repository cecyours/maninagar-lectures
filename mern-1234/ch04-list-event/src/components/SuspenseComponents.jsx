import React, { Suspense } from "react";
const ThemeComponents = React.lazy(() => import("./ThemedComponents"));

function SuspenseComponents() {
  return (
    <div>
      <ThemeComponents />
    </div>
  );
}

export default SuspenseComponents;
