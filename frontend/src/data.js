import { generateRange, generateYearRange } from "./utils/generateRange";

export const marks = [
  {name:"marka sec"},
  {
    id: "audio",
    name: "Audio",
    models: [
      { id: "100", name: "100" },
      { id: "200", name: "200" },
      { id: "80", name: "80" },
      { id: "90", name: "90" },
      { id: "A1", name: "A1" },
      { id: "A2", name: "A2" },
      { id: "A3", name: "A3" },
      { id: "A4", name: "A4" },
      {
        id: "A5",
        name: "A5",
        subModels: [
          { id: "A5", name: "A5" },
          { id: "A5 Sportback", name: " A5 Sportback" },
        ],
      },
      { id: "A6", name: "A6" },
      { id: "A7", name: "A7" },
      { id: "A7 Sportback", name: "A7 Sportback" },
      { id: "A8", name: "A8" },
      { id: "Allroad", name: "Allroad" },
      { id: "Q2", name: "Q2" },
      { id: "Q2 e-ton", name: "Q2 e-ton" },
      { id: "Q3", name: "Q3" },
    ],
  },

  //B
  {
    id: "Mercedes",
    name: "Mercedes",
    models: [{ id: "", name: "filan", subModels: [{ id: "milan", name: "s" }] }],
  },
  { id: "Hunday", name: "Hunday", models: ["525", "526", "527"] },
  { id: "BMW", name: "BMW", models: ["525.3", "526.7", "527.8"] },
  { id: "OPEl", name: "OPEl", models: ["525.0", "526.5", "527.2"] },
];

export const body = [
  { name: "Avtobus" },
  { name: "Dartqı" },
  { name: "Furqon" },
  { name: "Hetçbek / Liftbek" },
  { name: "Kabrio" },
  { name: "Karvan" },
  { name: "Kupe" },
  { name: "Kvadrosikl" },
  { name: "Mikroavtobus" },
  { name: "Minivan" },
  { name: "Motosiklet" },
  { name: "Offroader / SUV" },
  { name: "Pikap" },
  { name: "Qolfkar" },
  { name: "Rodster" },
  { name: "Sedan" },
  { name: "Universal" },
  { name: "Van" },
  { name: "Yük maşını" },
];

export const distance = [];
export const color = [
  { name: "Qara" },
  { name: "Yaş Asfalt" },
  { name: "Boz" },
  { name: "Gümüşü" },
  { name: "Ağ" },
  { name: "Bej" },
  { name: "Tünd qırmızı" },
  { name: "Qırmızı" },
  { name: "Çəhrayı" },
  { name: "Narıncı" },
  { name: "Qızılı" },
  { name: "Sarı" },
  { name: "Yaşıl" },
  { name: "Mavi" },
  { name: "Göy" },
  { name: "Bənövşəyi" },
  { name: "Qəhvəyi" },
];

export const fuel = [
  { name: "Benzin" },
  { name: "Dizel" },
  { name: "Qaz" },
  { name: "Elektro" },
  { name: "Hibrid" },
  { name: "Plug-in Hibrid" },
];

export const driveType = [{ name: "Arxa" }, { name: "Ön" }, { name: "Tam" }];
export const transmission = [
  { name: "Mexaniki" },
  { name: "Avtomat" },
  { name: "Robotlaşdırılmış" },
  { name: "Variator" },
];
export const carFeatures = [
  { name: "Yüngül lehimli disklər" },
  { name: "ABS" },
  { name: "Lyuk" },
  { name: "Yağış sensoru" },
  { name: "Mərkəzi qapanma" },
  { name: "Park radarı" },
  { name: "Kondisioner" },
  { name: "Oturacaqların isidilməsi" },
  { name: "Dəri salon" },
  { name: "Ksenon lampalar" },
  { name: "Arxa görüntü kamerası" },
  { name: "Yan pərdələr" },
  { name: "Oturacaqların ventilyasiyası" },
];

export const country = [{ name: "astara" }, { name: "baki" },{name:'Gence'},{name:'Ağdam'}];

export const releaseYear = generateYearRange(1902);
export const engineCapacity = generateRange(50, 500, 50)
  .concat(generateRange(600, 6500, 100))
  .concat(generateRange(7000, 10000, 500))
  .concat(generateRange(11000, 16000, 1000));
