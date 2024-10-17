// eslint-disable-next-line no-unused-vars
import React, { Children } from "react";
import Header from "../Header/Header";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
