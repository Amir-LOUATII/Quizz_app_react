import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGlobalContext } from "../context/context";

const HomePage = () => {
  const { reset } = useGlobalContext();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      reset();
    }
  }, []);
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default HomePage;
