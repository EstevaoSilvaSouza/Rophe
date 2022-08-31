"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App/App"));
new App_1.default().App.listen("3331", async () => {
    //User.sync({ force: true });
    //Regiao.sync({ force: true });
    //Pos.sync({ force: true });
    console.log(`Servidor online`);
});
