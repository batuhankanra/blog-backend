import User from "../utils/user.Schema.mjs"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const loginController=async (req,res)=>{
    const {username,password}=req.body
    try{
        const user=await User.findOne({username})
        if(!user){
            return res.status(400).json({msg:'boyle bir kullanici var'})
        }
        const match= await bcrypt.compare(password,user.password)
        if(!match){
            return res.status(400).json({msg:'sifre hatali'})
        }
        const token=jwt.sign({id:user.__id,username:user.username},process.env.SECRET_KEY,{expiresIn:'1h'})
        return res.status(200).json({msg:'giris basarili',token})

    }catch (err){
        console.log(err)
    }
}