import { Request,Response } from "express";
import zod from "zod";
import { ResponseStatus } from "../types/statusCode";
import { User,Account } from "../db/index";
import jwt from "jsonwebtoken";
import env from "../utils/validateEnv"
import bcrypt from "bcrypt";

const signupBody = zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()
})
const signinBody = zod.object({
    username:zod.string().email(),
    password:zod.string()
})
const updateBody = zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),
})



//signup
export const signup = async (req:Request,res:Response) => {
    const {success} = signupBody.safeParse(req.body);
    if(!success){
        return res.status(ResponseStatus.InputError).json({
            message: "Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username:req.body.username
    }).select("+password");

    if(existingUser){
        return res.status(ResponseStatus.InputError).json({
            message:"Email already taken"
        })
    }

    const hashedPassword = await bcrypt.hash(req.body.password,10)
    const user = await User.create({
        username:req.body.username,
        password:hashedPassword,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
    })

        const userId = user._id;
//creating a new account
 const acc = await Account.create({
    userId,
    balance:1+Math.random()*10000
})
//--
        const token = jwt.sign({
            userId
        },env.JWT_SECRET);

        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"none",
        }).status(ResponseStatus.Success).json({
            message:"User created successfully!",
            token:token,
            balance:acc.balance,
        })


}

//signin
export const signin = async (req:Request,res:Response)=>{
    const {success} = signinBody.safeParse(req.body);
   try {
    if(!success){
        return res.status(ResponseStatus.InputError).json({
            message:"Incorrect Inputs"
        })
    }

    const user = await User.findOne({
        username:req.body.username,
    }).select("+password");

    // if(user){
    //     const token = jwt.sign({
    //         userId:user._id
    //     },env.JWT_SECRET);

    //     res.cookie("token",token,{
    //         httpOnly:true,
    //         secure:true,
    //         sameSite:"strict",
    //     });

    //     const isMatch = await bcrypt.compare(req.body.password,user.password)
    //     return res.status(ResponseStatus.Success).json({
    //         token:token,
    //         message:"Login successful",
    //     })
       
    // }
    if(!user){
        return res.status(ResponseStatus.Error).json({
            message:"User not found"
        });
    }
    
    const isMatch = await bcrypt.compare(req.body.password,user.password);

    if(isMatch){
        const token = jwt.sign({
            userId:user._id,
          
        },env.JWT_SECRET);
        res.cookie("token",token,{
                    httpOnly:true,
                    secure:true,
                    sameSite:"none",
                });
                return res.status(ResponseStatus.Success).json({
                            token:token,
                            message:"Login successful",
                        });
    }

    return res.status(ResponseStatus.Error).json({
        message:"Incorrect Password",
    })
   } catch (error) {
    res.status(ResponseStatus.Error).json({
        message:"Error while logging in!"
    });
   }
};

//update
export const update = async (req:Request,res:Response) =>{
    // const {firstName,lastName,password} = req.body;
    console.log(req.user._id);
try {
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        res.status(ResponseStatus.Error).json({
            message:"Invalid Inputs"
        })
    }
    const hashedPassword = await bcrypt.hash(req.body.password,10)
    const updatedUser = await User.findOneAndUpdate({
        _id:req.user._id
    } ,
    { firstName:req.body.firstName, lastName:req.body.lastName, password:hashedPassword},{
        new:true
    }
    
    );

    if(!updatedUser){
        return res.status(ResponseStatus.NotFound).json({
            message:"User Not Found",
        })
    }
    res.json({
        message:"Updated successfully"
    })
} catch (error) {
    console.error("Error updating the");
    res.status(ResponseStatus.Error).json({
        message:"Error",
    })
}

}

export const bulkfilter = async (req:Request,res:Response) =>{
    const filter = req.query.filter || "";

   try {
    const users  = await User.find({
        $or: [{
            firstName:{
                "$regex":filter
            }
        },{
            lastName:{
                "$regex":filter
            }
        },{
            username:{
                "$regex":filter
            }
        }]
    })
        // console.log(users);

    res.status(ResponseStatus.Success).json({
        user:users.map((user) => ({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
   } catch (error) {
    console.error("Error fetching users",error);
    res.status(ResponseStatus.Error).json({
        message:"Error",
    })
   }

}
// userRouter.delete("/deleteUser",authMiddleware,async(req:MyRequest,res:Response)=>{
//     try {
//         const user = await User.findOne({
//             _id:req.userId,
//         })
//         if(!user){
//             return res.status(ResonseStatus.NotFound).json({
//                 message:"User Not Found"
//             });
//         }
//         await User.deleteOne({
//             _id:user._id,
//         });

//         res.status(ResonseStatus.Success).json({
//             message:"User deleted successfully",
//         })
//     } catch (error) {
//         console.error("Error deleting user",error);
//         res.status(ResonseStatus.Error).json({
//             message:"Error",
//         })
//     }
// })


export const logout = async(req:Request,res:Response) => {
   
    // const {username} = req.body;
    // try {
    //     res.status(ResponseStatus.Success).cookie("token","",{
    //         expires:new Date(Date.now()),
    //         sameSite:"strict",
    //         secure:true,
    //     }).json({
    //         message:"Logout successful",
    //         user:username,
    //     })
    // } catch (error) {
    //     res.status(ResponseStatus.Error).json({
    //         message:"Error Loggin out",
    //     });
    // }
    try {
        res.clearCookie("token", { sameSite: "none", secure: true }).status(ResponseStatus.Success).json({
            message:"Logout successful",
        });

    } catch (error) {
        res.status(ResponseStatus.Error).json({
            message:"Error Logging out",
        })
    }
   }