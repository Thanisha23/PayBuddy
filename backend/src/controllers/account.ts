import { ResponseStatus } from "../types/statusCode";
import { Request,Response } from "express";
import { Account } from "../db/index";
import mongoose from "mongoose";
export const getBalance = async (req: Request, res: Response) => {
    try {
      const account = await Account.findOne({
        userId: req.user._id,
      });

      if (!account) {
        return res.status(ResponseStatus.NotFound).json({
          message: "User with this account not found!",
        });
      }

      res.status(ResponseStatus.Success).json({
        message: "User found",
        balance: account.balance,
      });
    } catch (error) {
      console.error("Error fetching user's balance:", error);
      res.status(ResponseStatus.Error).json({
        message: "Internal server error",
      });
    }
  }

  export const userProfile = async (req:Request,res:Response) => {
    try {
      res.status(ResponseStatus.Success).json({
        success:true,
        user:req.user,
      })
    } catch (error) {
      console.error("Error fetching user name:", error);
      res.status(ResponseStatus.Error).json({
        message: "Internal server error",
      });
    }
  }

  export const transfer = async (req: Request, res: Response) => {
    //for atomic transaction we'll be doing the follows
    const session = await mongoose.startSession();

    try {
      session.startTransaction();
    const { amount, to } = req.body;
    //to fetch the accounts involved in the transaction
    const account = await Account.findOne({ userId: req.user._id }).session(
      session
    );

    if (!account || account.balance < amount) {
      await session.abortTransaction();
      return res.status(ResponseStatus.Error).json({
        message: "Insufficient balance",
      });
    }

    const toAccount = await Account.findOne({
      userId: to,
    }).session(session);

    if (!toAccount) {
      await session.abortTransaction();
      return res.status(ResponseStatus.Error).json({
        message: "Invalid Account",
      });
    }

    //doing the transaction
    const updateSender = await Account.updateOne(
      { userId: req.user._id },
      {
        $inc: { balance: -amount },
      }
    ).session(session);

    const updateReceiver = await Account.updateOne(
      { userId: to },
      {
        $inc: { balance: amount },
      }
    ).session(session);
      console.log(updateSender);
      console.log(updateReceiver);
    //commit transaction
    await session.commitTransaction();

    res.status(ResponseStatus.Success).json({
      message: "Transfer successful",
    });
    } catch (error) {
      await session.abortTransaction();
      console.error("Error in transferring money",error);
      res.status(ResponseStatus.Error).json({
        message:"Error",
      })
    }
  }