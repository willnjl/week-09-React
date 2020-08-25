import React from "react";

const Fade = ({ time, children }) => (
  <>
    <div
      style={{
        animationName: "fade",
        animationDuration: time,
      }}
    >
      {children}
    </div>
  </>
);
export default Fade;
