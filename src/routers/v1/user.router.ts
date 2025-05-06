import express from 'express';
import { createUserHandler, getUserByIdHandler } from '../../controllers/user.controller';
import { validateRequestBody } from '../../validators';
import { userSchema } from '../../validators/user.validator';


const userRouter = express.Router();

userRouter.post('/',validateRequestBody(userSchema), createUserHandler)
userRouter.get('/:id', getUserByIdHandler)


export default userRouter;