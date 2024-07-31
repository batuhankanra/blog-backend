import express from 'express'
import { addBlogController } from '../../controller/blog/addBlog.controller.mjs'
import { authMiddleware } from '../../middleware/auth.middleware.mjs'
import { checkSchema } from 'express-validator'
import { addBlogValidation } from '../../utils/blog/blog.validation.mjs'

export const blogRoutes=express.Router()


blogRoutes.get('/addBlog',authMiddleware,checkSchema(addBlogValidation),addBlogController)