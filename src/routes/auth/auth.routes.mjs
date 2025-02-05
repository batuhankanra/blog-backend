import express from 'express'
import { registerController } from '../../controller/register.controller.mjs'
import { checkSchema } from 'express-validator'
import { createValidationSchema, loginValidationSchema } from '../../utils/validation.schame.mjs'
import { loginController } from '../../controller/login.controller.mjs'
import { authMiddleware } from '../../middleware/auth.middleware.mjs'
import { logoutController } from '../../controller/logout.controller.mjs'

export const authRoutes=express.Router()



authRoutes.post('/register',checkSchema(createValidationSchema),registerController)
authRoutes.post('/login',checkSchema(loginValidationSchema),loginController)
authRoutes.post('/logout',authMiddleware,logoutController)