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

  editStatusPos(req: Request, res: Response) {
    const { id, type } = req.body;

    posService.EditarStatusPos(id, type).then((data) => {
      if (data.length <= 0) {
        return res.status(404).json({ Message: "Falha ao dar baixa" });
      }

      res
        .status(200)
        .json({ Message: "Pos dado baixa com sucesso", StatusBaixa: data });
    });
  }

  getAllPosUsoUser(req: Request, res: Response) {
    const idUser = req.user.id;

    posService.listarPosEmUsoUser(idUser).then((data) => {
      if (data.length <= 0) {
        return res.status(404).json({ Message: "Falha ao dar baixa" });
      }

      res.status(200).json({
        Message: `Sucesso`,
        data: data,
      });
    });
  }
}

export const posController = new PosController();
