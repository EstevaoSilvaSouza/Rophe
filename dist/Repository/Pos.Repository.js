"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.posRepository = void 0;
const Pos_model_1 = __importDefault(require("../Model/Pos.model"));
const User_model_1 = __importDefault(require("../Model/User.model"));
class PosRepository {
    async PosFindUserLoggged(id) {
        return await Pos_model_1.default.findAll({
            include: {
                model: User_model_1.default,
                where: { id: id },
                attributes: { exclude: ["senha"] },
            },
        });
    }
    PosEditStatus(id) {
        throw new Error("Method not implemented.");
    }
}
exports.posRepository = new PosRepository();
