import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <Tilt className="Tilt br2 shadow-2 ma2" options={{ max: 25 }}>
            <div className="Tilt-inner">
              <img src={brain} alt="logo" className="logo" />
            </div>
          </Tilt>
        </li>
        <li className="f4 link dim black pa2 pointer mr3 sign-out shawdow-2 br2">
          Sign Out
        </li>
      </ul>
      {/* <Tilt className="Tilt br2 shadow-2 ma3" options={{ max: 25 }}>
        <div className="Tilt-inner">
          <img src={brain} alt="logo" className="logo" />
        </div>
      </Tilt>
      <p className="f4 link dim black pa2 pointer mr3">Sign Out</p> */}
    </nav>
  );
};

export default Navigation;
