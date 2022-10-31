export type UserAplicationType = {
  id: number;
  nome: string;
  email: string;
  dataCriacao: null | Date;
  dataAtualizacao: null | Date;
  acesso: null | Date;
  status: 'S' | 'N';
  password: string;
  telefone: string;
  cargo: string;
  roles: Array<number>;
}