import { NextFunction, Request, Response } from "express";

import {
  createUserService,
  getUserByIdService,
} from "../services/user.service";

export const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userResponse = await createUserService(req.body);

  res.status(201).json({
    message: "user created successfully",
    data: userResponse,
    success: true,
  });
};

export const getUserByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userResponse = await getUserByIdService(Number(req.params.id));

  res.status(200).json({
    message: "user found successfully",
    data: userResponse,
    success: true,
  });
};
