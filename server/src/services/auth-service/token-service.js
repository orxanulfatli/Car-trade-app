import { sign,verify } from "jsonwebtoken";
import constants from "../../constants/index";
import tokenModel from "../../models/Token";
import { ApiError } from "../../utils/api-errors";
class TokenService {
    //create tokens method
  generateTokens(payload) {
    const accessToken = sign(payload, constants.JWT_ACCESS_SECRET, {
      expiresIn: "30000000s",
    });
    const refreshToken = sign(payload, constants.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });

    return {
      accessToken,
      refreshToken,
    };
  }
  //validate access and refresh token
   validateAccessToken(token) {
    try {
      const userAccessToken = verify(token,constants.JWT_ACCESS_SECRET);
      
      return userAccessToken
    } catch (error) {
      console.log(error)
     return  null   
    }
  }
   validateRefreshToken (token) {
    try {
      const userRefreshToken =  verify(token,constants.JWT_REFRESH_SECRET);
      console.log({...userRefreshToken})
      return {...userRefreshToken};
    } catch (error) {
     
        return null  
      }
  }
  //save token in db
  async saveToken(email, refreshToken) {
    const tokenData = await tokenModel.findOne({ email});
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await tokenModel.create({ email, refreshToken });
    return token;
  };
  //remove refresh token from db
  async removeToken (refreshToken) {
      const tokenData = await tokenModel.deleteOne({refreshToken});
      return tokenData
  };

  //find token in db
  async findToken(refreshToken) {
    const tokenData = await tokenModel.findOne({refreshToken})
    return tokenData
  }
}
export default new TokenService();
