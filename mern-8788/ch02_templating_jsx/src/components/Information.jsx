import React from "react";

function Information({ className, onClick, innerComponent }) {
  return (
    <div className={className} onClick={onClick}>
      <div dangerouslySetInnerHTML={{ __html: innerComponent }} />
    </div>
  );
}

export default Information;
