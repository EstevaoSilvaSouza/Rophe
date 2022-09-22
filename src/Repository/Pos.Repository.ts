import Pos from "../Model/Pos.model";
import User from "../Model/User.model";

import IPosRepository, { IPosRespository } from "../Interfaces/IPos.repository";
import IPos from "../Interfaces/IPos.repository";

class PosRepository implements IPosRespository {
  async PosFindUserLoggged(id: number): Promise<any[] | IPosRepository[]> {
    return Pos.findAll({
      where: { status: "Estoque" },
      include: {
        model: User,
        where: { id: id },
        attributes: { exclude: ["senha"] },
      },
    });
  }
  PosEditStatus(id: number, type: string): Promise<[number]> {
    return Pos.update({ status: type }, { where: { id: id } });
  }

  async GetPosUso(id: number): Promise<IPos[] | any[]> {
    return Pos.findAll({
      where: { status: "Uso", id_user: id },
    });
  }
}

export const posRepository = new PosRepository();
