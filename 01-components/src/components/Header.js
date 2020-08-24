import React from "react";

const Header = ({ children }) => (
  <>
    <header className="alert alert-primary">
      <h1>{children}</h1>
    </header>
  </>
);

export default Header;
