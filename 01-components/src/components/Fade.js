import React from "react";

const Fade = ({ time, children }) => (
  <div
    style={{
      animationName: "fade",
      animationDuration: time,
    }}
  >
    {children}
  </div>
);

Fade.defaultProps = {
  time: "3s",
};
export default Fade;
