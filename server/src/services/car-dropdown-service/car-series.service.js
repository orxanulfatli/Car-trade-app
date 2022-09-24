import { ApiError } from "../../utils/api-errors";
import CarSeries from "../../models/drop-down-models/CarSeries";

export const addSeriesService = async (model_id, name) => {
    const seria = await CarSeries.findOne({ name });
    if (seria) {
        throw ApiError.BadRequest('this seria is already exist')
    };

    await CarSeries.create({model:model_id,name})

};
export const getSeriaService = async (model_id) => {
    const series = await CarSeries.find({ model: model_id });
    return series
}