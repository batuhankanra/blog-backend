import Blog  from "../../utils/blog/blog.Schema.mjs"



export const viewBlog= async (req,res)=>{
    try{
        const posts = await Blog.find({}).select('date title desc username');
        if(posts){
            return res.status(200).json({posts})
        }else{
            return res.status(404).json({msg:'hata olustu'})
        }
    }catch(err){
        console.log(err)
    }
}