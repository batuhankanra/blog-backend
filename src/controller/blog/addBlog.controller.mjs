import { validationResult } from "express-validator"
import Blog from "../../utils/blog/blog.Schema.mjs" 


export const addBlogController=async (req,res)=>{
    const username=req.username
    const {title,desc}=req.body
    const result=validationResult(req)
    if(!result.isEmpty()){
        return res.status(404).json({result})
    }
    try{
        const newBlog= new Blog({
            username,
            title,
            desc
        })
        const saveBlog=await newBlog.save()
        if(saveBlog){
            return res.status(200).json({msg:'post paylasildi'})
        }

    }catch(err){
        console.log(err)
    }
}