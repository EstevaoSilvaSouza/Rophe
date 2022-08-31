"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const UserRepository_1 = require("../Repository/UserRepository");
class UserService {
    listarUsuarios() {
        return UserRepository_1.userRepository.getAllUsers().then((data) => {
            //console.log(data);
            return data;
        });
    }
    CriarUsuario(payload) {
        return UserRepository_1.userRepository
            .setNewUser(payload)
            .then((data) => data)
            .catch((e) => e);
    }
    VerificarUserCadastrado(usuario) {
        return UserRepository_1.userRepository.FindUserLogin(usuario).then((data) => data);
    }
}
exports.userService = new UserService();
