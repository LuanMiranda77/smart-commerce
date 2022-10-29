import React, { useContext, useState, useEffect } from 'react';
import { FaCreditCard, FaDollarSign, FaIdCard, FaMoneyCheckAlt, FaPlusSquare, FaSave } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import { ButtonBase, ButtonIcon, InputDefault, InputFileProduto, InputIcon, InputMook, InputNumber, InputSearch, InputSelectDefault, ModalDefault, ToastDefault } from "../../../../components";
import CountUp from 'react-countup';
import { toast } from "react-toastify";
import { ContainerFoto } from './styles';

// import { Container } from './styles';
interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  tipo: number;
}

export const ModalSincronizarProduto: React.FC<ModalProps> = (props) => {
  const theme = useContext(ThemeContext);

  const eventClose = () => {
    props.closeModal();
  }


  return <ModalDefault key={"#modalcaixa"} title={props.tipo === 1 ? 'SINCRONIZAR ITEM' : 'ITEM NOVO'} isOpen={props.showModal} onRequestClose={eventClose} width='99%' margin='0.4rem' >
    <div className='card-local text-center p-2' style={{ marginTop: '-10px', height: 'calc(100vh - 70px)' }}>

      <header className='grid grid-cols-12 gap-2'>
        <InputMook label='Código' type='search' readOnly />
        <InputDefault className='col-span-2' type='number' label='Código Barras' />
        <InputDefault className='col-span-4' type='number' label='Descrição' />
        <div className='col-span-3 flex justify-between items-center'>
          <div className='w-full mr-2'>
            <InputSelectDefault label='Categoria' options={[]} placeholder='Selecione a categoria' isClearable isSearchable />
          </div>
          <FaPlusSquare className='mt-6' style={{ fontSize: '25px', color: theme.colors.primary }} />
        </div>
      </header>

      <ContainerFoto >
        <InputFileProduto />
      </ContainerFoto>

      <div className='flex mt-5'>

        <div className='w-3/12 mr-1'>

          <div className='text-left  mb-3'>
            <p className="text-xs font-bold ">Converteção de médidas</p>
            <hr className="mb-2" style={{ border: '1px solid' + theme.colors.gray }} />
            <div className=' font-bold bg-gray-200 p-1 text-sm rounded-md'>
              <p>Quantas unidades deste item equivalem na sua empresa para converter corretamente as medidas?</p>
              <p className='text-blue-700'>ex: 01 CX é igual a 30 UN</p>
            </div>
          </div>

          <div className='text-left mb-3'>
            <p className="text-xs font-bold ">Medidas do XML</p>
            <hr className="mb-2" style={{ border: '1px solid' + theme.colors.gray }} />
            <div className='flex text-center w-full font-bold bg-gray-200 p-1 text-sm rounded-md'>
              <div className='mr-8 ml-1'>
                <p>Quantidade</p>
                <p>01</p>
              </div>
              <div className='mr-8'>
                <p>Medida</p>
                <p>CX</p>
              </div>
              <div className='' style={{ color: theme.colors.error }}>
                <p>Saldo do estoque</p>
                <p>01</p>
              </div>
            </div>
          </div>

          <div className='text-left mb-5'>
            <p className="text-xs font-bold ">Medidas do seu item</p>
            <hr className="mb-2" style={{ border: '1px solid' + theme.colors.gray }} />
            <div className='flex text-center w-full font-bold'>
              <div className='mr-2'>
                <InputNumber placeholder='0,000' label='Quantidade' separadorDecimal=',' casaDecimal={3} separadorMilhar='.' prefixo='' fixedZeroFinal />
              </div>
              <div className='mr-2 text-xs'>
                <InputDefault label='Medida' type='text' placeholder='UND' />
              </div>
              <InputNumber placeholder='0,000' color={theme.colors.error} label='Saldo do Estoque' separadorDecimal=',' casaDecimal={3} separadorMilhar='.' prefixo='' fixedZeroFinal />
            </div>
          </div>

          <hr className="mb-5" style={{ border: '1px solid' + theme.colors.gray }} />

          <div className='text-left'>
            <div className=' font-bold bg-gray-200 p-1 text-sm rounded-md'>
              <p>Informativo dos cauculos</p>
              <p className='text-xs'>(quantidade do xml  X  quantidade do digitada) = Saldo</p>
              <p className='text-red-700'>ex: 01 x 30,00  = 30,00</p>
            </div>
          </div>

        </div>

        <div className="linha-vertical ml-1 mr-2" style={{ marginTop: '18px', color: theme.colors.gray, height: 'calc(100vh - 190px)' }}></div>

        <div className='w-9/12'>

          <div className='text-left w-10/12 mb-2'>
            <p className="text-xs font-bold ">Cálculos de impostos</p>
            <hr className="mb-2" style={{ border: '1px solid' + theme.colors.gray }} />
          </div>

          <div className='text-left mb-1'>
            <div className='grid grid-cols-12 gap-3 mb-2 font-bold bg-gray-200 p-1 text-sm rounded-md'>
              <div className='col-span-2'>
                <p>NCM</p>
                <p>33599</p>
              </div>
              <div className='col-span-2'>
                <p>CEST</p>
                <p>33599</p>
              </div>
              <div className='col-span-7'>
                <p>CFOP</p>
                <p>33599</p>
              </div>
              <div className='col-span-1'>
                <p>CFOP</p>
                <p>33599</p>
              </div>
              <div className='col-span-2'>
                <p>NCM</p>
                <p>33599</p>
              </div>
              <div className='col-span-2'>
                <p>CEST</p>
                <p>33599</p>
              </div>
              <div className='col-span-2'>
                <p>CFOP</p>
                <p>33599</p>
              </div>
              <div className='col-span-2'>
                <p>CFOP</p>
                <p>33599</p>
              </div>
              <div className='col-span-2'>
                <p>CFOP</p>
                <p>33599</p>
              </div>
              <div className='col-span-2'>
                <p>CFOP</p>
                <p>33599</p>
              </div>
            </div>
          </div>

          <div className='text-left mb-3'>
            <p className="text-xs font-bold ">Impostos</p>
            <hr className="mb-2" style={{ border: '1px solid' + theme.colors.gray }} />

            <div className='grid grid-cols-12 gap-3 mb-5'>
              <InputDefault className='col-span-2' type='number' label='NCM' />
              <InputDefault className='col-span-2' type='number' label='CEST' />
              <div className='col-span-7'>
                <InputSelectDefault label='CFOP' options={[]} />
              </div>
              <InputDefault className='col-span-1' type='number' label='CST/CSONS' />
            </div>

            <div className='grid grid-cols-12 gap-3'>
              <div className='mr-2 col-span-2'>
                <InputNumber placeholder='00,00' label='% ICMS' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal color={theme.colors.info} />
              </div>
              <div className='mr-2 col-span-2'>
                <InputNumber placeholder='00,00' label='ICMS' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal color={theme.colors.info} />
              </div>
              <div className='mr-2 col-span-2'>
                <InputNumber placeholder='00,00' label='% IPI' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal color={theme.colors.warning} />
              </div>
              <div className='mr-2 col-span-2'>
                <InputNumber placeholder='00,00' label='IPI' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal color={theme.colors.warning} />
              </div>
              <div className='mr-2 col-span-2'>
                <InputNumber placeholder='00,00' label='% COFINS' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal color={theme.colors.error} />
              </div>
              <div className='mr-2 col-span-2'>
                <InputNumber placeholder='00,00' label='COFINS' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal color={theme.colors.error} />
              </div>
            </div>
          </div>

          <div className='text-left mb-3'>
            <p className="text-xs font-bold ">Preços unitários</p>
            <hr className="mb-2" style={{ border: '1px solid' + theme.colors.gray }} />
            <div className='flex text-center w-full font-bold'>
              <div className='mr-4 w-32'>
                <InputNumber placeholder='00,00' label='Preço custo total' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal readOnly />
              </div>
              <div className='mr-4  w-32'>
                <InputNumber placeholder='00,00' label='Preço custo' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal />
              </div>
              <div className='w-32'>
                <InputNumber placeholder='00,00' label='Preço de venda' separadorDecimal=',' casaDecimal={2} separadorMilhar='.' prefixo='' fixedZeroFinal color={theme.colors.success} />
              </div>
            </div>
          </div>

          <hr className="mb-1" style={{ border: '1px solid' + theme.colors.gray }} />

          <footer className=''>
            <div className="flex justify-end" style={{ bottom: 25, right: 15, position: 'absolute' }}>
              <ButtonBase label="CANCELAR" model="btn_line" className="primary-color mr-5  w-32" size="large" onClick={props.closeModal} />
              <ButtonIcon className="mr-3" label="SALVAR" icon={<FaSave />} width={'50%'} />
            </div>
          </footer>

        </div>



      </div>
    </div>
    <ToastDefault />
  </ModalDefault>;
}