import Pos from "../Model/Pos.model";
import User from "../Model/User.model";

import IPosRepository, { IPosRespository } from "../Interfaces/IPos.repository";

class PosRepository implements IPosRespository {
  async PosFindUserLoggged(id: number): Promise<any[] | IPosRepository[]> {
    return await Pos.findAll({
      include: {
        model: User,
        where: { id: id },
        attributes: { exclude: ["senha"] },
      },
    });
  }
  PosEditStatus(id: number): Promise<IPosRepository | null> {
    throw new Error("Method not implemented.");
  }
}

export const posRepository = new PosRepository();
