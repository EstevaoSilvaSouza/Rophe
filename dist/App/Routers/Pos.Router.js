"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.posRouter = void 0;
const express_1 = __importDefault(require("express"));
const User_Auth_1 = __importDefault(require("../Midlwares/User.Auth"));
const Pos_Controller_1 = require("../Controller/Pos.Controller");
class PosRouter {
    constructor() {
        this.Router = express_1.default.Router();
        this.getAllPosUserLogged();
    }
    getAllPosUserLogged() {
        this.Router.get("/", User_Auth_1.default, Pos_Controller_1.posController.findPosUserLogado);
    }
}
exports.posRouter = new PosRouter().Router;
