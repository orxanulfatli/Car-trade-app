import { addImageService } from "../services/upload-s3-service";
import { addCarService } from "./../services/car-service";

export const addCarController = async (req, res, next) => {
 try {
   const {
     mark,
     model,
     fuel,
     driveType,
     body,
     transmission,
     kmsDriven,
     lengthUnit,
     release,
     color,
     engineCapacity,
     cost,
     currency,
     enginePower,
     credit,
     barter,
     additionalInformation,
     features,
     firstName,
     country,
   } = req.body;
   const email = req.user;
   console.log(req.body)
   console.log(req.files);
   //adding image
   const front = await addImageService(req.files.front);
   const back = await addImageService(req.files.back);
   const salon = await addImageService(req.files.salon);
   const other = await addImageService(req.files.other);

   const frontUrl = front[0].Location;
   const backUrl = back[0].Location;
   const salonUrl = salon[0].Location;
   const otherUrl = other.map((item) => item.Location);

   const car = await addCarService(
     mark,
     model,
     fuel,
     driveType,
     body,
     transmission,
     kmsDriven,
     lengthUnit,
     release,
     color,
     engineCapacity,
     cost,
     currency,
     enginePower,
     credit,
     barter,
     additionalInformation,
     features,
     frontUrl,
     backUrl,
     salonUrl,
     otherUrl,
     firstName,
     country,
     email
   );

   if (car.barter) {
     console.log(car.barter)
   } else {
     console.log('barter mumkun deyil')
   }
   res.status(200).json({...car});
 } catch (error) {
  next(error)
 }
};
