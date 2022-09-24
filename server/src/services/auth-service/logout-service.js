import tokenService from "./token-service";

class LogoutService {
 async logout (refreshToken){
     const token = await tokenService.removeToken(refreshToken);
     return token

 }
};

export default new LogoutService();