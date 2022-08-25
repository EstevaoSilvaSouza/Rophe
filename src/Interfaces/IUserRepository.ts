export interface IUser {
  nome: string;
  sobrenome: string;
  usuario: string;
  email: string;
  senha?: string;
  status: boolean;
  id_regiao?: number;
  cargo: string;
}

export interface IUserResponse {
  nome: string;
  sobrenome: string;
  usuario: string;
  email: string;
  status: boolean;
}

export interface IUserRepository {
  getAllUsers(): Promise<IUserResponse[]>;
  setNewUser(payload: IUser): Promise<IUserResponse>;
  UpdateUser(id: number, data: IUser): Promise<IUser>;
  FindUser(id: number): Promise<IUser | null>;
  FindUserLogin(usuario: string): Promise<IUser | null>;
  DeleteUser(id: number): Promise<void>;
}
