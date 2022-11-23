import { initial } from "lodash";

export type NFeEntradaType = {
    id: number | undefined;
    codigo:number  | undefined; 
    estabelecimento: number | null ;
    numNota:string ;
    chaveAcesso:string ;
    dataEmissao:Date;
    dataManifesto:Date | null ;
    dataEntrada:Date ;
    cnpjCpf:string ;
    insEst:string ;
    fornecedor:string ;
    valorTotalNota:number ; //vProd
    valorDesc:number ;
    valorTotalNotaLiquido:number ;
    valorBaseIcms:number ;
    valorIcms:number ;
    valorBaseSubTributa:number ;
    valorSubTributa:number ;
    valorPis:number ;
    valorIpi:number ;
    valorCofins:number ;
    valorFrete:number ;
    valorOutros:number ;
    numProtocolo:string ;
    numNSU: string ;
    status: "M" | "N" | "A" | "E";
    incluida:"S" | "N";
}

export const initialState = {
    codigo: 0,
    estabelecimento:null,
    numNota: "",
    chaveAcesso:"",
    dataEmissao: new Date(),
    dataManifesto: null,
    dataEntrada: new Date(),
    insEst:"",
    fornecedor:"",
    valorTotalNota:0, //vProd
    valorDesc:0,
    valorTotalNotaLiquido:0,
    valorBaseIcms:0,
    valorIcms:0,
    valorBaseSubTributa:0,
    valorSubTributa: 0,
    valorPis:0,
    valorIpi:0,
    valorCofins:0,
    valorFrete:0,
    valorOutros:0,
    numProtocolo:"",
    numNSU: "",
    status: "N",
    incluida:"N",

} as NFeEntradaType