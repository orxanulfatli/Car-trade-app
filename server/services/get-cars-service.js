import Car from "../models/Car"

export const getCars = async () => {
    const cars = await Car.find()
    return cars
}