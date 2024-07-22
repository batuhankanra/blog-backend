import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const dbUrl=process.env.DB_URL

const db=mongoose.connect(dbUrl).then(()=>console.log('db is connected')).catch(err=>console.log(err))

export default db