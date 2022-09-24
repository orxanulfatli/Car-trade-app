import React from "react";
import Checkbox from "./Checkbox/Checkbox";
import Input from "./Input/Input";
import RadioButton from "./RadioButton/RadioButton";
import Select from "./Select/Select";
import ImageInput from "../../Pages/NewCar/CarImage/ImageInput/ImageInput";
import Textarea from "./Textarea/Textarea";
import { useFormikContext, useField } from "formik";
import { addModelsAC } from "../../Global/actions/dropdownActions";
import { useDispatch } from "react-redux";

const FormControl = ({ control, items, name, className, ...props }) => {
  const dispatch = useDispatch();
  const { setFieldValue,getFieldHelpers } = useFormikContext();
  const [field] = useField(name);
  const handleChange = (e) => {
    let value;
    let type = e.target.getAttribute("type");
    const name = e.target.name;
    if (type === "checkbox" && !e.target.value) {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }
    setFieldValue(name, value);
    const mark = items?.find((mark) => mark.name === value);
    debugger;
    if (mark?.models) {
      dispatch(addModelsAC(mark.models));
    }
  };
  switch (control) {
    case "input":
      return (
        <Input
          name={name}
          value={field?.value}
          onChange={handleChange}
          {...props}
        />
      );
    case "textarea":
      return (
        <Textarea
          name={name}
          value={field?.value}
          onChange={handleChange}
          {...props}
        />
      );
    case "select":
      return (
        <Select
          name={name}
          onChange={handleChange}
          items={items}
          className={className}
          {...props}
        />
      );
    case "radio":
      return (
        <RadioButton
          name={name}
          value={field?.value}
          onChange={handleChange}
          {...props}
        />
      );
    case "checkbox":
      return (
        <Checkbox
          name={name}
          value={field?.value}
          onChange={handleChange}
          {...props}
        />
      );
    case "image":
      return <ImageInput name={name} {...props} />;

    default:
      return null;
  }
};

export default FormControl;
