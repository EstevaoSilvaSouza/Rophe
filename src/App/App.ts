//Arquivo que vai ter as configurações do APP express o Cord do projeto!!
import Express from "express";
import Cors from "cors";

//Imports dos components...
import { userRouter } from "./Routers/User.router";
import { posRouter } from "./Routers/Pos.Router";

//classe que vai repesentar o App
export default class App {
  public App: Express.Application;

  constructor() {
    this.App = Express();
    this.SetMiddleware();
    this.SetRouters();
  }

  //controla os middleware da api
  SetMiddleware() {
    this.App.use(Express.json());
    this.App.use(Express.urlencoded({ extended: true }));
    //this.App.use(UserLogginPostRequest);
    this.App.use(Cors());
  }

  SetRouters() {
    this.App.use(`/user`, userRouter);
    this.App.use(`/pos`, posRouter);
  }
}
