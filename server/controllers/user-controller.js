import constants from "../constants";
import logoutService from "../services/auth-service/logout-service";
import refreshService from "../services/auth-service/refresh-service";
import { getUser } from "../services/auth-service/get-user-service";
import { signInService } from "../services/auth-service/sign-in-service";
import { verifyService } from "../services/auth-service/verify-service";

class UserController {
  signInController = async (req, res, next) => {
    try {
      const { email } = req.body;
      const data = await signInService(email);
      res
        .status(200)
        .json({
          success: true,
          message: "activation code sen please check your email adreess",
        });
    } catch (error) {
      next(error);
    }
  };

  //verify code

  verifyController = async (req, res, next) => {
    try {
      const { accessToken, refreshToken, email } = await verifyService(
        req.body.email,
        req.body.otp
      );
      res.cookie("refreshToken", refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict',
        secure:true
      });
      console.log(res.cookie);
      return res.json({ accessToken, email });
    } catch (error) {
      next(error);
    }
  };

  //user logout
  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      console.log(req.cookies);
      const tokenData = await logoutService.logout(refreshToken);
      res.clearCookie("refreshToken");
      res.status(200).json({ success: true, message: "Logged out" });
    } catch (error) {
      next(error);
    }
  }
  //refresh
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      console.log(refreshToken)
      const userData = await refreshService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (error) {
      next(error);
    }
  }
  async getUser(req, res, next) {
    const email = req.user
    try {
      const user = await getUser(email);
      console.log(user)
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
