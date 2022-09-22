import IIMage from "../Interfaces/IIMage.interface";
import { userRepository } from "../Repository/UserRepository";

class UserService {
  PegarUmUsuario(id: number) {
    return userRepository.getOneUser(id).then((user) => user);
  }

  listarUsuariosLogadoPos() {
    return userRepository.getAllUsers().then((data) => data);
  }

  CriarUsuario(payload: any) {
    return userRepository
      .setNewUser(payload)
      .then((data) => data)
      .catch((e) => e);
  }

  VerificarUserCadastrado(usuario: string) {
    return userRepository.FindUserLogin(usuario).then((data) => data);
  }

  AdicionarImagemUser(image: IIMage, id: number) {
    return userRepository.createImageUser(image, id).then((data) => data);
  }

  QtddeRegistros() {
    return userRepository.getAllStates().then((data) => data);
  }

  listarTodosUf() {
    return userRepository.getAllUf().then((data) => data);
  }
}

export const userService = new UserService();
