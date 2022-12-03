export type ProdutoXml = {
    codigo: number | string;
	nome: string;
	ean: string;
	ncm: string;
	cest: string;
	cfop: string;
	uniCom: string;
	quantCom: number;
    valorUnit: number;
	valorTotal: number;
	eanTrib: string;
	uniTrib: string;
	quantTrib: number;
	desc: number;
	outro: number;
	
//	impostos
	
	vTotTrib: number;
	
	cstIcms: number;
	pIcms: number;
	vIcms: number;
	pIcmsSt: number;
	vIcmsSt: number;
	
	cstIpi: number;
	pIpi: number;
	vIpi: number;
	
	cstPis: number;
	pPis: number;
	vPis: number;
	
	cstCofins: number;
	pCofins: number;
	vCofins: number;

}