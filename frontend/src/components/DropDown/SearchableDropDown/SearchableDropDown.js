import React, { useState, useRef, useEffect, useCallback } from "react";
import "./SearchableDropDown.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addModelsAC } from "../../../Global/actions/dropdownActions";
import { useOutsideClick } from "../../../utils/useOutsideClick";
import { useToggle } from "../../../utils/useTogle";

const SearchableDropDown = ({
  disabled,
  options,
  name,
  placeholder,
  value,
  onChange,
  handleReset
}) => {
  const [toggle, handleToggle, setToggleStatus] = useToggle();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleClose = () => {
    setToggleStatus(false);
    setQuery("");
  };
  const ref = useOutsideClick(handleClose, toggle);
  const dropdownFilter = (options) => {
    return options?.filter((option) =>
      option.name.toLowerCase().includes(query)
    );
  };

  const displayValue = (query, name) => {
    if (query.length > 0) return query;
    if (value[name]) return value[name];
    return "";
  };

  return (
    <div className="dropdown">
      <div className="control">
        <div className={`selected-value ${disabled ? "opacity" : null} `}>
          <input
            type="text"
            className="search-input"
            placeholder={placeholder}
            value={displayValue(query, name)}
            disabled={disabled}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            ref={ref}
            onClick={handleToggle}
          />
        </div>
        <div>
          {value?.[name]?.length > 1 && (
            <button
              name={name}
              onClick={(e) => {
                handleReset(e)
                setQuery("");
                dispatch(addModelsAC(null));
              }}
            >
              x
            </button>
          )}
        </div>
        <div className="arrow"></div>
      </div>
      {toggle ? (
        <div className="options">
          {dropdownFilter(options)?.map((option, index) => {
            return option.subModels ? (
              <div className="optgroup" key={option.name.toString()}>
                <div className="label">{option.name}</div>
                {option.subModels.map((option, index) => {
                  return (
                    <div
                      className="option"
                      name={name}
                      key={index.toString()}
                      value={option.name}
                      onClick={(e) => {
                        setQuery("");
                        onChange(e);
                        setToggleStatus(false);
                      }}
                    >
                      {option}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                className="option"
                  name={name}
                  value={option.name}
                key={index.toString()}
                onClick={(e) => {
                  setQuery("");
                  onChange(e);
                  setToggleStatus(false);
                  const mark = options?.find(
                    (mark) => mark.name === option.name
                  );
                  if (mark?.models) {
                    dispatch(addModelsAC(mark.models));
                  }
                }}
              >
                {option?.name}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchableDropDown;
