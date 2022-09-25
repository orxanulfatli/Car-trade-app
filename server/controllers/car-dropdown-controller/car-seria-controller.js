import { addSeriesService, getSeriaService, } from "./../../services/car-dropdown-service/car-series.service";

export const addSeriaController = async (req, res, next) => {
  try {
    const { model, name } = req.body;
    await addSeriesService(model, name);
    res.status(200).json({ success: true, message: "seria is added" });
  } catch (error) {
    next(error);
  }
};


export const getSeriaController = async(req, res, next) => {
    try {
        const model_id = req.params.id
        const series = await getSeriaService(model_id)
        res.json(series)
    } catch (error) {
        next(error)
    }
}