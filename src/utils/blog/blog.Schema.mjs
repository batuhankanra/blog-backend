import mongoose from "mongoose"


const blogSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },

    title:{
        type:String,
        required:true,
        trim:true

    },
    desc:{
        type:String,
        required:true,
        trim:true
    },
    date: {
        type: Date,
        default:Date.now()
    }
})
const Blog=mongoose.model('Blog',blogSchema)
export default Blog