import { Router } from "express";
import authMiddleware from "../middlewares/user";
import { getBalance, transfer } from "../controllers/account";


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

export default accountRouter;
