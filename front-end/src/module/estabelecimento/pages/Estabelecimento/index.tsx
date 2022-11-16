import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaCameraRetro, FaSave, FaStoreAlt, FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ThemeContext } from 'styled-components';
import * as yup from "yup";
import {
  ButtonBase,
  ButtonIcon, Divider, InputCheck, InputDefault,
  InputMask, InputSelectDefault, ModalDefault
} from "../../../../components";
import { RegimeTributario } from '../../../../domain/enums';
import tipos from '../../../../helpers/help_lista_uf.json';
import { RootState } from '../../../../store/index.store';
import { save } from '../../../../store/slices/estabelecimento.slice';
import { UtilsGeral } from '../../../../utils/utils_geral';
import { UtilsValid } from '../../../../utils/utils_valid';
import { Container, FormContainer } from './styles';
import { regimes } from './__mooks';

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  tipo: number;
}


const Estabelecimento: React.FC<ModalProps> = (props) => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { estabelecimento } = useSelector((state: RootState) => state);
  const [checkCPF, setCheckCPF] = useState(false);
  const [cpfSemMask, setCpfSemMask] = useState<string>();
  const [regime, setRegime] = useState<any>(regimes[0]);
  const [uf, setUF] = useState<any>();

  const schema = yup.object().shape({
    razao: yup.string().min(5, 'Digite no minímo 5 letras').required('O campo é obrigatório'),
    doc: yup.string().required('O campo é obrigatório'),
    email: yup.string().email().required('O campo é obrigatório'),
    tel: yup.string().required('O campo é obrigatório'),
    codIbge: yup.number().min(7, 'Digite no minímo 7 números').required('O campo é obrigatório'),
    // confirmePass: yup.string().oneOf([yup.ref("password")]).required('Digite a senha')
  }).required();

  const eventClose = () => {
    props.closeModal();
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSave = (form: FieldValues) => {
    console.log(form, uf);
    let doc = UtilsGeral.removeMask(form.doc);
    if (doc.length === 11 && !UtilsValid.isValidCPF(doc)) {
      toast.error(UtilsGeral.getEmogi()[2] + ' Ops! O CPF digitado é inválido.');
      return
    }
    else if (doc.length > 11 && !UtilsValid.isValidCNPJ(doc)) {
      toast.error(UtilsGeral.getEmogi()[2] + ' Ops! O CNPJ digitado é inválido.');
      return
    }
    // else if (!UtilsValid.isValidEmail(form.email)) {
    //   toast.error(UtilsGeral.getEmogi()[2] + ' Ops! O e-mail digitado é inválido.');
    //   return
    // }

    dispatch(save({
      ...estabelecimento,
      cpf: doc.length === 11 ? doc : undefined,
      cnpj: doc.length > 11 ? doc : undefined,
      razao: form.razao,
      nome: form.nome,
      regime: regime.value === RegimeTributario.MEI ? RegimeTributario.MEI :
        regime.value === RegimeTributario.SIMPLES ? RegimeTributario.SIMPLES :
          regime.value === RegimeTributario.PRESUMIDO ? RegimeTributario.PRESUMIDO :
            RegimeTributario.REAL,
      codIbge: form.codIbge,
      cep: form.cep,
      numero: form.numero,
      bairro: form.bairro,
      cidade: form.cidade,
      uf: uf.value,
      foneFixo: form.tel,
      celular1: form.cel,
      logo: url,
      email: form.email,
    }
    ));

  }

  const onEdit = () => {

  }

  const beforeMaskedValueChange = (oldState: any) => {
    console.log(oldState, cpfSemMask);
  };

  const [url, setUrl] = useState('');
  const uploadImge = (event: any) => {
    if (event.target.files[0]) {
      setUrl(URL.createObjectURL(event.target.files[0]));
    }
  }

  const form = () => {
    return (<>
      <header className="flex text-xl font-bold items-center justify-between mb-1 h-6" style={{ color: theme.colors.primary }}>
        <div className="flex items-center justify-between" style={{ backgroundColor: (theme.title === 'dark' ? theme.colors.tertiary : theme.colors.white), borderRadius: '8px' }}>
          <i className="mr-1"><FaStoreAlt /></i>
          <label htmlFor="">Informações Principais</label>
        </div>
      </header>
      <Divider tipo="horizontal" />
      <FormContainer onSubmit={handleSubmit(onSave)}>
        <div id='informacoes' className="mb-5">
          <div>
            <InputCheck css="p-2" label="usar CPF?"
              checked={checkCPF}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCheckCPF(event.currentTarget.checked)}
            />
          </div>
          <div className="flex mb-5">
            <InputMask className="w-2/12 mr-5" label={checkCPF ? "CPF" : "CNPJ"}
              mask={checkCPF ? "999.999.999-99" : "99.999.999/9999-99"}
              onChange={(e) => setCpfSemMask(e.target.value)}
              required
              register={register('doc')}
              errorMessage={errors.doc?.message}
              value={checkCPF ? estabelecimento.cpf : estabelecimento.cnpj}
            />
            {!checkCPF ?
              <>
                <InputDefault className="w-2/12 mr-5"
                  label={"Ins. Estadual"}
                  onChange={(e) => setCpfSemMask(e.target.value)}
                  max="11"
                  required type="number"
                // register={register('doc')}
                // errorMessage={errors.doc?.message}
                // value={checkCPF ? estabelecimento.cpf : estabelecimento.cnpj}
                />
                <InputDefault className="w-2/12 mr-5"
                  label={"Ins. Municipal"}
                  onChange={(e) => setCpfSemMask(e.target.value)}
                  max="11"
                  type="number"
                // register={register('doc')}
                // errorMessage={errors.doc?.message}
                // value={checkCPF ? estabelecimento.cpf : estabelecimento.cnpj}
                />
              </>
              : ""
            }
            <div className="w-3/12" >
              <InputSelectDefault label="Regime da empresa" options={regimes}
                defaultValue={regimes[0]}
                value={regime}
                onChange={(e) => setRegime(e)}
              />
            </div>

            <div className='flex absolute' style={{ left: '87vw', top: '18vh', display: props.tipo === 1 ? 'none' : 'flex' }}>
              <div className='mr-2'>
                <label htmlFor="file"><FaCameraRetro className='text-blue-900 text-2xl cursor-pointer' style={{ bottom: '0', marginTop: '60px' }} /></label>
                <label><FaWindowClose className='text-red-500 text-2xl cursor-pointer' style={{ bottom: '0', marginTop: '5px' }} onClick={() => setUrl('')} /></label>
              </div>
              <input type="file" accept="image/png,image/jpeg" name='file' id='file' onChange={(event) => uploadImge(event)} />
              <div className='h-28 w-28 bg-gray-200 flex items-center justify-center border-2 border-blue-400 shadow-md'>

                {url === '' ?
                  <FaStoreAlt className='text-6xl text-gray-400' />
                  :
                  <img id='preview' src={url} alt="" />
                }
              </div>
            </div>

          </div>

          <div className="flex">
            <InputDefault className="w-4/12 mr-5"
              label="Razão"
              type="text"
              required
              register={register('razao')}
              errorMessage={errors.razao?.message}
            // value={estabelecimento.razao}

            />
            <InputDefault className="w-4/12 mr-5" label="Nome Fantasia"
              type="text"
              name='nome'
              value={estabelecimento.nome}
              register={register('nome')}
            />
            {!checkCPF ?
              <InputDefault className="w-2/12 mr-5" label="Código IBGE"
                type="number"
                value={estabelecimento.codIbge}
                register={register('codIbge')}
                required
              />
              : ""}

          </div>
        </div>

        <div id='endereco' className="mb-5 text-left">
          <p className="font-bold" style={{ color: (theme.title === 'dark' ? theme.colors.textLabel : theme.colors.primary) }}>Endereço</p>
          <Divider tipo="horizontal" className="mb-2" />
          <div className="flex mb-4">
            <InputMask className="w-1/12 mr-5" label="CEP" mask={'99999-999'} register={register('cep')} value={estabelecimento.cep} />
            <InputDefault className="w-5/12 mr-5" label="Logradouro" type="text" register={register('logradouro')} value={estabelecimento.logradouro} />
            <InputDefault className="w-2/12 mr-5" label="Número" type="text" register={register('numero')} value={estabelecimento.numero} />
          </div>
          <div className="flex">
            <InputDefault className="w-3/12 mr-5" label="Bairro" type="text" register={register('bairro')} value={estabelecimento.bairro} />
            <InputDefault className="w-3/12 mr-5" label="Cidade" type="text" register={register('cidade')} value={estabelecimento.cidade} />
            <div className="w-2/12" >
              <InputSelectDefault label="UF" options={tipos.estados} placeholder='Estado...' value={uf} onChange={(e) => setUF(e)} />
            </div>
          </div>
        </div>

        <div id='contato'>
          <div className="flex">
            <InputMask className="w-40 mr-5" label="Telefone" mask={'(99) 9999-9999'}
              required
              register={register('tel')}
              errorMessage={errors.telefone?.message}
              value={estabelecimento.foneFixo}
            />
            <InputMask className="w-40 mr-5" label={"Celular"}
              mask={'(99) 9.9999-9999'}
              onChange={(e) => setCpfSemMask(e.target.value)}
              required
              register={register('cel')}
              errorMessage={errors.cel?.message}
              value={estabelecimento.celular1}
            />
            <InputDefault className="w-4/12 mr-5" label="E-mail" type="email"
              required register={register('email')}
              errorMessage={errors.email?.message}
              value={estabelecimento.email} />
          </div>
        </div>

        <footer className="flex justify-end" style={{ bottom: 25, right: 15, position: 'absolute' }}>
          {props.tipo === 1 ?
            <>
              <ButtonBase label="CANCELAR" model="btn_line" className="primary-color mr-5  w-32" size="large" onClick={eventClose} />
              <ButtonIcon className="mr-3" label="SALVAR" icon={<FaSave />} width={'50%'} type='submit' />
            </>
            :
            <ButtonIcon type="submit" className="mr-3" label="SALVAR" icon={<FaSave />} width={'100%'} />
          }
        </footer>
      </FormContainer>
    </>
    )
  }

  return <>
    {props.tipo === 1 ?
      <ModalDefault key={"#modalcaixa"} title={'FICHA DO ESTABELECIMENTO'} isOpen={props.showModal} onRequestClose={eventClose} width='95%' height='95%' left='1%' margin='2%'>
        <div className='p-3'>
          {form()}
        </div>
      </ModalDefault>
      :
      <Container className="p-3">
        {form()}
      </Container>
    }
  </>

}
export default Estabelecimento;