import { verifyService } from "../services/auth-service/verify-service";

export const verifyController = async (req, res, next) => {
    try {
        
        const { accessToken, refreshToken, email } = await verifyService(
          req.body.email,
          req.body.otp
        );
 res.cookie("refreshToken", refreshToken, {
   maxAge: 30 * 24 * 60 * 60 * 1000,
   httpOnly: true,
   
 });
 console.log(res.cookie);
 return res.json({ accessToken, email });
    } catch (error) {
        next(error)
    }
}