import _ from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { ThemeContext } from 'styled-components';
import { api } from "../../../config/api";
import { EstabelecimentoType } from '../../../domain';
import { Cargo } from '../../../domain/enums';
import { load, selectStateEstab } from '../../../store/slices/estabelecimento.slice';
import { loadEstabelecimentos, selectStateEstabelecimentos } from '../../../store/slices/estabelecimentos.slice';
import { UtilsGeral } from '../../../utils/utils_geral';
import { UtilsUserLocal } from '../../../utils/utils_userLocal';
import { ModalLoad } from '../../Modal/ModalLoad';
import { ToastDefault } from '../../ToastDefault';
import { Container } from './styles';

interface InputSelectEstabelecimentoProps {
  //adicionar os props

}

export const InputSelectEstabelecimento: React.FC<InputSelectEstabelecimentoProps> = () => {
  const [options, setOptions] = useState(new Array<any>());
  const [modalShow, setModalShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  const estabelecimento = useSelector(selectStateEstab);
  const estabelecimentos = useSelector(selectStateEstabelecimentos);
  const { colors, title } = useContext(ThemeContext);

  useEffect(() => {
    setModalShow(true);
    let user = UtilsUserLocal.getTokenLogin();
    if (user.cargo === Cargo.MASTER) {
      user.estabelecimento = 0;
    }
    api.get(`api/estabelecimento/estabelecimentos/${user.estabelecimento}/${user.cargo}`).then(resp => {
      if (resp.data.length === 1) {
        dispatch(load(resp.data[0]));
      } else {
        let lista = new Array<any>();
        resp.data.forEach((estabelecimento: EstabelecimentoType) => {
          lista.push({
            label: estabelecimento.matrizId == null ?
              estabelecimento.nome :
              estabelecimento.matrizId === "0" ?
                estabelecimento.nome + ' - MATRIZ' :
                estabelecimento.nome + ' - FILIAL',
            value: estabelecimento.id
          })
        });
        setOptions(lista);
      }
      dispatch(loadEstabelecimentos(resp.data));
      setModalShow(false);
      return options;
    }).catch(error => {
      console.log(error.response.data);
      return toast.error(UtilsGeral.getEmogi()[3] + " " + error.response.data[0].mensagemUsuario);
    });
  }, [])

  const onSelect = (event: any) => {
    let selectEstabelecimento = _.find(estabelecimentos, { 'id': event.value });
    if (selectEstabelecimento) {
      dispatch(load(selectEstabelecimento));
    }
  }

  return <Container className='font-bold'>

    {options.length > 1 ?
      <Select className='input'
        options={options}
        placeholder='Selecione o estabelecimento...'
        isSearchable={true}
        isClearable={true}
        onChange={(e) => { onSelect(e) }}
      />
      :
      <div className='ml-1' style={{marginTop:'-3px'}}>
        <p className='text-lg font-bold' style={{color: colors.textLabel}}>{estabelecimento.nome}</p>
        <p className='text-xs' style={{color: colors.warning}}>CNPJ: {estabelecimento.cnpj}</p>
      </div>
    }
    <ToastDefault />
    <ModalLoad isOpen={modalShow} mensage='Carregando dados iniciais do estabelecimento aguarde...' onRequestClose={()=>setModalShow(false)}/>
  </Container>;
}