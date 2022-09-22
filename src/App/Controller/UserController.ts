import { Request, Response } from "express";
import { userService } from "../../Service/User.service";
const imgbbUploader = require("imgbb-uploader");

import jwt from "jsonwebtoken";
const secret = `çç3lkskl$#@fds╚§'[´]15~<<<>;ü╚1↨()))((())üÐAaj542(*&¨$%@#%¨1akjaskljdsaçççççÇ31ds@!#!asdE09W#$%&¨#$@#`;

class UserController {
  getOneUser(req: Request, res: Response) {
    const { id } = req.user;

    userService.PegarUmUsuario(id).then((user) => {
      res.status(200).json({
        Message: "Sucesso",
        UserLogado: user,
        StatusCode: res.statusCode,
      });
    });
  }

  getAllUsers(req: Request, res: Response) {
    userService
      .listarUsuariosLogadoPos()
      .then((data) => {
        if (data == null) {
          return res.json({
            Message: `Sem dados!`,
            StatusCode: res.statusCode,
            data: data,
          });
        }

        res.json({
          Message: `Sucesso`,
          ListaUser: data,
          StatusCode: res.statusCode,
        });
      })
      .catch(() => {
        res
          .status(500)
          .json({ Message: `Falha no servidor`, StatusCode: res.statusCode });
      });
  }

  CreateNewUser(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    userService
      .CriarUsuario(data.pay)
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
    console.log(req.body);
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
          const token = jwt.sign(userLoggedIn, secret, { expiresIn: "1h" });
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

  AdicionarImagemUser(req: Request, res: Response) {
    const uri = req.body;
    const idUser = req.user.id;

    const token = "d1f915e7d3881e067c17381cf1cc3a5d";

    const options = {
      apiKey: token,
      base64string: uri.uri,
    };

    if (uri) {
      return new imgbbUploader(options)
        .then((response: any) => {
          console.log(response);
          uri.uri = response.url;
          userService.AdicionarImagemUser(uri, idUser);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }

  QtdeRegistros(req: Request, res: Response) {
    userService.QtddeRegistros().then((response) => {
      res.status(200).json({
        Message: `Pesquisa`,
        user: response.user,
        pos: response.pos,
        posUso: response.posUso,
        posEstoque: response.posEstoque,
      });
    });
  }

  listarTodosUf(req: Request, res: Response) {
    userService.listarTodosUf().then((response) => {
      res.status(200).json({
        Message: `Pesquisa`,
        res: response,
      });
    });
  }
}

export const userController = new UserController();
