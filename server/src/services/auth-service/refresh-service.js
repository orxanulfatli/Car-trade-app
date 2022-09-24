import { ApiError } from "../../utils/api-errors";
import tokenService from "./token-service";
import userModel from '../../models/User'
import UserDto from "../../dtos/user-dto";

class RefreshService {
    async refresh (refreshToken){
        if(!refreshToken) {
            throw ApiError.UnauthorizedError()
            console.log('burda')
        };
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = await tokenService.findToken(refreshToken);
        if(!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError()
            console.log('burd')
        };
        const { email } = userData;
     
        // const user= await userModel.findById(userData.id)
        // const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ email });
        await tokenService.saveToken(email, tokens.refreshToken);
        return {
          ...tokens,
          email,
        };
    }
}

export default new RefreshService()