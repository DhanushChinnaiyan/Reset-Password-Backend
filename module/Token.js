import mongoose from "mongoose";

const {ObjectId} = mongoose.Schema

const tokenSchema = new mongoose.Schema(
    {
        userId:{
            type:ObjectId,
            required:true
        },
        token:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now,
            expires:300
        }
    }
)


const Token = mongoose.model("token",tokenSchema)

export default Token;