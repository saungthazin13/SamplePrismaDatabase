import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import { limiter } from "./middlewares/ratelimiter";
import { check } from "./middlewares/check";
import healthRouter from "./routes/v1/health";

import viewRoutes from "./routes/v1/web/view";
import * as errorController from "./controllers/web/404Controller"

export const app = express();

app.set("view engine","ejs") //for template engine
app.set("views","src/views");//folder for src/views/index.ejs



//for middleware for expressjs
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression()); //for zip
app.use(limiter); //for create middlewars for ratelimiter.ts
app.use(express.static("public")); //link for style css input for upper page


app.use(healthRouter); //for create controller for healthcontroller.ts
app.use(viewRoutes);
app.use(errorController.notFound);





app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || "Server error..";
  const code = error.code || "Error code";
  res.status(status).json({ message, error: code });
});


