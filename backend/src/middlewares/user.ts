import { NextFunction, Request, Response } from "express";
import env from '../utils/validateEnv'
import jwt, { JwtPayload } from "jsonwebtoken";


enum ResonseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500,
    InputError = 411
}
declare global{
    namespace Express{
        interface Request{
            email:string;
            password:string;
            userId?:string;
        }
    }
}
const authMiddleware = (req:Request,res:Response,next:NextFunction) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(ResonseStatus.Error).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token,env.JWT_SECRET) as JwtPayload;

        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(ResonseStatus.Error).json({
            message:"Error in Authentication",
        });
    }
};

export default authMiddleware;