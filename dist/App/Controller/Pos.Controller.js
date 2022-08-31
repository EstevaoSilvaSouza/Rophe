"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posController = void 0;
const Pos_Service_1 = require("../../Service/Pos.Service");
class PosController {
    findPosUserLogado(req, res) {
        const idUsuario = req.user.id;
        Pos_Service_1.posService
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
            .catch((error) => res.status(500).json({
            Message: `Falha no servidor`,
            StatusCode: res.statusCode,
        }));
    }
}
exports.posController = new PosController();
