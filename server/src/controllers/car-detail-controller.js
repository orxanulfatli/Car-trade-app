import { carDetailsService } from "../services/car-detail-service";

export const carDetailController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await carDetailsService(id);
    res.status(200).json({ car });
  } catch (error) {
    next(error);
  }
};
