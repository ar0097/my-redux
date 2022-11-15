import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import "../App.css";

const Home = (_) => {
  const isLight = useSelector((state) => state.isLight);
  return (
    <>
      <div className={isLight ? "light" : "dark"}>
        <Navbar />

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit impedit
          id dolor vitae, voluptate optio a, earum eum quam accusantium, nam
          consequuntur quibusdam nulla consectetur expedita magni aliquam. Quos,
          ducimus?S
        </p>
      </div>
    </>
  );
};
export default Home;
