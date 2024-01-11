import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const mongoDB = async () => {

    try{
        
    const connect = await mongoose.connect(process.env.MONGO_URL)
    if (connect) {
        console.log("Mongodb connected")
    }

    }catch(error){
        console.log(error.message)
    }


}
export default mongoDB;



