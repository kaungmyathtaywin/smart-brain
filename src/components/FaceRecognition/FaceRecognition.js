import React from "react";
import "./FaceRecognition.css";

export default function FaceRecognition({ imageUrl, box }) {
  return (
    <div className="flex justify-center">
      <div className="absolute mt3 br3">
        <img
          className="br3"
          id="inputimage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
}
