import React from "react";
import './ImageInput.css'

const ImageInput = ({ backImage, onHandleChange,name,...props }) => {
  return (
    <div className="image-input">
      <label className="image-input__label">
        <img alt="@" className={"image-input__img"} src={backImage} />
        <span className="image-input__text">ön panel</span>
        <input
          type={"file"}
          accept="image/*"
          onChange={onHandleChange}
          className="image-input__input"
          name={name}
          {...props}
        />
      </label>
    </div>
  );
};

export default ImageInput;
