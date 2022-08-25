import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
const secret = `çç3lksklaj5431ds@!#!asdE09W#$%&¨#$@#`;

declare global {
  namespace Express {
    interface Request {
      user: any;
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
      return res
        .status(401)
        .json({ Message: `Token Invalido/Expirado`, Auth: false });
    }
    req.user = decoded;
    console.log(decoded);
    next();
  });
};

export default VerifyUserLoggedIn;
