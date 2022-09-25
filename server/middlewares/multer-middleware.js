import multer from "multer"
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
    if (file.mimetype.split('/')[0] === 'image') {
        cb(null,true)
    }
    else {
        cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'),false)
    }
}
export const upload = multer({storage,fileFilter,limits:{files:22}})