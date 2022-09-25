
import { addModelService, getModel } from '../../services/car-dropdown-service/car-model-service';

export const addModelController = async (req, res, next) => {
    try {
        const { mark_id, name } = req.body;
        await addModelService(mark_id, name);
        res.status(200).json({success:true,message:'model is added'})
    } catch (error) {
        next(error)
    }
}

export const getModelController = async (req, res, next) => {
    try {
        const { mark_id } = req.body
        const model = await getModel(mark_id)
        res.json({model})
    } catch (error) {
        next(error)
    }
}