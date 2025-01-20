import React, { Fragment } from "react";

function Fragments() {
  return (
    <Fragment>
      {2 > 1 && (
        <>
          <h1>kires</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          quas, explicabo magni sint consectetur neque quibusdam impedit officia
          atque eos maxime? Nulla eum asperiores facere ipsam, doloremque ad
          porro enim!
        </>
      )}
    </Fragment>
  );
}

export default Fragments;
