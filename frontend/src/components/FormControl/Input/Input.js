import React from "react";
import "./Input.css";
import { Field } from "formik";

const Input = ({ value,name,onChange,...props }) => {
  return (
    <>
      <input className="input"  value={value} name={name} onChange={onChange}  {...props} />
    </>
  );
};

export default Input;
