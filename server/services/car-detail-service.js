import Car from "../models/Car"

export const carDetailsService = async (id) => {
    const car = await Car.findById(id)
    return car
}