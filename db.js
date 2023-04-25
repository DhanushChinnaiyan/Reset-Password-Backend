import mongoose from "mongoose";
import dotenv from 'dotenv'

// dot env configuration;
dotenv.config()



const dataBaseConnection =() => {
    const params = {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try {
        mongoose.connect("mongodb+srv://dhanush:621417114021@cluster0.yv1vvqj.mongodb.net/PASSWORDRESET?retryWrites=true&w=majority",params)
    console.log("mongoDB connected")
        
    } catch (error) {
        console.log("Mongodb connection error",error)
    }
}


export default dataBaseConnection;