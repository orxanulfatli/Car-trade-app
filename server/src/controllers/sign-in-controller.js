import { signInService } from "../services/auth-service/sign-in-service"

export const signInController = async (req, res, next) => {
    try {
        const {email} = req.body
        const data = await signInService(email)
        res.status(200).json({ success: true, message: "activation code sen please check your email adreess" });
    }
    catch (error) {
        next(error)
    }
}