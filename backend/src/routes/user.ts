import { Router } from "express";
const userRouter = Router();
import authMiddleware from "../middlewares/user" 
import {signup,signin,bulkfilter, update} from "../controllers/user";



userRouter.post("/signup",signup)
//signin route
userRouter.post("/signin",authMiddleware,signin)

//update route
userRouter.put("/",authMiddleware,update)
//bulk filtering route
userRouter.get("/bulk",bulkfilter);

export default userRouter;