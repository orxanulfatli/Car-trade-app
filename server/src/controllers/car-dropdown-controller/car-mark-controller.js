import { addMarkService } from "../../services/car-dropdown-service/car-marks-service";

export const addMarkController = async (req, res, next) => {
  try {
    const { name } = req.body;
    await addMarkService(name);
    res.status(200).json({ success: true, message: "mark is added" });
  } catch (error) {
    next(error);
  }
};
