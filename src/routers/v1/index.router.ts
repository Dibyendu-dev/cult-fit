import express from 'express';
import pingRouter from './ping.router';
import userRouter from './user.router';
import centerRouter from './center.router';

const v1Router = express.Router();



v1Router.use('/ping',  pingRouter);
v1Router.use('/user', userRouter)
v1Router.use('/center',centerRouter)

export default v1Router;