import React from "react";
import brain from "./brain.png";
import "./Navigation.css";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <div className="flex justify-center items-center ma2 br2 shadow-2 logo-box">
            <img src={brain} alt="logo" className="logo" />
          </div>
        </li>
        <li
          className="flex f4 pa2 mr3 br2 pointer link dim black sign-out"
          onClick={() => onRouteChange("signin")}
        >
          {"Sign Out"}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
