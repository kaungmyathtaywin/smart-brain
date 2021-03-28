import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Tilt className="Tilt br2 shadow-2 ma2" options={{ max: 25 }}>
            <div className="Tilt-inner flex justify-center items-center h-100">
              <img src={brain} alt="logo" className="logo" />
            </div>
          </Tilt>
        </li>
        <li className="flex f4 link dim black pa2 pointer mr3 sign-out br2">
          {"Sign Out"}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
