// eslint-disable-next-line no-unused-vars
import React, { Children } from "react";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
