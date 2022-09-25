import { getCars } from "../services/get-cars-service"

export const getCarsController = async(req, res, next) => {
    try {
      const cars = await getCars();
      res.status(200).json({ success: true, cars });
    } catch (error) {
              next(error);

    }
}