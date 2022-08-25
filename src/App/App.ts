//Arquivo que vai ter as configurações do APP express o Cord do projeto!!
import Express from "express";

//Imports dos components...
import { userRouter } from "./Routers/User.router";

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
  }

  SetRouters() {
    this.App.use(`/user`, userRouter);
  }
}
