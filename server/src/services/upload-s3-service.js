import {S3} from "aws-sdk"
import constants from "../constants";

export const addImageService = async (files) => { 
    const s3 = new S3();
    
//     const params = {
//       Bucket: constants.AWS_BUCKET_NAME,
//       Key: `${new Date().toISOString().replace(/:/g, "-")}-${
//         file.originalname
//       }`,
//         Body: file.buffer,
      
//   };
  
//  return await s3.upload(params).promise();

   const params = files.map((file) => {
     return {
       Bucket: constants.AWS_BUCKET_NAME,
       Key: `${new Date().toISOString().replace(/:/g, "-")}-${
         file.originalname
       }`,
       Body: file.buffer,
     };
   });
 return await Promise.all(params.map(param =>s3.upload(param).promise()))
}
