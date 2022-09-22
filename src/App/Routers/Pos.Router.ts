import Express from "express";
import VerifyUserLoggedIn from "../Midlwares/User.Auth";
import { posController } from "../Controller/Pos.Controller";

class PosRouter {
  public Router: Express.IRouter;

  constructor() {
    this.Router = Express.Router();
    this.getAllPosUserLogged();
    this.editStatusPos();
    this.getAllPosUserLoggedUso();
  }

  getAllPosUserLogged() {
    this.Router.get("/", VerifyUserLoggedIn, posController.findPosUserLogado);
  }

  editStatusPos() {
    this.Router.post("/baixa", VerifyUserLoggedIn, posController.editStatusPos);
  }

  getAllPosUserLoggedUso() {
    this.Router.get("/uso", VerifyUserLoggedIn, posController.getAllPosUsoUser);
  }
}

export const posRouter = new PosRouter().Router;
