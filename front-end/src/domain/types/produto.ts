import { CategoriaType } from './categoria';

export type ProdutoType = {
    id?: number;
    estabelecimento: number;
    codigo: number;
    ean: string;
    nome:string;
    categoria?: CategoriaType;
    dtCreate:Date | null;
    dtUpdate: Date | null;
    dtVencimento: Date | null;
    unid: string;
    saldo: number;
    fatorConversao: number;
    saldoMinimo: number;
    quantMinAtacado: number;
    precoCusto: number;
    precoVenda: number;
    precoAtacado: number;
    image:string;
    status: "S" | "N";

    // impostos
    cfop:string;
    ncm:string;
    cest: string;

    cstIcms:string;
    porcIcms:number;
    valorIcms:number;

    cstIpi:string;
    porcIpi:number;
    valorIpi:number;

    cstPis:string;
    porcPis:number;
    valorPis:number;

    cstCofins:string;
    porcConfis:number;
    valorCofins:number;
}

export const produtoinitial: ProdutoType = {
    estabelecimento: 0,
    codigo: 0,
    ean: '',
    nome: '',
    dtCreate: null,
    dtUpdate: null,
    dtVencimento: null,
    unid: '',
    saldo: 0,
    fatorConversao: 0,
    saldoMinimo: 0,
    quantMinAtacado: 0,
    precoCusto: 0,
    precoVenda: 0,
    precoAtacado: 0,
    image: '',
    status: 'S',
    cfop: '',
    ncm: '',
    cest: '',
    cstIcms: '',
    porcIcms: 0,
    valorIcms: 0,
    cstIpi: '',
    porcIpi: 0,
    valorIpi: 0,
    cstPis: '',
    porcPis: 0,
    valorPis: 0,
    cstCofins: '',
    porcConfis: 0,
    valorCofins: 0
}