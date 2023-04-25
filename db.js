import mongoose from "mongoose";

const dataBaseConnection =() => {
    const params = {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try {
        mongoose.connect(process.env.MONGODB_URL,params)
    console.log("mongoDB connected")
        
    } catch (error) {
        console.log("Mongodb connection error",error)
    }
}


export default dataBaseConnection;