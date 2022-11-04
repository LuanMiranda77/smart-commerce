import {RegimeTributario} from '../enums';

export type EstabelecimentoType ={
    id: number | null,
    razao: string | null,
    nome:string | null,
    cnpj:string | null,
    cpf:string | null,
    regime: RegimeTributario.MEI | RegimeTributario.SIMPLES | RegimeTributario.PRESUMIDO | RegimeTributario.REAL,
    cep:String | null,
    logradouro: string| null,
    numero: string| null,
    bairro: string| null,
    cidade: string| null,
    uf: string| null,
    tel: string| null,
    cel: string| null,
    email:string| null,
    logo: string| null,
    codIbge:string | null,
}