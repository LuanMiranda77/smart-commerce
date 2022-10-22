import React, { useContext, useEffect, useState } from "react"
import { FaArchive, FaBarcode, FaBox, FaBoxOpen, FaFileInvoice, FaHandHoldingMedical, FaHandHoldingUsd, FaIdCard, FaIdCardAlt, FaLongArrowAltLeft, FaMinusCircle, FaMoneyBillAlt, FaMoneyCheck, FaMoneyCheckAlt, FaPercent, FaSlideshare, FaSync, FaTeamspeak, FaUserTie } from "react-icons/fa";
import { ThemeContext } from 'styled-components';
import { ButtonPdv } from "../../../../components";

import { Container, ContainerMenu, ContainerProduto } from './styles';

/**
*@Author
*@Issue
*/

function Pdv() {
  const theme = useContext(ThemeContext);
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
    <body className="flex font-bold" style={{ color: theme.colors.textLabel, backgroundColor: theme.colors.background, height: '93.5%' }}>
      <div className="" style={{ width: '70%' }}>
        <div className="h-22 p-2 flex" style={{ backgroundColor: theme.colors.tertiary }}>
          <div className="w-full">
            <label className="text-xs">DESCRIÇÃO DO ITEM  OU CÓDIGO</label>
            <div className="flex">
              <i className="mr-2"><FaBarcode style={{ height: '48px', width: '48px' }} /></i>
              <input className="w-full text-4xl focus:outline-none" type="text" style={{ background: 'transparent', border: 'none' }} />
            </div>
          </div>
          <div className="linha-vertical h-14 m-2"></div>
          <div className="p-1">
            <label htmlFor="" className="text-sm">QUANTIDADE</label>
            <input className="w-32 text-4xl focus:outline-none" type="text" style={{ background: 'transparent', border: 'none' }} />
          </div>
        </div>
        <ContainerProduto>

        </ContainerProduto>
        <footer className="flex h-22 p-2" style={{ backgroundColor: '#B4B8C5', borderTop: '1px solid black' }}>
          <div className="w-32 text-left mr-10">
            <p className="text-xs text-black">ITEMS</p>
            <p className="text-3xl" style={{ color: theme.colors.info }}>02</p>
          </div>
          <div className="w-full text-right">
            <p className="text-xs text-black">TOTAL A PAGAR</p>
            <p className="text-6xl" style={{ color: theme.colors.error }}>R$ 999.000,00</p>
          </div>
        </footer>
      </div>
      <div className="" style={{ width: '30%' }}>
        <header className="h-12" style={{ backgroundColor: theme.colors.info }}>
          <div className="w-full flex items-center justify-between">
            <label htmlFor="">SALDO À PAGAR</label>
            <label htmlFor="">R$ 999.000,00</label>
          </div>
        </header>
        <body className="shadow-lg">
          <div className="h-32 shadow-lg" style={{ backgroundColor: theme.colors.primary }}>
            <div className="text-center p-3">
              <label className="text-xs">INFORME O VALOR PAGO E  CLIQUE NA FORMA DE PAGAMENTO</label>
              <input className="w-full h-10" type="text" />
            </div>
            <div className="flex items-center justify-between text-left p-1">
              <label className="text-xs mr-2">TROCO</label>
              <input className="w-full" type="text" />
            </div>
          </div>
          <ContainerMenu>
            <div className="lg:grid lg:grid-cols-3 lg:gap-4 font-bold mb-3">
              <ButtonPdv labelSuperior="F1" icon={<FaArchive className="text-3xl" />} labelInferior="CONSULTAR PRODUTOS" />
              <ButtonPdv labelSuperior="F2" icon={<FaBoxOpen className="text-4xl" />} labelInferior="ABRIR CAIXA" />
              <ButtonPdv labelSuperior="F3" icon={<FaBox className="text-3xl" />} labelInferior="FECHAR CAIXA" />
              <ButtonPdv labelSuperior="F4" icon={<FaHandHoldingUsd className="text-3xl" />} labelInferior="DINHEIRO" />
              <ButtonPdv labelSuperior="F5" icon={<FaIdCard className="text-3xl" />} labelInferior="VALE" />
              <ButtonPdv labelSuperior="F6" icon={<FaMoneyCheckAlt className="text-3xl" />} labelInferior="CARTÃO DÉBITO" />
              <ButtonPdv labelSuperior="F7" icon={<FaMoneyCheck className="text-3xl" />} labelInferior="CARTÃO CRÉDITO" />
              <ButtonPdv labelSuperior="F8" icon={<FaMoneyBillAlt className="text-3xl" />} labelInferior="VENDA DIRETA" />
              <ButtonPdv labelSuperior="F9" icon={<FaSync className="text-3xl" />} labelInferior="ALTERAR PREÇO" />
              <ButtonPdv labelSuperior="F10" icon={<FaFileInvoice className="text-4xl" />} labelInferior="VENDAS" />
              <ButtonPdv labelSuperior="F11" icon={<FaHandHoldingMedical className="text-4xl" />} labelInferior="ADICIONAL" />
              <ButtonPdv labelSuperior="DEL" icon={<FaMinusCircle className="text-3xl" />} labelInferior="CANCELAR PRODUTOS" />
              <ButtonPdv labelSuperior="ESC" icon={<FaLongArrowAltLeft className="text-4xl" />} labelInferior="SAIR" />
            </div>
          </ContainerMenu>
        </body>
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

      </div>

    </body>


  </Container>;
}
export default Pdv;