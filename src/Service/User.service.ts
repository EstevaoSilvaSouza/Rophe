import { userRepository } from "../Repository/UserRepository";

class UserService {
  listarUsuariosLogadoPos(id: number) {
    return userRepository.getAllUsers(id).then((data) => {
      //console.log(data);
      return data;
    });
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
}

export const userService = new UserService();
