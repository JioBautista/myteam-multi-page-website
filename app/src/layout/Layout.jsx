import React from "react";
import NavBar from "../navbar/NavBar";
import Ready from "../pages/home/Ready";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Ready />
      <Footer />
    </>
  );
}

export default Layout;
