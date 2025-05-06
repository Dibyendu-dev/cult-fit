import { NextFunction, Request, Response } from "express";

import {
  createCenterService,
  getCenterByIdService,
} from "../services/center.service";

export const createCenterHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const centerResponse = await createCenterService(req.body);

  res.status(201).json({
    message: "center created successfully",
    data: centerResponse,
    success: true,
  });
};

export const getCenterByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const centerResponse = await getCenterByIdService(Number(req.params.id));

  res.status(200).json({
    message: "center found successfully",
    data: centerResponse,
    success: true,
  });
};
