import React from "react";
import brain from "./brain.png";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <ul className="flex">
          <li>
            <div className="flex justify-center items-center ma2 br2 shadow-2 logo-box">
              <img src={brain} alt="logo" className="logo" />
            </div>
          </li>
          <div className="links flex items-center">
            <li
              className="dib f4 pa2 mr3 br2 pointer link dim each-link"
              onClick={() => onRouteChange("signout")}
            >
              {"Sign Out"}
            </li>
          </div>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul className="flex">
          <li>
            <div className="flex justify-center items-center ma2 br2 shadow-2 logo-box">
              <img src={brain} alt="logo" className="logo" />
            </div>
          </li>
          <div className="links flex items-center">
            <li
              className="dib f4 pa2 mr3 br2 pointer link dim each-link"
              onClick={() => onRouteChange("register")}
            >
              {"Register"}
            </li>
            <li
              className="dib f4 pa2 mr3 br2 pointer link dim each-link"
              onClick={() => onRouteChange("signout")}
            >
              {"Sign in"}
            </li>
          </div>
        </ul>
      </nav>
    );
  }
};

export default Navigation;
