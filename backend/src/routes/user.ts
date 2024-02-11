import { Router } from "express";
const userRouter = Router();
import authMiddleware from "../middlewares/user" 
import {signup,signin,bulkfilter, update,logout} from "../controllers/user";



userRouter.post("/signup",signup)
//signin route
userRouter.post("/signin",signin)

//update route
userRouter.put("/update",authMiddleware,update)
//bulk filtering route
userRouter.get("/bulk",authMiddleware,bulkfilter);
//logout route
userRouter.get("/logout",logout);
export default userRouter;