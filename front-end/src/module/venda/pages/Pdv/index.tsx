import { useContext, useState } from "react";
import CountUp from 'react-countup';
import { FaArchive, FaBarcode, FaBox, FaBoxOpen, FaFileInvoice, FaHandHoldingMedical, FaHandHoldingUsd, FaIdCard, FaIdCardAlt, FaLongArrowAltLeft, FaMinusCircle, FaMoneyBillAlt, FaMoneyCheck, FaSync, FaTeamspeak, FaUserTie } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from 'styled-components';
import { ButtonPdv, DataGridDefault, DialogPoupConfirme, DialogPoupDefault, ModalDefault } from "../../../../components";
import { UtilsConvert } from '../../../../utils/utils_convert';

import { NumericFormat } from "react-number-format";
import { ColumnsDataGridType } from "../../../../components/types";
import { Container, ContainerLeft, ContainerMenu, ContainerProduto, ContainerRight } from './styles';
import { set } from "lodash";
import ModalProduto from './modalProduto';

/**
*@Author Luan Miranda
*@Issue 15
*/

function Pdv() {

  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const [showPoup, setShowPopup] = useState(false);
  const [showModalProd, setShowModalProd] = useState(false);
  const columns = new Array<ColumnsDataGridType>();
  columns.push({ dataField: 'item', caption: 'ITEM', alignment: 'center', dataType: '', width: 70, cssClass: 'font-bold column-1' });
  columns.push({ dataField: 'codigo', caption: 'Código', alignment: '', dataType: '', width: 70, cssClass: 'font-bold', visible: false });
  columns.push({ dataField: 'descricao', caption: 'DESCRIÇÃO', alignment: '', dataType: '', cssClass: 'font-bold column-2' });
  columns.push({ dataField: 'quantidade', caption: 'QUANTIDADE', alignment: 'center', dataType: 'number', allowSearch: false, format: { type: 'fixedPoint', precision: 3 }, width: 110 });
  columns.push({ dataField: 'valor', caption: 'VALOR', alignment: 'center', dataType: 'number', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 110 });
  columns.push({ dataField: 'desconto', caption: 'DESCONTO', alignment: 'center', dataType: 'number', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 110 });
  columns.push({ dataField: 'total', caption: 'TOTAL', alignment: 'right', dataType: 'number', cssClass: 'font-bold', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 150 });

  const dataSource = [
    { item: 1, descricao: 'produto', quantidade: 10.00, valor: 1502, desconto: 12.00, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32.00 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
  ]

  const styleCell = (data: any) => {
    if (data.rowType === "data") {
      if (data.columnIndex === 5) {
        return (
          <span className="font-bold" style={{ color: theme.colors.error }}>
            {data.row.cells[data.columnIndex].value}
            {/* <CountUp end={data.row.cells[data.columnIndex].value} prefix='' separator="." decimal="," decimals={2} /> */}
          </span>
        );
      }
      else if (data.columnIndex === 1) {
        return (
          <div style={{ color: theme.colors.primary }}>
            <p className="text-black">Cod.55454</p>
            <p className="font-bold text-lg">{data.row.cells[data.columnIndex].value}</p>
            {/* <CountUp end={data.row.cells[data.columnIndex].value} prefix='' separator="." decimal="," decimals={2} /> */}
          </div>
        );
      }
    }
    return (
      <div style={{ color: "black" }}>
        {data.row.cells[data.columnIndex].value}
      </div>
    );
  };

  const eventCaptureTecla = (event: any) => {
    let key = event.key;
    switch (key) {
      case 'F2':
        console.log('vc dogitou f2');
        break;
      case 'Escape':
        setShowPopup(true);
        // navigate('/');
        console.log('vc dogitou ESC');

        break;


    }
    console.log(key);
  }

  const eventEsc = ()=>{
    setShowPopup(false);
    document.getElementById("#digite-produto")?.focus();
  }

  return <Container>
    <header>
      <div className="flex items-center text-left font-bold text-xs" style={{ color: theme.colors.textLabel }}>
        <FaTeamspeak className="text-3xl mr-2" />
        <div>
          <p>SUPORTE</p>
          <p style={{ color: theme.colors.warning }}>83 99638-6694</p>
        </div>
      </div>
      <div className="flex  items-center font-bold" style={{ color: theme.colors.textLabel }}>
        <div className="flex text-right items-center text-xs cursor-pointer" >
          <div className="mr-2">
            <p>CONSUMIDOR</p>
            <p style={{ color: theme.colors.success }}>MARIA</p>
          </div>
          <FaUserTie className="text-3xl" />
        </div>
        <div className="linha-vertical h-10 m-2"></div>
        <div className="flex text-left items-center text-xs cursor-pointer">
          <FaIdCardAlt className="text-3xl mr-2" />
          <div >
            <p>VENDEDOR</p>
            <p style={{ color: theme.colors.warning }}>MARIA</p>
          </div>
        </div>
        <div className="text-center font-bold text-xl ml-32">
          <p>CAIXA</p>
          <p>01</p>
        </div>
      </div>
    </header>
    <div className="flex font-bold" style={{ color: theme.colors.textLabel, backgroundColor: theme.colors.background }}>
      <ContainerLeft>
        <div className="h-22 p-2 flex" style={{ backgroundColor: theme.colors.tertiary }}>
          <div className="w-full">
            <label className="text-xs">DESCRIÇÃO DO ITEM  OU CÓDIGO</label>
            <div className="flex">
              <i className="mr-2"><FaBarcode style={{ height: '48px', width: '48px' }} /></i>
              <input 
                id="#digite-produto"
                className="w-full text-4xl focus:outline-none"
                autoFocus
                type="text"
                style={{ background: 'transparent', border: 'none' }}
                onKeyDownCapture={eventCaptureTecla}
              />
            </div>
          </div>
          <div className="linha-vertical h-14 m-2"></div>
          <div className="p-1">
            <label htmlFor="" className="text-sm">QUANTIDADE</label>
            <NumericFormat
              className="w-32 text-4xl focus:outline-none" style={{ background: 'transparent', border: 'none' }}
              type={'text'}
              thousandSeparator={false}
              decimalSeparator={','}
              prefix={''}
              fixedDecimalScale={true}
              decimalScale={3}
            />
          </div>
        </div>
        <ContainerProduto>
          <DataGridDefault 
            columns={columns} 
            dataSource={dataSource} 
            allowSorting={false} 
            showColumnLines
            rowAlternationEnabled
            paginar={false} 
            />
        </ContainerProduto>
        <footer className="flex h-22 p-2" style={{ backgroundColor: '#B4B8C5', borderTop: '1px solid black' }}>
          <div className="w-32 text-left mr-10">
            <p className="text-xs text-black">ITEMS</p>
            <p className="text-3xl" style={{ color: theme.colors.info }}>{dataSource.length < 9 ? '0' + dataSource.length : dataSource.length}</p>
          </div>
          <div className="w-full text-right">
            <p className="text-xs text-black">TOTAL A PAGAR</p>
            <p className="text-6xl" style={{ color: theme.colors.error }}>{UtilsConvert.formatCurrency(58544878778.22)}</p>
          </div>
        </footer>
      </ContainerLeft>

      {/* =======================================divisor=============== */}

      <ContainerRight>
        <header className="h-12" style={{ backgroundColor: theme.colors.info }}>
          <div className="w-full flex items-center justify-between">
            <label htmlFor="">SALDO À PAGAR</label>
            <label htmlFor="">{UtilsConvert.formatCurrency(585.22)}</label>
          </div>
        </header>
        <div className="shadow-lg">
          <div className="h-32 shadow-lg" style={{ backgroundColor: theme.colors.primary }}>
            <div className="text-center p-3">
              <label className="text-xs">INFORME O VALOR PAGO E  CLIQUE NA FORMA DE PAGAMENTO</label>
              <NumericFormat
                className="w-full h-10 focus:outline-none text-center text-3xl" style={{ background: 'transparent', border: 'none' }}
                type={'text'}
                thousandSeparator={'.'}
                decimalSeparator={','}
                prefix={''}
                fixedDecimalScale={true}
                decimalScale={2}
              />
              {/* <InputMask className="w-full h-10 text-black focus:outline-none text-center text-3xl" label='teste' mask='999,99' style={{ background: 'transparent', border: 'none' }}></InputMask> */}
            </div>
            <div className="flex items-center justify-between text-center p-1">
              <label className="text-xs mr-2" style={{ color: theme.colors.warning }}>TROCO</label>
              <label className="w-full text-3xl" style={{ color: theme.colors.warning }}>R$ 130,00</label>
            </div>
          </div>
          <ContainerMenu className="">
            <div className="max-h-max lg:grid lg:grid-cols-4 lg:gap-3 font-bold mb-3">
              <ButtonPdv labelSuperior="F1" icon={<FaArchive className="text-xl" />} labelInferior="CONSULTAR PRODUTOS" onClick={()=>setShowModalProd(true)}/>
              <ButtonPdv labelSuperior="F2" icon={<FaBoxOpen className="text-2xl" />} labelInferior="ABRIR CAIXA" />
              <ButtonPdv labelSuperior="F3" icon={<FaBox className="text-xl" />} labelInferior="FECHAR CAIXA" />
              <ButtonPdv labelSuperior="F4" icon={<FaHandHoldingUsd className="text-2xl" />} labelInferior="DINHEIRO" />
              <ButtonPdv labelSuperior="F5" icon={<FaIdCard className="text-xl" />} labelInferior="VALE" />
              {/* <ButtonPdv labelSuperior="F6" icon={<FaMoneyCheckAlt className="text-xl" />} labelInferior="CARTÃO DÉBITO" /> */}
              <ButtonPdv labelSuperior="F7" icon={<FaMoneyCheck className="text-xl" />} labelInferior="CARTÃO" />
              <ButtonPdv labelSuperior="F8" icon={<FaMoneyBillAlt className="text-xl" />} labelInferior="VENDA DIRETA" />
              <ButtonPdv labelSuperior="F9" icon={<FaSync className="text-xl" />} labelInferior="ALTERAR PREÇO" />
              <ButtonPdv labelSuperior="F10" icon={<FaFileInvoice className="text-xl" />} labelInferior="VENDAS" />
              <ButtonPdv labelSuperior="F11" icon={<FaHandHoldingMedical className="text-xl" />} labelInferior="ADICIONAL" />
              <ButtonPdv labelSuperior="DEL" icon={<FaMinusCircle className="text-xl" />} labelInferior="CANCELAR PRODUTOS" />
              <ButtonPdv labelSuperior="ESC" icon={<FaLongArrowAltLeft className="text-xl" />} labelInferior="SAIR" onClick={dataSource.length > 0 ? () => setShowPopup(true):() => navigate('/')}/>
              {/* <Link to={'/'} onClick={() => setShowPopup(true)}>
              </Link> */}
            </div>
          </ContainerMenu>
        </div>
        <footer className="flex h-16">
          <div className="w-3/5 p-2" style={{ backgroundColor: theme.colors.info }}>
            <p className="text-xs lg:text-lg">DINHEIRO</p>
            <p className="text-xs lg:text-2xl" style={{ marginTop: '-.5rem' }}>R$ 989,50</p>
          </div>
          <button className="w-2/5 font-bold button-pagamento" style={{ backgroundColor: theme.colors.success }}>
            <p className="text-xs lg:text-lg">CONFIRMAR</p>
            <p className="text-xs lg:text-xs" style={{ marginTop: '-.5rem' }}>PAGAMENTO</p>
          </button>
        </footer>
      </ContainerRight>
    </div>

    <DialogPoupConfirme title="Confirme" isOpen={showPoup} onRequestClose={() => setShowPopup(false)} onClickSim={eventEsc}>
      <p className="font-bold text-2xl">Tem certesa que deseja sair da venda? </p>
      <p className="font-bold" style={{color:theme.colors.error}}>Esta venda ficará nas vendas pendentes ao sair da tela!</p>
    </DialogPoupConfirme>

    <ModalProduto  key={"#modalproduto"}  showModal={showModalProd} closeModal={() => setShowModalProd(false)}/>
      
  </Container>;
}
export default Pdv;