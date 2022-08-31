"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const User_service_1 = require("../../Service/User.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = `çç3lkskl$#@fds╚§'[´]15~<<<>;ü╚1↨()))((())üÐAaj542(*&¨$%@#%¨1akjaskljdsaçççççÇ31ds@!#!asdE09W#$%&¨#$@#`;
class UserController {
    getAllUsers(req, res) {
        User_service_1.userService
            .listarUsuarios()
            .then((data) => {
            if ((data === null || data === void 0 ? void 0 : data.length) == 0) {
                return res.json({
                    Message: `Sem dados!`,
                    StatusCode: res.statusCode,
                    data: data,
                });
            }
            setTimeout(() => {
                res.json({
                    Message: `Sucesso`,
                    UserLogado: {
                        nome: req.user.nome,
                        sobrenome: req.user.sobrenome,
                        usuario: req.user.usuario,
                        email: req.user.email,
                        cargo: req.user.cargo,
                    },
                    StatusCode: res.statusCode,
                    data: data,
                });
            }, 2000);
        })
            .catch(() => {
            res
                .status(500)
                .json({ Message: `Falha no servidor`, StatusCode: res.statusCode });
        });
    }
    CreateNewUser(req, res) {
        const data = req.body;
        User_service_1.userService
            .CriarUsuario(data)
            .then((result) => {
            if (result.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({
                    Message: "Login/Email já cadastrado",
                    StatusCode: res.statusCode,
                    Error: res.statusMessage,
                });
            }
            res.status(200).json({ Message: "Cadastrado com sucesso", result });
        })
            .catch(() => {
            res
                .status(500)
                .json({ Message: `Falha no servidor`, StatusCode: res.statusCode });
        });
    }
    LoginUser(req, res) {
        const { usuario, senha } = req.body;
        const message = `Usuario/Senha Invalido`;
        if (!usuario || !senha) {
            return res.status(403).json({ Message: `Falha ao autentica!` });
        }
        User_service_1.userService
            .VerificarUserCadastrado(usuario)
            .then((user) => {
            if (!user) {
                return res.status(401).json({
                    Message: message,
                    StatusCode: res.statusCode,
                });
            }
            else if (user.senha !== senha) {
                return res
                    .status(401)
                    .json({ Message: message, statusCode: res.statusCode });
            }
            else if (user.status !== true) {
                return res.status(401).json({
                    Message: `Usuario bloqueado, contate o administrador do sistema`,
                    statusCode: res.statusCode,
                });
            }
            else {
                const userLoggedIn = {
                    id: user.id,
                    nome: user.nome,
                    email: user.email,
                    sobrenome: user.sobrenome,
                    status: user.status,
                    usuario: user.usuario,
                    cargo: user.cargo,
                };
                const token = jsonwebtoken_1.default.sign(userLoggedIn, secret, { expiresIn: "2h" });
                setTimeout(() => {
                    res.status(200).json({
                        Message: `Logado com sucesso`,
                        Horario: new Date().toLocaleTimeString("pt-br"),
                        statusCode: res.statusCode,
                        token: token,
                    });
                }, 2000);
            }
        })
            .catch(() => {
            res
                .status(500)
                .json({ Message: `Falha no servidor`, StatusCode: res.statusCode });
        });
    }
}
exports.userController = new UserController();
