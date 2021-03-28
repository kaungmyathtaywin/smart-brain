import React from "react";
import brain from "./brain.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <div className="flex justify-center items-center logo-box br2 shadow-2 ma2">
            <img src={brain} alt="logo" className="logo" />
          </div>
        </li>
        <li className="flex f4 link dim black pa2 pointer mr3 sign-out br2">
          {"Sign Out"}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
