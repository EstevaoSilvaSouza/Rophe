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
    this.AddImageUserProfile();
    this.GetAllCount();
    this.GetAllUf();
    this.GetOneUser();
  }

  GetRouterAll() {
    this.Router.get("/", VerifyUserLoggedIn, userController.getAllUsers);
  }

  GetOneUser() {
    this.Router.get("/getUser", VerifyUserLoggedIn, userController.getOneUser);
  }

  PostRouterNewUser() {
    this.Router.post("/", userController.CreateNewUser);
  }

  LoginUser() {
    this.Router.post("/login", userController.LoginUser);
  }

  AddImageUserProfile() {
    this.Router.post(
      "/profile/image",
      VerifyUserLoggedIn,
      userController.AdicionarImagemUser
    );
  }

  GetAllCount() {
    this.Router.get(
      "/allcount",
      VerifyUserLoggedIn,
      userController.QtdeRegistros
    );
  }

  GetAllUf() {
    this.Router.get(
      "/listaruf",
      VerifyUserLoggedIn,
      userController.listarTodosUf
    );
  }
}

export const userRouter = new UserRouter().Router;
