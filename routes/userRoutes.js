
import { Router } from 'express'
import { curruntUserInfo, loginUser, registerUser } from '../controller/userController.js'
import { validationToken } from './../middleware/VerifyToken.js';
const UsersRouter=Router()
UsersRouter.route('/register').post(registerUser)
UsersRouter.route('/login').post(loginUser)
UsersRouter.route('/current').get(validationToken,curruntUserInfo)

export default UsersRouter