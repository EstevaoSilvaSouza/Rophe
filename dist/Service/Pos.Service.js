"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posService = void 0;
const Pos_Repository_1 = require("../Repository/Pos.Repository");
class PosService {
    listarPosUsers(id) {
        return Pos_Repository_1.posRepository.PosFindUserLoggged(id).then((data) => data);
    }
}
exports.posService = new PosService();
