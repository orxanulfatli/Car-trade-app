import Otp from "../../models/Otp"
import { ApiError } from "../../utils/api-errors";
import {compare} from "bcryptjs"
import tokenService from "./token-service";
import UserModel from "./../../models/User"

export const verifyService = async (email,otp) => {
  const otpHolder = await Otp.find({ email });
  console.log(otpHolder)
    if (otpHolder.length===0) {
        throw ApiError.BadRequest('otp is expired,please send again')
    }
  
    const rightOtpFInd = otpHolder[otpHolder.length - 1];
    const validUser = await compare(otp, rightOtpFInd.otp);
    
    if (rightOtpFInd.email === email & validUser) {
          const candidate = await UserModel.findOneAndUpdate(
            { email },
            { email },
            {
              new: true,
              upsert: true,
            }
          );
      const tokens = tokenService.generateTokens({ email });
      await tokenService.saveToken(email, tokens.refreshToken);
      return {
        ...tokens,
        email,
      };
    } else {
        throw ApiError.BadRequest("wrong otp")
    }
}
