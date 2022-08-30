import { Request, Response } from "express";
import { posService } from "../../Service/Pos.Service";

class PosController {
  findPosUserLogado(req: Request, res: Response) {
    const idUsuario = req.user.id;
    posService
      .listarPosUsers(idUsuario)
      .then((response) => {
        if (response.length == 0) {
          return res.status(200).json({
            Message: `Sem dados`,
            StatusCode: res.statusCode,
            data: response,
          });
        }
        res.status(200).json({
          Message: `Lista de Pos`,
          UsuarioConsulta: req.user.usuario,
          AtualizadoEm: new Date(),
          data: response,
        });
      })
      .catch((error) =>
        res.status(500).json({
          Message: `Falha no servidor`,
          StatusCode: res.statusCode,
        })
      );
  }
}

export const posController = new PosController();
