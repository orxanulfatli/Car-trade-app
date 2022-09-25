import { Router } from "express";
const router = Router();
import userController from "../controllers/user-controller";
import { authUser } from "../middlewares/auth-middleware";
import {
  addModelController,
  getModelController,
} from "../controllers/car-dropdown-controller/car-model-controller";
import {
  addSeriaController,
  getSeriaController,
} from "./../controllers/car-dropdown-controller/car-seria-controller";
import { addMarkController } from "../controllers/car-dropdown-controller/car-mark-controller";
import { addCarController } from "./../controllers/car-controller";
import { upload } from "./../middlewares/multer-middleware";
import { uploadImageController } from "../controllers/upload-image-controller";
import { getCarsController } from './../controllers/get-cars-controller';
import { carDetailController } from "../controllers/car-detail-controller";

/*
  * @description to logout
  * @route /logout
  * @access Public
  * @type POST
  
*/
router.post("/logout", userController.logout);

/*
  * @description to refresh
  * @route /refresh
  * @access Private
  * @type GET
  
*/
router.get("/refresh", userController.refresh);

/*
  * @description to get all users
  * @route /users
  * @access Private
  * @type GET
  
*/
router.get("/user", authUser, userController.getUser);

router.post("/addmark", addMarkController);
router.post("/addmodels", addModelController);
router.post("/addseries", addSeriaController);
router.get("/model", getModelController);
router.get("/seria/:id", getSeriaController);

/*
  * @description to add car by email user
  * @route /addcar
  * @access Private
  * @type Post
  
*/
router.post(
  "/addcar",
  authUser,
  upload.fields([
    { name: "front" },
    { name: "back" },
    { name: "salon" },
    { name: "other", maxCount: 19 },
  ]),
  addCarController
);

/*
  * @description  login for users
  * @route /signin
  * @access Public
  * @type Post
  
*/
router.post("/signin", userController.signInController);

/*
  * @description  verify user
  * @route /verify
  * @access Public
  * @type Post
  
*/
router.post("/verify", userController.verifyController);

//upload images post

// router.post('/upload',upload.fields([{name:'front'},{name:"back"},{name:"salon"},{name:'other',maxCount:19}]),uploadImageController)
 
router.get('/getCars', getCarsController)
router.get('/carDetails/:id',carDetailController)
export default router;
