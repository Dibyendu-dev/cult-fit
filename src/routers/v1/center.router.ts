import express from 'express';

import { validateRequestBody } from '../../validators';
import { centerSchema } from '../../validators/center.validator';
import { createCenterHandler, getCenterByIdHandler } from '../../controllers/center.controller';



const centerRouter = express.Router();

centerRouter.post('/',validateRequestBody(centerSchema), createCenterHandler)
centerRouter.get('/:id', getCenterByIdHandler)


export default centerRouter;