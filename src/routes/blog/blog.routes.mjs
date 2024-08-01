import express from 'express'
import { addBlogController } from '../../controller/blog/addBlog.controller.mjs'
import { authMiddleware } from '../../middleware/auth.middleware.mjs'
import { checkSchema } from 'express-validator'
import { addBlogValidation } from '../../utils/blog/blog.validation.mjs'
import { viewBlog } from '../../controller/blog/viewBlog.controller.mjs'

export const blogRoutes=express.Router()


blogRoutes.post('/addBlog',authMiddleware,checkSchema(addBlogValidation),addBlogController)
blogRoutes.get('/viewblog',viewBlog)