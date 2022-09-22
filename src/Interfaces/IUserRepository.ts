import IIMage from "./IIMage.interface";
import IPos from "./IPos.repository";
import { IRegiao } from "./IRegiao.repository";
export interface IUser {
  id?: number;
  nome: string;
  sobrenome: string;
  usuario: string;
  email: string;
  senha?: string;
  status: boolean;
  id_regiao?: number;
  id_image?: number;
  cargo: string;
  image?: IIMage;
}

export interface IUserResponse {
  nome: string;
  sobrenome: string;
  usuario: string;
  email: string;
  status: boolean;
}

export interface IUserRepository {
  getAllUsers(): Promise<null | IUser[]>;
  getOneUser(id: number): Promise<null | IUser>;
  setNewUser(payload: IUser): Promise<IUserResponse>;
  UpdateUser(id: number, data: IUser): Promise<IUser>;
  FindUser(id: number): Promise<IUser | null>;
  FindUserLogin(usuario: string): Promise<IUser | null>;
  DeleteUser(id: number): Promise<void>;
  createImageUser(image: IIMage, id: number): Promise<void>;
  updateImageUser(idUser: number, id: number): Promise<void>;
  getAllStates(): Promise<any>;
  getAllUf(): Promise<IRegiao[] | null>;
}
