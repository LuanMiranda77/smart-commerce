export interface IUserAplication{
  id: number;
  nome: string;
  email: string;
  dataCriacao: null | Date;
  dataAtualizacao: null | Date;
  status: String;
  password: string;
  typeRole: string;
  // roles: number[];
}