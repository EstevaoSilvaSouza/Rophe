import Express, { Request, Response } from "express";

import { userController } from "../Controller/UserController";
import VerifyUserLoggedIn from "../Midlwares/User.Auth";

class UserRouter {
  public Router: Express.IRouter;

  constructor() {
    this.Router = Express.Router();
    this.GetRouterAll();
    this.PostRouterNewUser();
    this.LoginUser();
  }

  GetRouterAll() {
    this.Router.get("/", VerifyUserLoggedIn, userController.getAllUsers);
  }

  PostRouterNewUser() {
    this.Router.post("/", userController.CreateNewUser);
  }

  LoginUser() {
    this.Router.post("/login", userController.LoginUser);
  }
}

export const userRouter = new UserRouter().Router;
