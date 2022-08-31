"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../Controller/UserController");
const User_Auth_1 = __importDefault(require("../Midlwares/User.Auth"));
class UserRouter {
    constructor() {
        this.Router = express_1.default.Router();
        this.GetRouterAll();
        this.PostRouterNewUser();
        this.LoginUser();
    }
    GetRouterAll() {
        this.Router.get("/", User_Auth_1.default, UserController_1.userController.getAllUsers);
    }
    PostRouterNewUser() {
        this.Router.post("/", UserController_1.userController.CreateNewUser);
    }
    LoginUser() {
        this.Router.post("/login", UserController_1.userController.LoginUser);
    }
}
exports.userRouter = new UserRouter().Router;
