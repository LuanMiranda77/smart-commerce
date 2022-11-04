import React, { useContext, useState } from "react";
import { FaSave, FaStoreAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { ThemeContext } from 'styled-components';
import { ButtonIcon, Divider, InputCheck, InputDefault, InputMask, InputSelectDefault, ToastDefault } from "../../../../components";
import tipos from '../../../../helpers/help_lista_uf.json';
import { UtilsValid } from "../../../../utils/utils_valid";
import { Container } from './styles';
import { regimes } from './__mooks';
import InputMaskDefault, { BeforeMaskedStateChangeStates, InputState, ReactInputMask } from 'react-input-mask';


/**
*@Author
*@Issue
*/

function Estabelecimento() {
  const theme = useContext(ThemeContext);
  const [mask, setMask] = useState<string>('999.999.999-99');
  const [checkCPF, setCheckCPF] = useState(false);
  const [cpfSemMask, setCpfSemMask] = useState<string>();

  const onSave = () => {

  }

  const onValidaCpfCnpj = (newState: any, oldState: any, userInput: any) => {
    console.log(oldState, newState, userInput, cpfSemMask);
    // if(doc){
    //   if(doc.length === 11){
    //     if(!UtilsValid.isValidCPF(doc)){
    //       toast.error('CPF inválido');
    //     }
    //   }else{
    //     UtilsValid.isValidCNPJ(doc);
    //   }
    // }

  }

  const beforeMaskedValueChange = (oldState: any) => {
    console.log(oldState, cpfSemMask);
  };

  return <Container className="p-3">
    <header className="flex text-xl font-bold items-center justify-between mb-1 h-6" style={{ color: theme.colors.primary }}>
      <div className="flex items-center justify-between" style={{ backgroundColor: (theme.title === 'dark' ? theme.colors.tertiary : theme.colors.white), borderRadius: '8px' }}>
        <i className="mr-1"><FaStoreAlt /></i>
        <label htmlFor="">Informações Principais</label>
      </div>
    </header>
    <Divider tipo="horizontal" />

    <div id='informacoes' className="mb-5">
      <div>
        <InputCheck css="p-2" label="usar CPF?"
          checked={checkCPF}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCheckCPF(event.currentTarget.checked)}
        />
      </div>
      <div className="flex mb-5">
        <InputMask className="w-2/12 mr-5" label={checkCPF?"CPF":"CNPJ"} mask={checkCPF?"999.999.999-99":"99.999.999/9999-99"} required value={cpfSemMask} onChange={(e) => setCpfSemMask(e.target.value)} />
        <div className="w-3/12" >
          <InputSelectDefault label="Regime da empresa" options={regimes} defaultValue={regimes[0]} />
        </div>
      </div>

      <div className="flex">
        <InputDefault className="w-4/12 mr-5" label="Razão" type="text" />
        <InputDefault className="w-4/12 mr-5" label="Nome Fantasia" type="text" />
      </div>
    </div>

    <div id='endereco' className="mb-5">
      <p className="font-bold" style={{ color: (theme.title === 'dark' ? theme.colors.textLabel : theme.colors.primary) }}>Endereço</p>
      <Divider tipo="horizontal" className="mb-2" />
      <div className="flex mb-4">
        <InputMask className="w-2/12 mr-5" label="CEP" mask={'99999-999'}></InputMask>
        <InputDefault className="w-6/12 mr-5" label="Lagradouro" type="text" />
        <InputDefault className="w-1/12 mr-5" label="Número" type="text" />
      </div>
      <div className="flex">
        <InputDefault className="w-4/12 mr-5" label="Bairro" type="text" />
        <InputDefault className="w-4/12 mr-5" label="Cidade" type="text" />
        <div className="w-2/12" >
          <InputSelectDefault label="UF" options={tipos.estados} placeholder='Estado...' />
        </div>
      </div>
    </div>

    <div id='contato'>
      <p className="font-bold" style={{ color: (theme.title === 'dark' ? theme.colors.textLabel : theme.colors.primary) }}>Endereço</p>
      <Divider tipo="horizontal" className="mb-2" />
      <div className="flex">
        <InputMask className="w-2/12 mr-5" label="Telefone" mask={'(83)9.9999-9999'}></InputMask>
        <InputDefault className="w-6/12 mr-5" label="E-mail" type="email" />
      </div>
    </div>

    <footer className="flex justify-end" style={{ bottom: 25, right: 15, position: 'absolute' }}>
      <ButtonIcon className="mr-3" label="SALVAR" icon={<FaSave />} width={'100%'} onClick={onSave} />
    </footer>

    <ToastDefault />

  </Container>;
}
export default Estabelecimento;