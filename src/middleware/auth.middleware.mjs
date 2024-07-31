import jwt from 'jsonwebtoken'
import User from '../utils/user.Schema.mjs'


export const authMiddleware=async (req,res,next)=>{
    const token =req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({msg:'no token, authorization defined'})
    }
    try{
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        const username=decoded.username
        const user = await User.findOne({username})
        req.username=user.username
        next()

    }catch(err){
        return res.status(401).json({message:"token is not valid"})
    }
    
}