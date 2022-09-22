// falta criar a class e implementar a interface a ela!!
import {
  IUser,
  IUserResponse,
  IUserRepository,
} from "../Interfaces/IUserRepository";

import User from "../Model/User.model";
import Pos from "../Model/Pos.model";
import Image from "../Model/Image.model";
import IIMage from "../Interfaces/IIMage.interface";
import Regiao from "../Model/Regiao.model";
import { IRegiao } from "../Interfaces/IRegiao.repository";

class UserRepository implements IUserRepository {
  async FindUserLogin(usuario: string): Promise<IUser | null> {
    return User.findOne({
      where: { usuario: usuario },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
  }

  async getOneUser(id: number): Promise<null | IUser> {
    return User.findByPk(id, {
      attributes: { exclude: ["senha", "createdAt", "updatedAt"] },
      include: [Image, Pos],
    });
  }

  async getAllUsers(): Promise<null | IUser[]> {
    return User.findAll({
      attributes: { exclude: ["senha", "createdAt", "updatedAt"] },
      include: [Image, Pos],
    });
    // return User.findByPk(id, {
    //   include: {
    //    model: Pos,
    //     where: { id_user: id },
    //   },
    // });
  }
  async setNewUser(payload: IUser): Promise<IUserResponse> {
    return User.create(payload).then((data) => data);
  }
  UpdateUser(id: number, data: IUser): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  FindUser(id: number): Promise<IUser | null> {
    throw new Error("Method not implemented.");
  }
  DeleteUser(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async createImageUser(image: IIMage, id: number): Promise<void> {
    const NewImage = await Image.create(image);

    await User.update({ id_image: NewImage.id }, { where: { id: id } });
  }
  updateImageUser(idUser: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async getAllStates(): Promise<any> {
    const user = await User.count();
    const pos = await Pos.count();
    const posUso = await Pos.count({
      where: { status: "uso" },
    });
    const posEstoque = await Pos.count({
      where: { status: "Estoque" },
    });
    return { user, pos, posUso, posEstoque };
  }

  async getAllUf(): Promise<IRegiao[] | null> {
    return Regiao.findAll().then((data) => data);
  }
}

export const userRepository = new UserRepository();
