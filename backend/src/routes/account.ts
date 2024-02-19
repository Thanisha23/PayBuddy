import { Router } from "express";
import authMiddleware from "../middlewares/user";
import { getBalance, transfer, userProfile } from "../controllers/account";


const accountRouter = Router();


accountRouter.get(
  "/balance",
  authMiddleware,
  getBalance
);

accountRouter.post(
  "/transfer",
  authMiddleware,
transfer
);

accountRouter.get(
  "/userProfile",
  authMiddleware,
userProfile
);
export default accountRouter;
