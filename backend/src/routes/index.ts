import { Router } from "express";
const router = Router();
import userRouter from "./user"
import accountRouter from "./account";

router.use("/user",userRouter);
router.use("/account",accountRouter)
export default router;

