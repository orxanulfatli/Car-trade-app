import React from "react";
import { useOutsideClick } from "../../../utils/useOutsideClick";
import { useToggle } from "../../../utils/useTogle";
import "./SingleDropdown.css";

const SingleDropdown = ({ promt, value, children }) => {
  const [toggle, handleToggle, setToggleStatus] = useToggle();
  const handleClose = () => {
    setToggleStatus(false);
  };
  const ref = useOutsideClick(handleClose, toggle);

  const displayValue = (value, promt) => {
    //because in default values = ' - ,AZN'
    if (value?.length > 5) return value;
    return promt;
  };

  return (
    <div className="single-dropdown" ref={ref}>
      <div className="single-dropdown__control">
        <div
          className="single-dropdown__control--selected-value"
          onClick={handleToggle}
        >
          {displayValue(value, promt)}
        </div>
        {/* <div className="single-dropdown__control--icon"></div> */}
      </div>

      <div className={`single-dropdown__option ${toggle ? "open" : null}`}>
        {children}
      </div>
    </div>
  );
};

export default SingleDropdown;
