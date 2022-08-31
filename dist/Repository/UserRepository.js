"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const User_model_1 = __importDefault(require("../Model/User.model"));
const Pos_model_1 = __importDefault(require("../Model/Pos.model"));
class UserRepository {
    async FindUserLogin(usuario) {
        return await User_model_1.default.findOne({
            where: { usuario: usuario },
            attributes: { exclude: ["createdAt", "updatedAt"] },
        });
    }
    async getAllUsers() {
        const id = 1;
        return Pos_model_1.default.findAll({
            include: [
                {
                    model: User_model_1.default,
                    where: { id: 1 },
                    attributes: { exclude: ["senha"] },
                },
            ],
            order: [["id", "ASC"]],
            // where: { $id_regiao$: id },
        });
    }
    async setNewUser(payload) {
        return await User_model_1.default.create(payload).then((data) => data);
    }
    UpdateUser(id, data) {
        throw new Error("Method not implemented.");
    }
    FindUser(id) {
        throw new Error("Method not implemented.");
    }
    DeleteUser(id) {
        throw new Error("Method not implemented.");
    }
}
exports.userRepository = new UserRepository();
