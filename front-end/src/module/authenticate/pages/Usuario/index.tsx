import { yupResolver } from '@hookform/resolvers/yup';
import { response } from 'express';
import _ from 'lodash';
import { useContext, useEffect, useState } from 'react';
import { FieldValues, useForm } from "react-hook-form";
import { FaPauseCircle, FaPenSquare, FaPlayCircle, FaPlus, FaSave } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ThemeContext } from 'styled-components';
import * as yup from "yup";
import {
  ButtonBase,
  ButtonIcon,
  DataGridDefault,
  DialogPopupConfirme,
  Divider,
  InputCheck,
  InputDefault,
  InputMask,
  InputSearch,
  InputSelectDefault,
  ModalDefault,
  TabsDefault
} from "../../../../components";
import { ColumnsDataGridType } from '../../../../components/types';
import { Cargo } from '../../../../domain/enums';
import { UserAplicationType } from '../../../../domain/types/user_aplication';
import { selectStateEstab } from '../../../../store/slices/estabelecimento.slice';
import { initialState, selectStateUser } from '../../../../store/slices/usuario.slice';
import { UtilsGeral } from '../../../../utils/utils_geral';
import { UtilsValid } from '../../../../utils/utils_valid';
import { UsuarioService } from '../services/usuarioService';
import { Container, FormContainer, TableContainer } from './styles';
import { cargos } from './__mocks__';

/**
*@Author
*@Issue
*/

function Usuario() {
  const userAplication = useSelector(selectStateUser);
  const estabelecimento = useSelector(selectStateEstab);
  const { colors, title } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<UserAplicationType>(initialState);
  const [showPoupAtivo, setShowPopupAtivo] = useState(false);
  const [showPoupInativo, setShowPopupInativo] = useState(false);
  const [dataSource, setDataSource] = useState<Array<UserAplicationType>>([]);
  const [dataSourceCopy, setDataSourceCopy] = useState(dataSource);
  const [confirmePass, SetConfirmePass] = useState('');
  const { handleSubmit } = useForm();
  const service = new UsuarioService();
  const[gridInstance, setGridInstance] = useState<any>();
  const onSearch = (text: string) =>{
    console.log(gridInstance);
    
  }

  useEffect(() => {
    if (estabelecimento.id) {
      service.getUsuarios(estabelecimento.id).then(response => {
        setDataSource(response);
        setDataSourceCopy(response);
      }).catch(error => {
        toast.error(error.mensagemUsuario);
      });
    }
  }, [estabelecimento]);


  const renderCell = (element: any) => {
    if (element.value === "S") {
      return <div className='rounded-full h-6 text-center p-1' style={{ backgroundColor: colors.success }}><span className='font-bold text-white'>ATIVO</span></div>
    }

    else if (element.value === "N") {
      return <div className='rounded-full  h-6 text-center p-1' style={{ backgroundColor: colors.error }}><span className='font-bold text-white'>INATIVO</span></div>
    }

    else if (element.columnIndex === 2) {
      let cargo = '';
      if (element.value === Cargo.MASTER) {
        cargo = 'MASTER';
      } else if (element.value === Cargo.ADMIN) {
        cargo = 'ADMIN';
      } else if (element.value === Cargo.CAIXA) {
        cargo = 'CAIXA';
      } else if (element.value === Cargo.ESTOQUISTA) {
        cargo = 'ESTOQUISTA';
      } else if (element.value === Cargo.GERENTE) {
        cargo = 'GERENTE';
      } else {
        cargo = 'REVENDA';
      }
      return <span className='font-bold' style={{ color: colors.info }}>{cargo}</span>
    }

    else {
      return <div className='flex items-center justify-center'>
        {element.data.status === 'N' ?
          <i className='text-2xl cursor-pointer mr-6' style={{ color: colors.success }}><FaPlayCircle id='buttonAtive' className='' title='Ativar usuário' onClick={() => showPopupConfirmeAction(element.data, 1)} /></i>
          :
          <i className='text-2xl cursor-pointer mr-6' style={{ color: colors.error }}><FaPauseCircle id='buttonInative' className='' title='Desativar usuário' onClick={() => showPopupConfirmeAction(element.data, 2)} /></i>
        }
        <i className='text-2xl cursor-pointer' style={{ color: colors.primary }}><FaPenSquare id='buttonAction' className='' title='Editar usuário' onClick={() => onEdit(element.data)} /></i>
      </div>
    }
  }

  const columns = new Array<ColumnsDataGridType>();
  columns.push({ dataField: 'codigo', caption: 'CÓDIGO', alignment: 'center', dataType: 'string', width: 70, cssClass: 'font-bold column-1', });
  columns.push({ dataField: 'nome', caption: 'NOME', alignment: 'left', dataType: 'string', cssClass: 'font-bold' });
  columns.push({ dataField: 'cargo', caption: 'CARGO', alignment: 'center', dataType: '', format: { type: 'fixedPoint', precision: 3 }, width: 100, styleCell: renderCell, allowSearch:false });
  columns.push({ dataField: 'email', caption: 'E-MAIL', alignment: 'left', dataType: 'string', cssClass: 'font-bold column-2', width: 220 });
  columns.push({ dataField: 'dataCriacao', caption: 'DATA CRIAÇÃO', alignment: 'center', dataType: 'date', width: 110, allowSearch:false });
  columns.push({ dataField: 'telefone', caption: 'TELEFONE', alignment: 'center', dataType: 'date', width: 120, allowSearch:false });
  columns.push({ dataField: 'acesso', caption: 'ACESSO', alignment: 'center', dataType: 'date', width: 100, allowSearch:false });
  columns.push({ dataField: 'status', caption: 'STATUS', alignment: 'center', dataType: 'number', width: 100, styleCell: renderCell, allowSearch:false });
  columns.push({ dataField: '', caption: '', alignment: 'center', dataType: '', width: 100, styleCell: renderCell, allowSearch:false });

  const closeModal = () => {
    setShowModal(false);
  }

  const search = (text: string) => {
    console.log(gridInstance);
    gridInstance?.option('searchPanel', {visible:false, text:text});
    // if (nome !== '') {
    //   let usuarios = dataSourceCopy.filter(produto => { return produto.nome.includes(nome) });
    //   setDataSource(usuarios);
    // } else {
    //   setDataSource(dataSourceCopy);
    // }

  }

  const showPopupConfirmeAction = (user: any, tipo: number) => {
    setUser(user);
    (tipo === 1 ? setShowPopupAtivo(true) : setShowPopupInativo(true));
  }

  const onAtive = (user: any) => {
    service.setStatus(user.id, "S").then(response => {
      let data = _.map(dataSourceCopy, (value) => {
        if (user.id === value.id) {
          value.status = 'S';
        }
        return value;
      });
      setDataSource(data);
      setShowPopupAtivo(false);
    }).catch(error => {
      setShowPopupAtivo(false);
      toast.error(error.mensagemUsuario);
    });
  }

  const onInative = (user: any) => {
    service.setStatus(user.id, "N").then(response => {
      let data = _.map(dataSourceCopy, (value) => {
        if (user.id === value.id) {
          value.status = 'N';
        }
        return value;
      });
      setDataSource(data);
      setShowPopupInativo(false);
    }).catch(error => {
      setShowPopupInativo(false);
      toast.error(error.mensagemUsuario);
    });
  }

  const onNovo = () => {
    setShowModal(true);
    setUser(initialState);
  }

  const onEdit = (user: any) => {
    setUser(user);
    setShowModal(true);
  }

  const onSave = (form: FieldValues) => {
    console.log(user.password, confirmePass);
    if(user.password.length>6){
      toast.error(UtilsGeral.getEmogi()[3]+'A senha deve ter 6 caracteres ou mais');
      return
    }
    else if(user.password !== confirmePass){
      toast.error(UtilsGeral.getEmogi()[3]+'A senha que vc digitou não são iguais');
      return
    }
    else if(user.cpf.length>0 && !UtilsValid.isValidCPF(user.cpf)){
      toast.error(UtilsGeral.getEmogi()[3]+'Você digitou um CPF inválido');
      return
    }

    service.save(user).then(response=>{
      let array = dataSourceCopy;
      array.push(response);
      setDataSource(array);
      setDataSourceCopy(array);
    }).catch(error => {
      toast.error(UtilsGeral.getEmogi()[3]+error.mensagemUsuario);
    });

  }


  // =====================tabs do formulario=======================================
  const tabs = (tab: string) => {
    if (tab === 'tab1') {
      return <div className=''>

        <div className='mb-5 text-left'>
          <div className='mb-5'>
            <p className='font-bold text-blue-900' style={{ color: (title === 'dark' ? colors.textLabel : colors.primary) + ' !important' }}>Principais</p>
            <Divider tipo='horizontal' />
          </div>
          <InputMask className='w-2/12' label='CPF' mask={'999.999.999-99'}
            value={user.cpf}
            onChange={(e) => setUser({ ...user, cpf: e.target.value })}
          />
          <div className='flex mt-3'>
            <InputDefault className='w-4/12 mr-6' label='Nome' type='text'
              value={user.nome}
              onChange={(e) => setUser({ ...user, nome: e.target.value })}
              required
            />
            <div className='w-3/12'>
              <InputSelectDefault label='Cargo'
                options={cargos}
                defaultValue={cargos[2]}
                value={_.find(cargos, { 'value': user.cargo })}
                onChange={(e) => setUser({ ...user, cargo: e.target.value })}
                isSearchable={false}
              />
            </div>
          </div>
        </div>

        <div className='mb-7 text-left'>
          <p className='font-bold text-blue-900' style={{ color: (title === 'dark' ? colors.textLabel : colors.primary) + ' !important' }}>Contato</p>
          <Divider tipo='horizontal' />
          <InputMask className='w-3/12'
            label='Celular'
            mask={'(99) 9.9999-9999'}
            value={user.celular}
            onChange={(e) => setUser({ ...user, celular: e.target.value })} />
        </div>

        <div className='text-left'>
          <p className='font-bold text-blue-900' style={{ color: (title === 'dark' ? colors.textLabel : colors.primary) + ' !important' }}>Acesso</p>
          <Divider tipo='horizontal' />
          <InputDefault className='w-5/12 mr-6' label='Email' type='email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <div className='flex mt-3'>
            <InputDefault className='w-2/12 mr-6' label='Senha' type='password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            <InputDefault className='w-2/12 mr-6' label='Confirme senha' type='password'
              value={confirmePass}
              onChange={(e) => SetConfirmePass(e.target.value)}
              required
            />
          </div>
        </div>

      </div>
    } else {
      return <div>
        <div className='text-left'>
          <p className='font-bold text-blue-900' >Principais</p>
          <Divider tipo='horizontal' />
        </div>
        <div className='p-5'>
          <InputCheck label='Estoque' css='mb-3' />
          <InputCheck label='Financeiro' css='mb-3' />
          <InputCheck label='Venda' css='mb-3' />
          <InputCheck label='Configurações' css='mb-3' />
          <InputCheck label='Usuários' />
        </div>
      </div>
    }
  }
  // =========================the end================================

  return <Container className='card-local'>
    <div className='flex p-2 card-local'>
      <div className='w-11/12'>
        <InputSearch onChange={(e) => search(e.currentTarget.value)} autoFocus />
      </div>
      <div className='w-1/12 mr-2'>
        <ButtonIcon label="Novo" icon={<FaPlus />} width={'100%'} onClick={onNovo} />
      </div>
    </div>
    <TableContainer>
      <DataGridDefault
        columns={columns}
        dataSource={dataSource}
        allowSorting={false}
        paginar={false}
        // showRowLines
        rowAlternationEnabled
        showBorders
        showColumnLines
        hoverStateEnabled
        isSelectRow
        onInitialized={(e)=>setGridInstance(e.component)}
      />
    </TableContainer>

    {/* =============modal =========================== */}
    <ModalDefault
      isOpen={showModal}
      title='FICHA DO USUÁRIO'
      onRequestClose={closeModal}
      width='75%'
      margin='1%'
      height='95%'
      left='12%'
    >
      <FormContainer onSubmit={handleSubmit(onSave)}>
        <div className='p-2'>
          <TabsDefault className='w-6/12' tabs={[{ value: 'tab1', label: 'Informações' }, { value: 'tab2', label: 'Permissões' }]} onSelectTab={tabs} />
          {user.id ? <div className='rounded-full w-28 h-10 text-center p-2 font-bold text-white absolute top-16'
            style={{ backgroundColor: user.status === 'S' ? colors.success : colors.error, left: 'calc(100% - 130px)' }}
          >
            <p>{user.status === 'S' ? 'ATIVO' : 'INATIVO'}</p>
          </div>
            :
            ""
          }
          <footer className=''>
            <div className="flex justify-end" style={{ bottom: 25, right: 15, position: 'absolute' }}>
              <ButtonBase label="CANCELAR" model="btn_line" className="primary-color mr-5  w-32" size="large" onClick={() => setShowModal(false)} />
              <ButtonIcon className="mr-3" label="SALVAR" icon={<FaSave />} width={'50%'} type='submit' />
            </div>
          </footer>
        </div>
      </FormContainer>
    </ModalDefault>

    <DialogPopupConfirme title="Confirme" isOpen={showPoupInativo} onRequestClose={() => setShowPopupInativo(false)} onClickSim={() => onInative(user)}>
      <p className="font-bold text-2xl">Tem certeza que deseja bloquear o usuário? </p>
      <p className="font-bold" style={{ color: colors.error }}>O mesmo não poderá acessar o sistema até ser liberado !</p>
    </DialogPopupConfirme>

    <DialogPopupConfirme title="Confirme" isOpen={showPoupAtivo} onRequestClose={() => setShowPopupAtivo(false)} onClickSim={() => onAtive(user)}>
      <p className="font-bold text-2xl">Tem certeza que deseja liberar o usuário? </p>
      <p className="font-bold" style={{ color: colors.error }}>O mesmo poderá acessar o sistema normalmente!</p>
    </DialogPopupConfirme>

  </Container>
}
export default Usuario;