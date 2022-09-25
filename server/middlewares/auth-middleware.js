import tokenService from "../services/auth-service/token-service";
import { ApiError } from "../utils/api-errors";

export function  authUser(req,res,next) {
try {
    const authorizatonHeader = req.headers.authorization;
    if(!authorizatonHeader) {
        return next(ApiError.UnauthorizedError());   
    };
    const accessToken = authorizatonHeader.split(" ")[1];
    
    if(!accessToken) {
        return next(ApiError.UnauthorizedError());
    };
    const userData =  tokenService.validateAccessToken(accessToken);
    if(!userData) {
        return next(ApiError.UnauthorizedError());
    };
    const {email} = userData
    req.user = email
    next();
} catch (e) {
    return next(ApiError.UnauthorizedError())
}
}