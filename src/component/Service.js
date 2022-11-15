import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import "../App.css";

const Service = () => {
  const isLight = useSelector((state) => state.isLight);

  return (
    <>
      <div className={isLight ? "light" : "dark"}>
        <Navbar />
        <h1>Our Services are not available</h1>
      </div>
    </>
  );
};

export default Service;
