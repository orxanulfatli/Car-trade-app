import { addImageService } from "./../services/upload-s3-service";

export const uploadImageController = async (req, res, next) => {
  try {
     
    console.log(req.files)
    console.log(req.body)
   

 const front=   await addImageService(req.files.front)
 const back=    await addImageService(req.files.back);
 const salon=   await addImageService(req.files.salon);
    const other = await addImageService(req.files.other);
    
    const frontUrl = front[0].Location
    const backUrl = back[0].Location
    const salonUrl = salon[0].Location
    const otherUrl = other.map(item=>item.Location)
   
    console.log("front image", frontUrl, "--------------------------");
    console.log("back image", backUrl, "--------------------------");
    console.log("salon image", salonUrl, "--------------------------");
    console.log("other image", otherUrl, "--------------------------");
  
    res.status(200).json({status:true,message:"success"})
  } catch (error) {
    console.log(error);
    next(error);
  }
};
