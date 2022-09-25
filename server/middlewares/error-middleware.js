import { ApiError } from "../utils/api-errors";
import multer from "multer";


export const errorMiddleware = (err,req,res,next) => {
    if(err instanceof ApiError) {
        return res.status(err.status).json({success:false,message:err.message,errors:err.errors})
    }
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_UNEXPECTED_FILE") {
          return res
            .status(400)
            .json({ message: "File must be an image", success: false });
        }
        if (err.code === "LIMIT_FILE_COUNT") {
          return res.json({ message: "file limit is 22" });
        }
        next();
      }
    return res.status(500).json({success:false,message:'Internal Server Error'})
}