import React from "react";
import "./ImagePreview.css";
import { useState } from "react";
import { useRotation } from "./../../hooks/useRotation";

const ImagePreview = ({ fileDataURL, onHandleDelete, index }) => {

  const { degree, leftRotate, rightRotate } = useRotation();
  return (
    <div className="image-preview">
      <img
        alt="@"
        className={"image-preview__img"}
        style={{
          transform: `rotate(${degree?degree:null}deg)`,
          transition: "transform 150ms ease",
        }}
        src={fileDataURL}
      />
      <span className="image-preview__text">Ön panel</span>

      <div >
        <button
          type="button"
          className="image-preview__button control-button"
          onClick={(e) => onHandleDelete(e, index)}
        >
          <i className="bi bi-x"></i>
        </button>
        <button
          type="button"
          className="rotate-left control-button"
          onClick={leftRotate}
        >
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>
        <button
          type="button"
          className="rotate-right control-button"
          onClick={rightRotate}
        >
          <i className="bi bi-arrow-clockwise"></i>
        </button>
      </div>
    </div>
  );
};

export default ImagePreview;
