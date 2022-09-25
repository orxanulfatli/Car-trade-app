import CarMark from '../../models/drop-down-models/CarMark'
import { ApiError } from '../../utils/api-errors';

export const addMarkService = async (name) => {
    let mark = await CarMark.findOne({ name });
    if (mark) {
        throw ApiError.BadRequest('A car with this name already exist')
    }

     await CarMark.create({ name });
};
 


