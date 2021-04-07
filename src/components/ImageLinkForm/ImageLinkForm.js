import React from "react";
import "./ImageLinkForm.css";

export default function ImageLinkForm({ onInputChange, onImageButtonSubmit }) {
  return (
    <div>
      <p className="f3 flex justify-center white">
        {"This Magic Brain will detect faces in your pictures. Give it a try! "}
      </p>
      <div className="flex justify-center">
        <div className="input-form pa2 br3 bg-light-silver">
          <input
            className="f4 pa1 w-70"
            type="text"
            placeholder="Please enter an image address"
            onChange={onInputChange}
          />
          <button
            className="f4 ph3 pv1 bg-light-green w-30 detect-button"
            onClick={onImageButtonSubmit}
          >
            {"Detect"}
          </button>
        </div>
      </div>
    </div>
  );
}
