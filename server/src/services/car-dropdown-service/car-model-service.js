import CarModel from "../../models/drop-down-models/CarModel";
import { ApiError } from "./../../utils/api-errors";

export const addModelService = async (mark_id, name) => {
  let model = await CarModel.findOne({ name });
  if (model) {
    throw ApiError.BadRequest("A model with this name is already exist");
  }
  await CarModel.create({ mark: mark_id, name });
};
export const getModel = async (mark_id) => {
  //find ile error handle nece yazirlar bax sonra,callback funksiyasinan error tullamaqda cetinlik aranir
  const model = await CarModel.find({ mark: mark_id })
  .populate({
    path: "mark",
    model: "Mark",
  });
console.log(model)
  return model;
};

