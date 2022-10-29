import React, { useContext, useState, useEffect } from 'react';
import { FaCreditCard, FaDollarSign, FaFileUpload, FaIdCard, FaKickstarter, FaMoneyCheckAlt, FaPlus, FaSave, FaSink, FaSync, FaUserPlus } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import { ButtonBase, ButtonIcon, DataGridDefault, InputDate, InputDefault, InputIcon, InputMask, InputNumber, InputSearch, ModalDefault, SummaryCustom, SummaryDefault, ToastDefault } from "../../../../components";
import CountUp from 'react-countup';
import { toast } from "react-toastify";
import { ModalSincronizarProduto } from './modalSincronizarProduto';
import { ContainerEntradaNota, ContainerTable } from './styles';
import { ColumnsDataGridType } from '../../../../components/types';

// import { Container } from './styles';
interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

export const ModalEntrada: React.FC<ModalProps> = (props) => {
  const theme = useContext(ThemeContext);
  const [showModalProd, setShowModalProd] = useState(false);


  const eventClose = () => {
    props.closeModal();
  }

  const columns = new Array<ColumnsDataGridType>();
  columns.push({ dataField: 'numero', caption: 'NÚMERO', alignment: 'left', dataType: 'string', width: 100, cssClass: 'font-bold column-1' });
  columns.push({ dataField: 'emissao', caption: 'EMISSÃO', alignment: 'center', dataType: 'date', width: 95, cssClass: 'font-bold' });
  columns.push({ dataField: 'cnpj', caption: 'CNPJ/CPF', alignment: '', dataType: 'string', width: 150 });
  columns.push({ dataField: 'fornecedor', caption: 'FORNECEDOR', alignment: 'left', dataType: 'number', });
  columns.push({ dataField: 'vlrbruto', caption: 'VLR.BRUTO', alignment: 'center', dataType: 'number', format: { type: 'fixedPoint', precision: 2 }, width: 110 });
  // columns.push({ dataField: 'vlricms', caption: 'VLR.ICMS', alignment: 'center', dataType: 'number', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 110 });
  // columns.push({ dataField: 'vlrdesconto', caption: 'VLR.DESCONTO', alignment: 'right', dataType: 'number', cssClass: 'font-bold', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 150 });
  // columns.push({ dataField: 'vlrliquido', caption: 'VLR.LÍQUIDO', alignment: 'right', dataType: 'number', cssClass: 'font-bold', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 150 });
  columns.push({ dataField: 'status', caption: 'STATUS', alignment: 'center', dataType: 'number', cssClass: 'font-bold text-sx', allowSearch: false, width: 120 });
  columns.push({ dataField: 'manifesto', caption: 'MANIFESTO', alignment: 'center', dataType: 'date', allowSearch: false, width: 100 });
  columns.push({ dataField: 'entrada', caption: 'ENTRADA', alignment: 'center', dataType: 'date', cssClass: 'font-bold', allowSearch: false, width: 95 });
  columns.push({ dataField: 'incluida', caption: 'INCLUIDA', alignment: 'center', dataType: 'number', cssClass: 'font-bold', allowSearch: false, width: 90 });
  columns.push({ dataField: '', caption: '', alignment: 'center', dataType: '', cssClass: '', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 50 });

  const data = [
    { numero: '12368498', emissao: '11/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'CADA', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'A', manifesto: '12/05/2022', entrada: '', incluida: 'N' },
    { numero: '98984225', emissao: '31/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'KAKA D', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'A', manifesto: '12/05/2022', entrada: '', incluida: 'N' },
    { numero: '1154889', emissao: '21/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'A', manifesto: '12/05/2022', entrada: '', incluida: 'N' },
    { numero: '1245', emissao: '10/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'A', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '45687', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'A', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '697', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '1125', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
  ];

  const [dataSource, setDataSource] = useState(data);
  const [dataSourceCopy, setDataSourceCopy] = useState(dataSource);

  const search = (desc: any) => {
    if (desc !== '') {
      let notas = dataSourceCopy;
      if (!isNaN(parseFloat(desc)) && isFinite(desc)) {
        notas = dataSourceCopy.filter(produto => { return produto.numero.includes(desc) });
      } else {
        notas = dataSourceCopy.filter(produto => { return produto.fornecedor.includes(desc.toUpperCase()) });
      }
      setDataSource(notas);
    } else {
      setDataSource(dataSourceCopy);
    }
  }


  return <ModalDefault key={"#modalcaixa"} title={'ENTRADA DE NOTA'} isOpen={props.showModal} onRequestClose={eventClose} width='100%' height='100%'>
    <ContainerEntradaNota className='p-2 flex'>
      <div className='left' style={{ width: '30%' }}>
        <p className="text-left text-xs font-bold ">Dados fornecedor</p>
        <hr className="mb-2" style={{ border: '1px solid' + theme.colors.gray }} />
        <InputDefault className="w-6/12 mr-5 mb-3" label="Número da nota" type="number" />
        <InputDefault className="mr-5 mb-5" label="Chave acesso" type="number" />
        <div className='flex' style={{ marginTop: '-10px' }}>
          <InputDate className="text-ms w-40 mr-5 text-left" label="Data emissão" />
          <InputDate className="text-ms w-40 text-left" label="Data entrada" />
        </div>
        <div className='flex items-center mt-3 mb-2' style={{ marginTop: '0px' }}>
          <InputMask className="w-6/12 mr-5 " label="CNPJ" type="number" mask={'99.999.999/9999-99'} />
          <i><FaUserPlus style={{ fontSize: '40px', marginTop: '25px', color: theme.colors.primary }} /></i>
        </div>
        <InputDefault className=" mr-5 mb-4" label="Fornecedor" type="number" />
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
        </div>

      </div>

      <div className="linha-vertical h-full m-2" style={{ marginTop: '-1px', color: theme.colors.gray }}></div>

      <div className='right' style={{ width: '70%' }}>
        <div className="h-10 flex ">
          <div className="w-8/12">
            <InputSearch onChange={(e) => search(e.currentTarget.value)} />
          </div>
          <ButtonIcon className="mr-3" label="NOVO" icon={<FaPlus />} width={'12%'} style={{ marginTop: '-3px' }} />
          <ButtonIcon className="" label="SINCRONIZAR" icon={<FaSync />} width={'20%'} style={{ marginTop: '-3px' }} />
        </div>
        <hr className="mb-3" style={{ marginTop: '-5px' }} />
        <ContainerTable>
          <DataGridDefault
            columns={columns}
            dataSource={dataSource}
            paginar={false}
            showBorders={true}
            showColumnLines={true}
            hoverStateEnabled={true}
            rowAlternationEnabled={true}
          />
        </ContainerTable>
        <footer className=''>
        <div className="flex justify-end w-full" style={{bottom: 25, right:15, position:'absolute'}}>
            <ButtonBase  label="CANCELAR" model="btn_line" className="primary-color mr-5  w-32" size="large" onClick={props.closeModal}/>
            <ButtonIcon className="mr-3" label="SALVAR" icon={<FaSave />} width={'10%'} />
        </div>
        </footer>
      </div>
    </ContainerEntradaNota>
    <ToastDefault />
    <ModalSincronizarProduto showModal={showModalProd} closeModal={() => setShowModalProd(false)} />
  </ModalDefault>;
}