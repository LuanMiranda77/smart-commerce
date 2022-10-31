import React, { useContext, useState, useEffect } from 'react';
import { FaCreditCard, FaDollarSign, FaFileUpload, FaIdCard, FaKickstarter, FaMoneyCheckAlt, FaPlus, FaSave, FaSink, FaSync, FaUserPlus } from 'react-icons/fa';
import {GiStarProminences} from 'react-icons/gi';
import { ThemeContext } from 'styled-components';
import { ButtonBase, ButtonIcon, DataGridDefault, InputCheck, InputDate, InputDefault, InputIcon, InputMask, InputNumber, InputRadio, InputSearch, ModalDefault, SummaryCustom, SummaryDefault, ToastDefault } from "../../../../components";
import CountUp from 'react-countup';
import { toast } from "react-toastify";
import { ModalSincronizarProduto } from './modalSincronizarProduto';
import { ContainerEntradaNota, ContainerProdutoSync, ContainerTable } from './styles';
import { ColumnsDataGridType } from '../../../../components/types';

// import { Container } from './styles';
interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  tipo: number;
}

export const ModalEntrada: React.FC<ModalProps> = (props) => {
  const theme = useContext(ThemeContext);
  const [showModalProd, setShowModalProd] = useState(false);
  const [showModalPromocao, setShowModalPromocao] = useState(false);
  const [tipoCadastro, setTipoCadastro] = useState(0);
  const [produtoselect, setProdutoSelect] = useState<any>();


  const eventClose = () => {
    props.closeModal();
  }

  const columns = new Array<ColumnsDataGridType>();
  columns.push({ dataField: 'codigo', caption: 'Código', alignment: 'left', dataType: 'string', width: 80, cssClass: 'font-bold text-blue-800' });
  columns.push({ dataField: 'codbarras', caption: 'Cod. Barras', alignment: 'center', dataType: 'string', width: 90, });
  columns.push({ dataField: 'descricao', caption: 'Descrição', alignment: '', dataType: 'string' });
  columns.push({ dataField: 'un', caption: 'UN', alignment: 'center', dataType: 'string', format: { type: 'fixedPoint', precision: 2 }, width: 40 });
  columns.push({ dataField: 'quant', caption: 'Qtde', alignment: 'center', dataType: 'number', format: { type: 'fixedPoint', precision: 3 }, width: 60 });
  columns.push({ dataField: 'unNota', caption: 'UN NF', alignment: 'center', dataType: 'string', cssClass: 'font-bold', width: 50 });
  columns.push({ dataField: 'quantNota', caption: 'Qtde NF', alignment: 'center', dataType: 'number', cssClass: 'font-bold', format: { type: 'fixedPoint', precision: 3 }, width: 60 });
  columns.push({ dataField: 'vlrcusto', caption: 'Vlr. Custo', alignment: 'center', dataType: 'number', cssClass: 'font-bold', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 75 });
  columns.push({ dataField: 'vlrvenda', caption: 'Vlr. Venda', alignment: 'right', dataType: 'number', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 75 });
  columns.push({ dataField: 'vlrtotal', caption: 'Vlr. Total', alignment: 'right', dataType: 'number', cssClass: 'font-bold', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 80 });
  columns.push({ dataField: 'cstNota', caption: 'CST NF', alignment: 'center', dataType: 'number', cssClass: 'font-bold text-sx', allowSearch: false, width: 52 });
  columns.push({ dataField: 'cst', caption: 'CST', alignment: 'center', dataType: 'number', allowSearch: false, width: 50 });

  const data = [
    { codigo: '', codbarras: '123456789125', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'KG', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 99999, cstNota: '', incluida: 'N' },
    { codigo: '', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UN', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: '', incluida: 'N' },
    { codigo: '1154889', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: '', incluida: 'N' },
    { codigo: '1245', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'CTD', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '45687', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'CT', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '697', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'CT', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '1125', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
    { codigo: '12368978', codbarras: '123456789123', descricao: 'PRODUTO TESTE DA FAZENDA', un: 'UND', quant: 999, unNota: 'UND', quantNota: 999, vlrcusto: 1432, vlrvenda: 1539, vlrtotal: 15000, cstNota: 102, cst: 500 },
  ];

  const [dataSource, setDataSource] = useState(data);
  const [dataSourceCopy, setDataSourceCopy] = useState(dataSource);

  const search = (desc: any) => {
    if (desc !== '') {
      let notas = dataSourceCopy;
      if (!isNaN(parseFloat(desc)) && isFinite(desc)) {
        if(desc.length < 12){
          notas = dataSourceCopy.filter(produto => { return produto.codigo.includes(desc) });
        }else{
          notas = dataSourceCopy.filter(produto => { return produto.codbarras.includes(desc) });
        }
      } else {
        notas = dataSourceCopy.filter(produto => { return produto.descricao.includes(desc.toUpperCase()) });
      }
      setDataSource(notas);
    } else {
      setDataSource(dataSourceCopy);
    }
  }

  const onCadastroNovo = () =>{
    if(!produtoselect){
      toast.error("Selecione um produto para o cadastro.");
      return;
    }
    setShowModalProd(true); 
    setTipoCadastro(0);
  }

  const onCadastroSincronizar = () =>{
    if(!produtoselect){
      toast.error("Selecione um produto para sincronizar.");
      return
    }
    setShowModalProd(true); 
    setTipoCadastro(1);
  }

  const onCreatePromocao = () =>{
    console.log(produtoselect);
    if(!produtoselect){
      toast.error("Selecione um produto para criar a promoção.");
      return
    }
    else if(produtoselect.codigo === ""){
      toast.error("O produto ainda não foi cadastrado, realize o cadastro.");
      return
    }
    setShowModalPromocao(true); 
  }


  return <ModalDefault key={"#modalcaixa"} title={'ENTRADA DE NOTA'} isOpen={props.showModal} onRequestClose={eventClose} width='100%' height='100%'>
    <ContainerEntradaNota className='p-2 flex'>
      <div className='left' style={{ width: '30%' }}>
        {/* <p className="text-left text-xs font-bold ">Dados fornecedor</p>
        <hr className="mb-2" style={{ border: '1px solid' + theme.colors.gray }} /> */}
        <div className='flex'>
          <InputDefault className="w-6/12 mr-5 mb-3" label="Número da nota" type="number" />
          <div className='text-left font-bold mt-1 text-xs'>
            <p className='text-xs mb-1' style={{color:theme.title==='drak'? theme.colors.textLabel: theme.colors.primary}}>Tipo da entrada</p>
            <InputRadio label='Nota Eletronica' checked={props.tipo===1?true:false} disabled={props.tipo===1?false:true} />
            <InputRadio label='Nota Avulsa' checked={props.tipo===1?false:true} disabled={props.tipo===1?true:false}/>
          </div>
        </div>
        <InputDefault className="mr-5 mb-5 text-xs" label="Chave acesso" type="number" />
        <div className='flex' style={{ marginTop: '-10px' }}>
          <InputDate className="text-ms w-40 mr-5 text-left" label="Data emissão" />
          <InputDate className="text-ms w-40 text-left" label="Data entrada" />
        </div>
        <div className='flex items-center mt-3 mb-1' style={{ marginTop: '0px' }}>
          <InputMask className="w-6/12 mr-5 " label="CNPJ" type="number" mask={'99.999.999/9999-99'} />
          <i><FaUserPlus style={{ fontSize: '40px', marginTop: '25px', color: theme.colors.primary }} /></i>
        </div>
        <InputDefault className=" mr-5 mb-2" label="Fornecedor" type="text" />
        <p className="text-left text-xs font-bold ">Cálculo do imposto</p>
        <hr className="" style={{ border: '1px solid' + theme.colors.gray }} />
        <div className='grid grid-cols-3 gap-2 p-2'>
          <InputNumber label='Base ICMS' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal />
          <InputNumber label='Valor ICMS' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal />
          <InputNumber label='Base Substituição' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal />
          <InputNumber label='Valor Substituição' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal />
          <InputNumber label='Valor IPI' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal />
          <InputNumber label='Valor COFINS' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal />
          <InputNumber label='Frete' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal />
          <InputNumber label='Desconto' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal />
        </div>

      </div>

      <div className="linha-vertical h-full m-2" style={{ marginTop: '-1px', color: theme.colors.gray }}></div>

      <div className='right' style={{ width: '70%' }}>
        <div className="h-10 flex ">
          <div className="w-6/12">
            <InputSearch onChange={(e) => search(e.currentTarget.value)} />
          </div>
          <ButtonIcon className="green-color mr-5  w-40" label="Criar Promoção"  icon={<GiStarProminences />} width={'20%'} style={{ marginTop: '-3px' }}  color={theme.colors.success} onClick={onCreatePromocao} />
          <ButtonIcon className="mr-5" label="Novo" icon={<FaPlus />} width={'12%'} style={{ marginTop: '-3px' }} onClick={onCadastroNovo} />
          <ButtonIcon className="" label="Sincronizar item" icon={<FaSync />} width={'20%'} style={{ marginTop: '-3px' }} onClick={onCadastroSincronizar} />
        </div>
        <hr className="mb-3" style={{ marginTop: '-5px' }} />
        <ContainerProdutoSync>
          <DataGridDefault
            columns={columns}
            dataSource={dataSource}
            paginar={false}
            showBorders
            // showRowLines
            showColumnLines
            hoverStateEnabled
            rowAlternationEnabled
            isSelectRow
            moduloSeletion='single'
            onSelectionChanged={(e) => setProdutoSelect(e.selectedRowsData[0])}
          />
        </ContainerProdutoSync>
        <div className='text-left grid grid-cols-6 gap-2 mt-2'>
          <div className='w-24 text-xs font-bold '>
            <p>Quantidade</p>
            <CountUp end={dataSourceCopy.length} prefix='' separator="" decimal="" decimals={0} />
          </div>
          <div className='w-24 text-xs font-bold'>
            <p>Total produtos</p>
            <CountUp end={150000} prefix='R$ ' separator="." decimal=',' decimals={2} />
          </div>
          <div className='w-24 text-xs font-bold '>
            <p>Total Nota fiscal</p>
            <CountUp end={150000} prefix='R$ ' separator="." decimal=',' decimals={2} />
          </div>
          <div className='col-span-3 text-xs font-bold bg-gray-400 text-center rounded'>
            <p className='text-red-700'>ATENÇÃO</p>
            <p className='flex items-center justify-center'><div className='bg-red-700 h-2 w-2 mr-2'></div>Items em vermelho não estão cadastrados ou sincronizados</p>
          </div>
        </div>
        <hr className="mb-3" style={{ marginTop: '1px' }} />
        <footer className=''>
          <ButtonBase label="ESTORNAR NOTA" model="btn_base" className="red-color mr-5  w-40 mt-3" size="large" onClick={props.closeModal} />
          <div className="flex justify-end" style={{ bottom: 25, right: 15, position: 'absolute' }}>
            <ButtonBase label="CANCELAR" model="btn_line" className="primary-color mr-5  w-32" size="large" onClick={props.closeModal} />
            <ButtonIcon className="mr-3" label="SALVAR" icon={<FaSave />} width={'50%'} />
          </div>
        </footer>
      </div>
    </ContainerEntradaNota>


    <ModalDefault title='PROMOÇÃO' isOpen={showModalPromocao} onRequestClose={() => setShowModalPromocao(false)} width='40%' left='24%' margin='9%' height='45%'>
      <div className='card-local p-3'style={{marginTop:'-10px'}}>
        <div className='mr-4  w-32 mb-5'>
          <InputNumber placeholder='00,00' label='Desconto %' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal />
        </div>
        <div className='flex mb-16'>
          <InputDate className="text-ms w-40 mr-5 text-left" label="Data ininical" />
          <InputDate className="text-ms w-40 text-left" label="Data final" />
        </div>
        <div className="flex justify-end" style={{ bottom: 22, right: 15, position: 'absolute' }}>
          <ButtonBase label="CANCELAR" model="btn_line" className="primary-color mr-5  w-32" size="large" onClick={props.closeModal} />
          <ButtonIcon className="mr-3" label="SALVAR" icon={<FaSave />} width={'50%'} />
        </div>
      </div>
    </ModalDefault>

    <ModalSincronizarProduto showModal={showModalProd} closeModal={() => setShowModalProd(false)} tipo={tipoCadastro} />

    <ToastDefault />

  </ModalDefault>;
}