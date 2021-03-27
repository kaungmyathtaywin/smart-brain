import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <Tilt className="Tilt br2 shadow-2 ma3" options={{ max: 25 }}>
        <div className="Tilt-inner">
          <img src={brain} alt="logo" className="logo" />
        </div>
      </Tilt>
      <p className="f4 link dim black pa2 pointer mr3">Sign Out</p>
    </nav>
  );
};

export default Navigation;
