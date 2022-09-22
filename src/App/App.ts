//Arquivo que vai ter as configurações do APP express o Cord do projeto!!
import Express from "express";
import Cors from "cors";
import bodyParser from "body-parser";
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
    this.App.use(bodyParser.json({ limit: "50mb" }));
    this.App.use(
      bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
      })
    );
    //this.App.use(UserLogginPostRequest);
    this.App.use(Cors());
  }

  SetRouters() {
    this.App.use(`/user`, userRouter);
    this.App.use(`/pos`, posRouter);
  }
}
