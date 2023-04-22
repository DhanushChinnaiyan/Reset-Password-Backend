import mongoose from "mongoose";
import dotenv from 'dotenv'

// dot env configuration;
dotenv.config()

const params = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const dataBaseConnection =() => {
    mongoose.connect(process.env.MONGO_URL)
    console.log("mongoDB connected")
}


export default dataBaseConnection;