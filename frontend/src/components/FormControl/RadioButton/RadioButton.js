import React from "react";
import "./RadioButton.css";
import { Field } from "formik";

const RadioButton = ({ name, children, value,onChange, ...props }) => {
  return (
    <label className="radio-label">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        className="radio-button optional"
        {...props}
      />
      <span className="text">{children}</span>
    </label>
  );
};

export default RadioButton;
