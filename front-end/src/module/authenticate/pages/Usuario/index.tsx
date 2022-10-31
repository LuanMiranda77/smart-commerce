import _ from 'lodash';
import { useContext, useState } from 'react';
import { FaPauseCircle, FaPenSquare, FaPlayCircle, FaPlus, FaSave } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
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
import { Container, TableContainer } from './styles';
import { cargos } from './__mocks__';

/**
*@Author
*@Issue
*/

function Usuario() {

  const { colors, title } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<any>();
  const [showPoupAtivo, setShowPopupAtivo] = useState(false);
  const [showPoupInativo, setShowPopupInativo] = useState(false);


  const renderCell = (element: any) => {
    if (element.value === "S") {
      return <div className='rounded-full h-6 text-center p-1'style={{ backgroundColor: colors.success }}><span className='font-bold text-white'>ATIVO</span></div>
    }
    else if (element.value === "N") {
      return <div className='rounded-full  h-6 text-center p-1'style={{ backgroundColor: colors.error }}><span className='font-bold text-white'>INATIVO</span></div>
    }
    else {
      return <div className='flex items-center justify-center'>
        {element.data.status === 'N' ?
          <i className='text-2xl cursor-pointer mr-6' style={{ color: colors.success }}><FaPlayCircle id='buttonAtive' className='' title='Ativar usuário' onClick={() => showPopupConfirmeAction(element.data,1)} /></i>
          :
          <i className='text-2xl cursor-pointer mr-6' style={{ color: colors.error }}><FaPauseCircle id='buttonInative' className='' title='Desativar usuário' onClick={() => showPopupConfirmeAction(element.data,2)} /></i>
        }
        <i className='text-2xl cursor-pointer' style={{ color: colors.primary }}><FaPenSquare id='buttonAction' className='' title='Editar usuário' onClick={() => onEdit(element.data)} /></i>
      </div>
    }
  }

  const columns = new Array<ColumnsDataGridType>();
  columns.push({ dataField: 'codigo', caption: 'CÓDIGO', alignment: 'left', dataType: 'string', width: 70, cssClass: 'font-bold column-1' });
  columns.push({ dataField: 'nome', caption: 'NOME', alignment: 'left', dataType: 'string', cssClass: 'font-bold' });
  columns.push({ dataField: 'cargo', caption: 'CARGO', alignment: 'center', dataType: 'number', format: { type: 'fixedPoint', precision: 3 }, width: 150 });
  columns.push({ dataField: 'email', caption: 'E-MAIL', alignment: 'left', dataType: 'string', cssClass: 'font-bold column-2', width: 250 });
  columns.push({ dataField: 'dataCriacao', caption: 'DATA CRIAÇÃO', alignment: 'center', dataType: 'date', width: 110 });
  columns.push({ dataField: 'telefone', caption: 'TELEFONE', alignment: 'center', dataType: 'date', width: 120 });
  columns.push({ dataField: 'acesso', caption: 'ACESSO', alignment: 'center', dataType: 'date', width: 110 });
  columns.push({ dataField: 'status', caption: 'STATUS', alignment: 'center', dataType: 'number', width: 100, styleCell: renderCell });
  columns.push({ dataField: '', caption: '', alignment: 'center', dataType: '', width: 100, styleCell: renderCell });

  const data = [
    { codigo: 1, nome: 'produto1', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'N', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 2, nome: 'tudo', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'N', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 3, nome: 'tudynho', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'N', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 4, nome: 'luto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'N', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 5, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'N', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 6, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'N', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 7, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 8, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 9, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 10, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 11, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 12, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 13, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 14, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 15, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 16, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 17, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 18, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 19, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 20, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 21, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 22, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 23, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 24, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 25, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 26, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
    { codigo: 27, nome: 'produto', cargo: 'CAIXA', email: 'luanmirqanda@gmail.com', status: 'S', dataCriacao: '12/12/2022', acesso: '12/01/2022', telefone: '(83) 9. 99638-6694' },
  ]
  const [dataSource, setDataSource] = useState(data);
  const [dataSourceCopy, setDataSourceCopy] = useState(dataSource);

  const search = (nome: string) => {
    if (nome !== '') {
      let usuarios = dataSourceCopy.filter(produto => { return produto.nome.includes(nome) });
      setDataSource(usuarios);
    } else {
      setDataSource(dataSourceCopy);
    }
  }

  const onEdit = (user: any) => {
    console.log(user);
    setUser(user);
    setShowModal(true);

  }

  const showPopupConfirmeAction = (user: any, tipo: number) => {
    setUser(user);
    (tipo === 1 ? setShowPopupAtivo(true):setShowPopupInativo(true));

  }

  const onAtive = (user: any) => {
    let data = _.map(dataSourceCopy, (value) => {
      if (user.codigo === value.codigo) {
        value.status = 'S';
      }
      return value;
    });
    setDataSource(data);
    setShowPopupAtivo(false);
  }

  const onInative = (user: any) => {
    let data = _.map(dataSourceCopy, (value) => {
      if (user.codigo === value.codigo) {
        value.status = 'N';
      }
      return value;
    });
    setDataSource(data);
    setShowPopupInativo(false);
  }


  const tabs = (tab: string) => {
    if (tab === 'tab1') {
      return <div className=''>

        <div className='mb-5 text-left'>
          <div className='mb-5'>
            <p className='font-bold text-blue-900' style={{ color: (title === 'dark' ? colors.textLabel : colors.primary) + ' !important' }}>Principais</p>
            <Divider tipo='horizontal' />
          </div>
          <div className='flex items-center justify-between'>
            <InputMask className='w-2/12' label='CPF' mask={'999.999.999-99'} />
            <div className='rounded-full w-28 h-10 text-center p-2 font-bold text-white' style={{ backgroundColor: user.status === 'S' ? colors.success : colors.error }} >
              <p>{user.status === 'S' ? 'ATIVO' : 'INATIVO'}</p>
            </div>
          </div>
          <div className='flex mt-3'>
            <InputDefault className='w-4/12 mr-6' label='Nome' type='text' />
            <div className='w-3/12'>
              <InputSelectDefault label='Cargo' options={cargos} defaultValue={cargos[2]} />
            </div>
          </div>
        </div>

        <div className='mb-7 text-left'>
          <p className='font-bold text-blue-900' style={{ color: (title === 'dark' ? colors.textLabel : colors.primary) + ' !important' }}>Contato</p>
          <Divider tipo='horizontal' />
          <InputMask className='w-2/12' label='Telefone' mask={'(99) 9.9999-9999'} />
        </div>

        <div className='text-left'>
          <p className='font-bold text-blue-900' style={{ color: (title === 'dark' ? colors.textLabel : colors.primary) + ' !important' }}>Acesso</p>
          <Divider tipo='horizontal' />
          <InputDefault className='w-5/12 mr-6' label='Email' type='email' />
          <div className='flex mt-3'>
            <InputDefault className='w-2/12 mr-6' label='Email' type='password' />
            <InputDefault className='w-2/12 mr-6' label='Email' type='password' />
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
          <InputCheck label='Estoque' classN='mb-3' />
          <InputCheck label='Financeiro' classN='mb-3' />
          <InputCheck label='Venda' classN='mb-3' />
          <InputCheck label='Configurações' classN='mb-3' />
          <InputCheck label='Usuários' />
        </div>
      </div>
    }
  }

  return <Container className='card-local'>
    <div className='flex p-2 card-local'>
      <div className='w-11/12'>
        <InputSearch onChange={(e) => search(e.currentTarget.value)} autoFocus />
      </div>
      <div className='w-1/12 mr-2'>
        <ButtonIcon label="Novo" icon={<FaPlus />} width={'100%'} onClick={() => setShowModal(true)} />
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
      />
    </TableContainer>
    <ModalDefault
      isOpen={showModal}
      title='Cadastro de usuario'
      onRequestClose={() => setShowModal(false)}
      width='75%'
      margin='1%'
      height='95%'
      left='12%'
    >
      <div className='p-2'>

        <TabsDefault className='w-6/12' tabs={[{ value: 'tab1', label: 'Informações' }, { value: 'tab2', label: 'Permissões' }]} onSelectTab={tabs} />

        <footer className=''>
          <div className="flex justify-end" style={{ bottom: 25, right: 15, position: 'absolute' }}>
            <ButtonBase label="CANCELAR" model="btn_line" className="primary-color mr-5  w-32" size="large" onClick={() => setShowModal(false)} />
            <ButtonIcon className="mr-3" label="SALVAR" icon={<FaSave />} width={'50%'} />
          </div>
        </footer>
      </div>

    </ModalDefault>

    <DialogPopupConfirme title="Confirme" isOpen={showPoupInativo} onRequestClose={() => setShowPopupInativo(false)} onClickSim={()=>onInative(user)}>
      <p className="font-bold text-2xl">Tem certeza que deseja bloquear o usuário? </p>
      <p className="font-bold" style={{ color: colors.error }}>O mesmo não poderá acessar o sistema até ser liberado !</p>
    </DialogPopupConfirme>

    <DialogPopupConfirme title="Confirme" isOpen={showPoupAtivo} onRequestClose={() => setShowPopupAtivo(false)} onClickSim={()=>onAtive(user)}>
      <p className="font-bold text-2xl">Tem certeza que deseja liberar o usuário? </p>
      <p className="font-bold" style={{ color: colors.error }}>O mesmo poderá acessar o sistema normalmente!</p>
    </DialogPopupConfirme>

  </Container>
}
export default Usuario;