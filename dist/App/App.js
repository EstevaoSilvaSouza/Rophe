"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Arquivo que vai ter as configurações do APP express o Cord do projeto!!
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//Imports dos components...
const User_router_1 = require("./Routers/User.router");
const Pos_Router_1 = require("./Routers/Pos.Router");
//classe que vai repesentar o App
class App {
    constructor() {
        this.App = (0, express_1.default)();
        this.SetMiddleware();
        this.SetRouters();
    }
    //controla os middleware da api
    SetMiddleware() {
        this.App.use(express_1.default.json());
        this.App.use(express_1.default.urlencoded({ extended: true }));
        //this.App.use(UserLogginPostRequest);
        this.App.use((0, cors_1.default)());
    }
    SetRouters() {
        this.App.use(`/user`, User_router_1.userRouter);
        this.App.use(`/pos`, Pos_Router_1.posRouter);
    }
}
exports.default = App;
