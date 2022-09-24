import React from "react";
import "./Searchbar.css";
import { useSelector } from "react-redux/es/exports";
import SearchableDropDown from "../../../components/DropDown/SearchableDropDown/SearchableDropDown";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useNavigateSearch } from "../../../utils/useNavigateSearch";
import { useEffect } from "react";
import SingleDropdown from "./../../../components/DropDown/SingleDropdown/SingleDropdown";
import Checkbox from "../../../components/FormControl/Checkbox/Checkbox";
import Select from "../../../components/FormControl/Select/Select";

const Searchbar = () => {
  const navigateSearch = useNavigateSearch();
  const initState = {
    mark: "",
    model: "",
    minRelease: "",
    maxRelease: "",
    minCost: "",
    maxCost: "",
    currency: "",
    country: "",
    fuel: "",
    barter: "",
    credit: "",
    transmission: "",
    minDistance: "",
    maxDistance: "",
  };
  const [value, setValue] = React.useState({
    ...initState,
  });
  const { marks, models, country, fuel, transmission } = useSelector(
    (state) => state.dropdown
  );

  const onChange = (e) => {
    let value;
    let name;
    let type = e.target.getAttribute("type");
    if (type === "checkbox") {
      value = e.target.checked;
      name = e.target.name;
    }
    if (e.target.value && e.target.getAttribute("type") !== "checkbox") {
      value = e.target.value;
      name = e.target.name;
    }
    if (!e.target.value) {
      value = e.target.getAttribute("value");
      name = e.currentTarget.getAttribute("name");
    }
    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleReset = (e) => {
    const name = e.target.getAttribute("name");
    setValue((prev) => {
      return { ...prev, [name]: "" };
    });
    if (name === "reset") {
      setValue({ ...initState });
    }
  };
  return (
    <>
      <div className="search-bar">
        <SearchableDropDown
          name="mark"
          placeholder={"Marka"}
          options={marks}
          onChange={onChange}
          value={value}
          handleReset={handleReset}
        />
        <SearchableDropDown
          name="model"
          placeholder={"Model"}
          options={models}
          onChange={onChange}
          value={value}
          disabled={models ? false : true}
          handleReset={handleReset}
        />
        <SingleDropdown
          values={value.minRelease + "-" + value.maxRelease + ","}
          promt={"buraxilish ili"}
        >
          <input
            placeholder="min"
            name="minRelease"
            value={value.minRelease || ""}
            onChange={(e) => onChange(e)}
          />
          <input
            placeholder="max"
            name="maxRelease"
            value={value.maxRelease || ""}
            onChange={(e) => onChange(e)}
          />
        </SingleDropdown>
        <SingleDropdown
          value={value.minCost + "-" + value.maxCost + " " + value.currency}
          promt={"Qiymet"}
        >
          <div>
            <input
              placeholder="min"
              name="minCost"
              value={value.minCost || ""}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <input
              placeholder="max"
              name="maxCost"
              value={value.maxCost || ""}
              onChange={(e) => onChange(e)}
            />
          </div>

          <select name="currency" onChange={(e) => onChange(e)}>
            <option value="AZN">AZN</option>
            <option value="USD">USD</option>
          </select>
        </SingleDropdown>
        <SearchableDropDown
          name="country"
          placeholder={"country"}
          options={country}
          onChange={onChange}
          value={value}
          handleReset={handleReset}
        />
        <div>
          <Select
            style={{ width: "100%" }}
            name={"fuel"}
            items={fuel}
            onChange={onChange}
          />
        </div>

        <div className="loan">
          <label className="label">
            <input
              type={"checkbox"}
              name="credit"
              value={"credit"}
              onChange={onChange}
            />
            <p className="checkmark">credit</p>
          </label>
          <label className="label">
            <input
              type={"checkbox"}
              name="barter"
              value={"barter"}
              onChange={onChange}
            />
            <p className="checkmark">barter</p>
          </label>
        </div>

        <div>
          <Select
            style={{ width: "100%" }}
            name={"transmission"}
            items={transmission}
            onChange={onChange}
          />
        </div>
        <button
          className="btn-search"
          onClick={() => {
            navigateSearch("/autos", value, { from: true });
          }}
        >
          search
        </button>
        <button className="btn-reset" name="reset" onClick={handleReset}>
          reset
        </button>
      </div>
    </>
  );
};

export default Searchbar;
