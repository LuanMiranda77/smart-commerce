import React, { useContext, useState, useEffect } from 'react';
import { FaCreditCard, FaDollarSign, FaIdCard, FaMoneyCheckAlt } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import { ButtonBase, InputIcon, InputNumber, InputSearch, ModalDefault, ToastDefault } from "../../../../components";
import CountUp from 'react-countup';
import { toast } from "react-toastify";

// import { Container } from './styles';
interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

export const ModalSincronizarProduto: React.FC<ModalProps> = (props) => {
  const theme = useContext(ThemeContext);

  const eventClose = () => {
    props.closeModal();
  }


  return <ModalDefault key={"#modalcaixa"} title={'ENTRADA DA NOTA'} isOpen={props.showModal} onRequestClose={eventClose} width='50%' left='25%'>
    <div className='p-5 text-center'>
      </div>
    <ToastDefault/>
  </ModalDefault>;
}