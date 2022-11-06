export type UserAplicationType = {
  id: number;
  codigo: number;
  cpf: string;
  nome: string;
  email: string;
  dataCriacao: null | Date;
  dataAtualizacao: null | Date;
  acesso: null | Date;
  status: 'S' | 'N';
  password: string;
  celular: string;
  cargo: string;
  roles: string;
}