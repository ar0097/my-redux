import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsLight } from "../utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLight = useSelector((state) => state.isLight);

  const dispatch = useDispatch();
  return (
    <div>
      <div>Geekster</div>
      <Link className="re" to="/contact">
        Contact
      </Link>
      <br />
      <Link className="di" to="/">
        Home
      </Link>
      <br />
      <Link className="rect" to="/service">
        Services
      </Link>
      <br />
      <button
        onClick={() => {
          const message = `I have changed theme to ${
            isLight ? "Dark" : "Light"
          }`;
          dispatch(setIsLight(message));
        }}
      >
        Toggle Theme to {isLight ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Navbar;
