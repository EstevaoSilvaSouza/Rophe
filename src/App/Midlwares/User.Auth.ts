import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
const secret = `çç3lkskl$#@fds╚§'[´]15~<<<>;ü╚1↨()))((())üÐAaj542(*&¨$%@#%¨1akjaskljdsaçççççÇ31ds@!#!asdE09W#$%&¨#$@#`;

import UserLogginPostRequest from "./User.Log.Post";

declare global {
  namespace Express {
    interface Request {
      user: any;
      error: string;
    }
  }
}

const VerifyUserLoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ Message: `Sem token!!`, Auth: false });
  }

  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      req.error = `Tentativa de acesso com Token Invalido/Expirado ${error}`;
      UserLogginPostRequest(req, res);
      return res.status(401).json({
        Message: `Token Invalido/Expirado`,
        Auth: false,
        token: token,
      });
    }
    req.user = decoded;
    console.log(decoded);
    next();
  });
};

export default VerifyUserLoggedIn;
