import UserModel from "./../../models/User";

import { generate } from "otp-generator";
import { genSalt, hash } from "bcryptjs";
import OtpModel from "../../models/Otp";
import mailService from "./mail-service";

export const signInService = async (email) => {
  // await UserModel.findOneAndUpdate(
  //   { email },
  //   { email },
  //   {
  //     new: true,
  //     upsert: true,
  //   }
  // );
  const otp = generate(4, {
    digits: true,
    lowerCaseAlphabets: false,
    specialChars: false,
    upperCaseAlphabets: false,
  });
  console.log(otp);
  await mailService.sendActivationEmail(email, otp);
  const salt = await genSalt(10);
  const hashOtp = await hash(otp, salt);
  await OtpModel.create({ email, otp: hashOtp });
};
