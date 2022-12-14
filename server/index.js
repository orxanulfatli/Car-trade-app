import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser"
import path from 'path'

import mongoose from "mongoose";

//import Apication constantsnp
import constants from "./constants";

//Router imports
import userRoutes from "./Routes/user-route";
//errorMidlleware import
import {errorMiddleware} from "./middlewares/error-middleware"
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

//init express app
const app = express();
//Apply Aplication Midlewares
app.use(
  cors({
    credentials: true,
    origin: [constants.CLIENT_URL , "http://localhost:3000"],
  })
);

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({
extended:true
}));

app.use("/api/v1", userRoutes);
  const __dirname1 = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname1, '/frontend/build')))
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  )
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  })
}

//Inject Routes


app.use(errorMiddleware);




const main = async () => {
  try {
      //connect do databse
  const conn= await mongoose.connect(constants.DB,{
        useNewUrlParser:true,
       
        useUnifiedTopology:true
    });
    console.log('hello database')
      //start application  listening for request on server
     await app.listen(constants.PORT,()=>console.log(`server runnin on port ${constants.PORT}`))
      
  } catch (error) {
      console.log(error)
  }
};
main()