import {
  marks,
  body,
  carFeatures,
  color,
  country,
  distance,
  driveType,
  engineCapacity,
  fuel,
  releaseYear,
  transmission,
} from "../../data";
const items = [
  {
    name: "Marka",
  },
  { name: "Abarth", models: [{ name: "595" }] },
  {
    name: "Alfa Romeo",
    models: [
      { name: "147" },
      { name: "159" },
      { name: "4C" },
      { name: "Giulia" },
      { name: "Giulietta" },
      { name: "Mito" },
      { name: "Stelvio" },
    ],
  },

  { name: "Aprilia", models: [{ name: "RS 125" }, { name: "SR 300 MAX" }] },
  {
    name: "Baic",
    models: [
      { name: "A113/A115" },
      { name: "M 20" },
      { name: "M 60" },
      { name: "Senova D50" },
      { name: "X 3" },
      { name: "X 55" },
      { name: "x 7" },
    ],
  },
  {
    name: "BMW",
    models: [
      {
        name: "1-series",
        subModels: ["116", "118", "123", "130"],
      },
      { name: "2-series", subModels: ["218", "235"] },
      {
        name: "3-series",
        subModels: ["316", "318", "320", "323", "325", "328", "330", "335"],
      },
      { name: "4-series", subModels: ["420", "428", "430"] },
      {
        name: "5-series",
        subModels: [
          "520",
          "520 GT",
          "523",
          "525",
          "528",
          "530",
          "530e",
          "535",
          "535 GT",
          "570",
        ],
      },
      { name: "6-series", subModels: ["630", "640", "650"] },
      {
        name: "7-series",
        subModels: ["728", "730", "735", "740", "745", "745Le", "750", "760"],
      },
      { name: "8-series", subModels: ["840"] },
      {
        name: "BMW Moto",
        subModels: [
          "R 1200 GS",
          "R 1200 GS Adventure",
          "R Nine T",
          "s 1000 RR",
        ],
      },
      { name: "M-series", subModels: ["M5", "M6", "M8", "X5 M", "X6 M"] },
      {
        name: "X-series",
        subModels: ["X1", "X2", "X3", "X4", "X5", "X6", "X7"],
      },
      { name: "Z-series", subModels: ["Z3"] },
      { name: "i-series", subModels: ["iX"] },
    ],
  },
  {
    name: "Cadillac",
    models: [
      { name: "ATS" },
      { name: "CT6" },
      { name: "CTS" },
      { name: "CTS-V" },
      { name: "Escalade" },
      { name: "SRX" },
      { name: "XTS" },
      { name: "" },
    ],
  },
  {
    name: "Chevrolet",
    models: [
      { name: "Avalanche" },
      { name: "Aveo" },
      { name: "Blazer" },
      { name: "Camaro" },
      { name: 'Captiva' },
      { name: 'Cobalt' },
      { name: "Colorado" },
      { name: "Cruze" },
      { name: "Damaz" },
      { name: "Epica" },
      { name: "Equinox" },
      { name: "Evanda" },
      { name: "Kalos" },
      { name: "Labo" },
      { name: "Lacetti" },
      { name: "Malibu" },
      { name: "Menlo" },
      { name: "Nexia" },
      { name: "Niva" },
      { name: "Nubira" },
      {name:"Orlando"}, 
    ],
  },
  {
    name: "Hunday",
    models: [{ name: "600" }, { name: "700" }, { name: "800" }],
  },
];
const initState = {
  marks: items,
  models: null,
  body,
  carFeatures,
  color,
  country,
  distance,
  driveType,
  engineCapacity,
  fuel,
  releaseYear,
  transmission,
};

export const dropdownReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ADD_MODELS":
      return {
        ...state,
        models: payload,
      };
    default:
      return state;
  }
};
