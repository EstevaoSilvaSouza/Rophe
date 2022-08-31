"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = `çç3lkskl$#@fds╚§'[´]15~<<<>;ü╚1↨()))((())üÐAaj542(*&¨$%@#%¨1akjaskljdsaçççççÇ31ds@!#!asdE09W#$%&¨#$@#`;
const User_Log_Post_1 = __importDefault(require("./User.Log.Post"));
const VerifyUserLoggedIn = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({ Message: `Sem token!!`, Auth: false });
    }
    jsonwebtoken_1.default.verify(token, secret, (error, decoded) => {
        if (error) {
            req.error = `Tentativa de acesso com Token Invalido/Expirado ${error}`;
            (0, User_Log_Post_1.default)(req, res);
            return res.status(401).json({
                Message: `Token Invalido/Expirado`,
                Auth: false,
                token: token,
            });
        }
        req.user = decoded;
        console.log(decoded);
        next();
    });
};
exports.default = VerifyUserLoggedIn;
