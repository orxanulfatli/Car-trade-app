import React from "react";
import { useKey } from "../../../utils/useKey";

const Select = ({ style,name, items, className,text, onChange, ...rest }) => {
  const getKey = useKey();
  return (
    <select
      style={style}
      items={items}
      className={className}
      name={name}
      onChange={onChange}
      {...rest}
    >
      <option>{ text}</option>;
      {items?.map((value, index) => {
        return value.subModels ? (
          <optgroup label={value.name} key={getKey(value.name, index)}>
            {value?.subModels.map((value, index) => (
              <option key={getKey(value, index)} value={value}>
                {value}
              </option>
            ))}
          </optgroup>
        ) : (
          <option key={getKey(value.name, index)} value={value.name}>
            {value.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
