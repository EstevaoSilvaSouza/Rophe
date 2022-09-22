import IPos from "../Interfaces/IPos.repository";
import { posRepository } from "../Repository/Pos.Repository";

class PosService {
  listarPosUsers(id: number) {
    return posRepository.PosFindUserLoggged(id).then((data) => data);
  }

  public checkType(type: number) {
    switch (type) {
      case 0:
        return "Uso";
      case 1:
        return "Estoque";
    }
  }

  EditarStatusPos(id: number, type: number): Promise<[number]> {
    const Type = String(this.checkType(type));
    return posRepository.PosEditStatus(id, Type).then((data) => data);
  }

  listarPosEmUsoUser(id: number) {
    return posRepository.GetPosUso(id).then((data) => data);
  }
}

export const posService = new PosService();
