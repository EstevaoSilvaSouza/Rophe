// falta criar a class e implementar a interface a ela!!
import {
  IUser,
  IUserResponse,
  IUserRepository,
} from "../Interfaces/IUserRepository";

import User from "../Model/User.model";
import Regiao from "../Model/Regiao.model";
import Pos from "../Model/Pos.model";
import { Model } from "sequelize/types";
class UserRepository implements IUserRepository {
  async FindUserLogin(usuario: string): Promise<IUser | null> {
    return await User.findOne({
      where: { usuario: usuario },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
  }
  async getAllUsers(id: number): Promise<null | IUser> {
    return await User.findByPk(id, {
      attributes: { exclude: ["senha"] },
    });
  }
  async setNewUser(payload: IUser): Promise<IUserResponse> {
    return await User.create(payload).then((data) => data);
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
}

export const userRepository = new UserRepository();
