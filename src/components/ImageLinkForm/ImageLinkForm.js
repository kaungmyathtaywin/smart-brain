import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 flex justify-center white">
        {"This Magic Brain will detect faces in your pictures. Give it a try!"}
      </p>
      <div className="flex justify-center">
        <div className="form pa2 br3 bg-light-green">
          <input className="f4 pa1 w-70" type="text" />
          <button className="f4 link ph3 pv1 bg-lightest-blue w-30">
            {"Detect"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
