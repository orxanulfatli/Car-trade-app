import React from "react";
import "./Textarea.css";

const Textarea = ({ name, value, onChange, ...props }) => {
  return (
    <textarea
      style={{ width: "755px", height: "90px", border: "1px solid black" }}
      name={name}
      value={value}
      {...props}
      onChange={onChange}
    ></textarea>
  );
};

export default Textarea;
