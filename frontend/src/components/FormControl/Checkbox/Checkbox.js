import React from 'react';
import { Field } from 'formik';
import "./Checkbox.css"
const Checkbox = ({ name, children, value,onChange,className, ...props }) => {
  return (
    <label className={`checkbox-label ${className}`}>
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />

      <span>{children}</span>
    </label>
  );
};

export default Checkbox