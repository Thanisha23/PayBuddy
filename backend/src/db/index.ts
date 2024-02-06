import mongoose from "mongoose";
import env from "../utils/validateEnv"
mongoose.connect(env.MONGO_URL);
mongoose.connection.on('connected',() =>{
    console.log("Connected to MongoDB");
});
mongoose.connection.on('error',(err) =>{
    console.log("MongoDB connection error:",err);
});


//user schema
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:25
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
});

//account schema
const AccountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,//Like foreign key for sql db , similarly ref in nosql db
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
});

//model
export const User = mongoose.model('User',UserSchema);
export const Account = mongoose.model('Account',AccountSchema)
