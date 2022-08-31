import { Request, Response } from "express";
import { userService } from "../../Service/User.service";

import jwt from "jsonwebtoken";
const secret = `çç3lkskl$#@fds╚§'[´]15~<<<>;ü╚1↨()))((())üÐAaj542(*&¨$%@#%¨1akjaskljdsaçççççÇ31ds@!#!asdE09W#$%&¨#$@#`;

class UserController {
  getAllUsers(req: Request, res: Response) {
    const idUsuario = req.user.id;
    userService
      .listarUsuariosLogadoPos(idUsuario)
      .then((data) => {
        if (data == null) {
          return res.json({
            Message: `Sem dados!`,
            StatusCode: res.statusCode,
            data: data,
          });
        }
        //setTimeout(() => {
        res.json({
          Message: `Sucesso`,
          UserLogado: {
            nome: data?.nome,
            sobrenome: data?.sobrenome,
            usuario: data?.usuario,
            email: data?.email,
            cargo: data?.cargo,
          },
          StatusCode: res.statusCode,
        });
        //  }, 2000);
      })
      .catch(() => {
        res
          .status(500)
          .json({ Message: `Falha no servidor`, StatusCode: res.statusCode });
      });
  }

  CreateNewUser(req: Request, res: Response) {
    const data = req.body;
    userService
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

  LoginUser(req: Request, res: Response) {
    const { usuario, senha } = req.body;
    const message = `Usuario/Senha Invalido`;
    if (!usuario || !senha) {
      return res.status(403).json({ Message: `Falha ao autentica!` });
    }
    userService
      .VerificarUserCadastrado(usuario)
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            Message: message,
            StatusCode: res.statusCode,
          });
        } else if (user.senha !== senha) {
          return res
            .status(401)
            .json({ Message: message, statusCode: res.statusCode });
        } else if (user.status !== true) {
          return res.status(401).json({
            Message: `Usuario bloqueado, contate o administrador do sistema`,
            statusCode: res.statusCode,
          });
        } else {
          const userLoggedIn = {
            id: user.id,
            nome: user.nome,
            email: user.email,
            sobrenome: user.sobrenome,
            status: user.status,
            usuario: user.usuario,
            cargo: user.cargo,
          };
          const token = jwt.sign(userLoggedIn, secret, { expiresIn: "2h" });
          //setTimeout(() => {
          res.status(200).json({
            Message: `Logado com sucesso`,
            Horario: new Date().toLocaleTimeString("pt-br"),
            statusCode: res.statusCode,
            token: token,
          });
          // }, 2000);
        }
      })
      .catch(() => {
        res
          .status(500)
          .json({ Message: `Falha no servidor`, StatusCode: res.statusCode });
      });
  }
}

export const userController = new UserController();
