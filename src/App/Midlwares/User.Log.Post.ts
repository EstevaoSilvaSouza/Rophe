import { Request, Response, NextFunction } from "express";
import * as fs from "fs";

const UserLogginPostRequest = (req: Request, res: Response) => {
  const log = `Data:${new Date()} IP:${req.ip} PATH:${req.path} METHOD:${
    req.method
  }
  Error:${req.error}
    `;
  if (req.method === "GET") {
    fs.appendFileSync(`LOG_GET.txt`, log);
  }
};

export default UserLogginPostRequest;
