import express, { Request, Response, NextFunction } from "express";
import { title } from "process";
export const home = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("index" ,{title:"Home Screen"});
};

export const about = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users =[
    {name:"Ma Ma" ,age:20},
    {name:"Mya Mya" ,age:21},
    {name:"Hla Hla" ,age:22},
    {name:"Pa Pa" ,age:23}
  ]
  res.render("about" ,{title:"About Page" ,users});
};
