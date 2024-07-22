import User from '../utils/user.Schema.mjs'
import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'


export const registerController= async (req,res)=>{
    const {username,password,email}=req.body
    const result = validationResult(req)
    if(!result.isEmpty()){
        return res.status(400).json({result})
    }
    try{
        const controlUsername= await User.findOne({username})
        const controlEmail= await User.findOne({email})
        if(controlUsername || controlEmail){
            return res.status(400).json({msg:'boyle bir kullanici var'})
        }
        const passwordHash= await bcrypt.hash(password,10)
        const newUser=new User({
            username,
            email,
            password:passwordHash
        })
        const saveUser=await newUser.save()
        if(saveUser){
            return res.status(201).json({msg:'Kayit Basarili',username,email})
        }


    }catch(err){
        return res.status(404).json({msg:'fail request'})
    }
    
}