import Express from "express";
import VerifyUserLoggedIn from "../Midlwares/User.Auth";
import { posController } from "../Controller/Pos.Controller";

class PosRouter {
  public Router: Express.IRouter;

  constructor() {
    this.Router = Express.Router();
    this.getAllPosUserLogged();
  }

  getAllPosUserLogged() {
    this.Router.get("/", VerifyUserLoggedIn, posController.findPosUserLogado);
  }
}

export const posRouter = new PosRouter().Router;
