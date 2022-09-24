import { Schema, model } from "mongoose";
import { CarFeaturesSchema } from './CarFeatures';

const CarSchema = new Schema({
  mark: { type: String, required: true },
  model: { type: String, required: true },

  //yanacaq novu
  fuel: { type: String, required: true },

  //oturucu
  driveType: { type: String, required: true },

  //Ban novu
  body: { type: String, required: true },

  //suret qutusu
  transmission: { type: String, required: true },

  //yurush
  kmsDriven: { type: String, required: true },

  //buraxilish ili
  release: { type: Number, required: true },

  //reng
  color: { type: String, required: true },

  //muherikin hecmi kubsantimetr
  engineCapacity: { type: Number, required: true },

  //qiymet
  price: {
    cost: { type: String, required: true },
    currency: { type: String, required: true },
  },
  //muhherikin gucu at gucu
  enginePower: { type: String, required: true },
  credit: { type: String, default: null },
  barter: { type: String, default: null },
  additionalInformation: { type: String },

  //avtomobil techizati
  features: [String],

  image: {
    front: { type: String, required: true },
    back: { type: String, required: true },
    salon: { type: String, required: true },
    other: [String],
  },
  firstName: { type: String, required: true },
  country:{type:String,required:true},
  email: {
    type: String,
    required: true,
  },
});

const Car = model('Cars', CarSchema)
export default Car;