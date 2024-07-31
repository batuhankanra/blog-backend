import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './src/utils/db.mjs'
import { authRoutes } from './src/routes/auth/auth.routes.mjs'
import { blogRoutes } from './src/routes/blog/blog.routes.mjs'


const app =express()
dotenv.config()
app.use(cors())
app.use(express.json())
db


app.use('/api/auth',authRoutes)
app.use('/api/product',blogRoutes)





const url =process.env.PORT
app.listen(url ,()=>{
    console.log('server is running' ,url)
})





