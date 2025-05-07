import express, { Request, Response, NextFunction } from "express";
import { title } from "process";
export const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("404" ,{title:"404 Error" ,message : "Page Not Found!.."});
};
