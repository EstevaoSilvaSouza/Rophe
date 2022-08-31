"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dabatase = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new sequelize_1.default.Sequelize("dbUser", "root", "Tilindo@14", {
            host: "localhost",
            dialect: "mysql",
            logging: false,
        });
    }
}
exports.dabatase = new Database();
