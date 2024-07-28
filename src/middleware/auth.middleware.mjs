import jwt from 'jsonwebtoken'


export const authMiddleware=(req,res,next)=>{
    const token =req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({msg:'no token, authorization defined'})
    }
    try{
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        req.user=decoded.user
        next()

    }catch(err){
        return res.status(401).json({message:"token is not valid"})
    }
    
}