import { CategoriaType } from './categoria';

export type ProdutoType = {
    id: number | null | undefined;
    codBarras: string,
    descricao:string;
    categoria: CategoriaType;
    dtCreate:Date | null| undefined;
    dtUpdate: Date | null| undefined;
    dtVencimento: Date | null| undefined;
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
    cfop:string | null | undefined;
    cst:string| null| undefined;

    cstICMS:string | null| undefined;
    pICMS:string | null| undefined;
    vICMS:string | null| undefined;

    cstIPI:string | null| undefined;
     pIPI:string | null| undefined;
     vIPI:string | null| undefined;

    cstPIS:string | null| undefined;
    pPIS:string | null| undefined;
    vPIS:string | null| undefined;

    cstCOFINS:string | null| undefined;
    pCOFINS:string | null| undefined;
    vCOFINS:string | null| undefined;

    
}