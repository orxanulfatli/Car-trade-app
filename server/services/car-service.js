import Car from "../models/Car";
import UserModel from "./../models/User"

export const addCarService = async (
  mark,
  model,
  fuel,
  driveType,
  body,
  transmission,
    kmsDriven,
  lengthUnit,
  release,
  color,
  engineCapacity,
  cost,
  currency,
  enginePower,
  credit,
  barter,
    additionalInformation,
  features,
  front,
  back,
  salon,
  other,
  firstName,
  country,
  email
) => {
 const car= await Car.create({
    mark,
    model,
    fuel,
    driveType,
    body,
    transmission,
    kmsDriven: kmsDriven + " " + lengthUnit,
    release,
    color,
    engineCapacity,
    price: { cost, currency },
    enginePower,
    credit,
    barter,
    additionalInformation,
   features,
   image: { front, back, salon, other },
   firstName,
    country,
    email,
  });
  await UserModel.findOneAndUpdate({ email }, { $push: { car: car._id } })
  return car
};
