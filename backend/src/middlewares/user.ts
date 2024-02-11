import { NextFunction, Request, Response } from "express";
import env from '../utils/validateEnv'
import jwt, { JwtPayload } from "jsonwebtoken";
import { ResponseStatus } from "../types/statusCode";
import { User } from "../db/index";

declare global{
    namespace Express{
        interface Request{
            email:string;
            password:string;
            userId?:string;
            user?:any;
        }
    }
}
const authMiddleware = async (req:Request,res:Response,next:NextFunction) => {
   const {token} = req.cookies;

    // console.log(token);
   if(!token){
    return res.status(ResponseStatus.Error).json({
        message:"Not logged in!",
    });
   }
const decoded = jwt.verify(token,env.JWT_SECRET) as JwtPayload;

req.user = await User.findById(decoded.userId);
// console.log(req.user);
next();
};

export default authMiddleware;