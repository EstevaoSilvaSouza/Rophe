import { posRepository } from "../Repository/Pos.Repository";

class PosService {
  listarPosUsers(id: number) {
    return posRepository.PosFindUserLoggged(id).then((data) => data);
  }
}

export const posService = new PosService();
