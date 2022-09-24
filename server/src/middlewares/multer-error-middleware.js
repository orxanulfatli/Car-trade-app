import multer from "multer"

export const multerError = (error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === "LIMIT_UNEXPECTED_FILE") {
          return res.status(400).json({message:"File must be an image",success:false})
        }
        if (error.code === "LIMIT_FILE_COUNT") {
            return res.json({message:"file limit is 22"})
        }
        next()
    }
}