export default interface IPos {
  id?: number;
  nome: string;
  serie: string;
  versao: string;
  binario: string;
  status: string;
  id_modelo?: number;
  id_user?: number;
}

export interface IPosRespository {
  PosFindUserLoggged(id: number): Promise<IPos[] | any[]>;
  PosEditStatus(id: number, type: string): Promise<[number]>;
  GetPosUso(id: number): Promise<IPos[] | any[]>;
}
