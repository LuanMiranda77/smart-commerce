import {RegimeTributario} from '../enums';

export type EstabelecimentoType ={
    id: number | undefined,
    razao: string,
    nome:string | undefined,
    cnpj:string | undefined,
    cpf:string | undefined,
    regime: RegimeTributario.MEI | RegimeTributario.SIMPLES | RegimeTributario.PRESUMIDO | RegimeTributario.REAL,
    cep:string | undefined,
    logradouro: string| undefined,
    numero: string| undefined,
    bairro: string| undefined,
    cidade: string| undefined,
    uf: string| undefined,
    tel: string| undefined,
    cel: string| undefined,
    email:string,
    logo: string| undefined,
    codIbge:string | undefined,
}