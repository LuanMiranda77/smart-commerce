import { useContext, useState } from 'react';
import { FaPlus, FaSave } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import {
  ButtonBase,
  ButtonIcon,
  DataGridDefault,
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

/**
*@Author
*@Issue
*/

function Usuario() {

  const {colors, title} = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  const columns = new Array<ColumnsDataGridType>();
  columns.push({ dataField: 'item', caption: 'ITEM', alignment: 'center', dataType: '', width: 70, cssClass: 'font-bold column-1' });
  columns.push({ dataField: 'codigo', caption: 'Código', alignment: '', dataType: '', width: 70, cssClass: 'font-bold', visible: false });
  columns.push({ dataField: 'descricao', caption: 'DESCRIÇÃO', alignment: '', dataType: '', cssClass: 'font-bold column-2' });
  columns.push({ dataField: 'quantidade', caption: 'QUANTIDADE', alignment: 'center', dataType: 'number', allowSearch: false, format: { type: 'fixedPoint', precision: 3 }, width: 110 });
  columns.push({ dataField: 'valor', caption: 'VALOR', alignment: 'center', dataType: 'number', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 110 });
  columns.push({ dataField: 'desconto', caption: 'DESCONTO', alignment: 'center', dataType: 'number', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 110 });
  columns.push({ dataField: 'total', caption: 'TOTAL', alignment: 'right', dataType: 'number', cssClass: 'font-bold', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 150 });

  const data = [
    { item: 1, descricao: 'produto1', quantidade: 10.00, valor: 1502, desconto: 12.00, total: 32 },
    { item: 1, descricao: 'tudo', quantidade: 10, valor: 1502, desconto: 12, total: 32.00 },
    { item: 1, descricao: 'tudynho', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'luto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
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
  const [dataSource, setDataSource] = useState(data);
  const [dataSourceCopy, setDataSourceCopy] = useState(dataSource);

  const search = (desc: string) => {
    if (desc !== '') {
      let produtos = dataSourceCopy.filter(produto => { return produto.descricao.includes(desc) });
      setDataSource(produtos);
    } else {
      setDataSource(dataSourceCopy);
    }
  }

  const tabs = (tab: string) => {
    if (tab === 'tab1') {
      return <div className=''>

        <div className='mb-5 text-left'>
          <p className='font-bold text-blue-900' style={{color: (title === 'dark'? colors.textLabel:colors.primary)+' !important'}}>Principais</p>
          <Divider tipo='horizontal'/>
          <InputMask className='w-2/12' label='CPF' mask={'999.999.999-99'} />
          <div className='flex mt-3'>
            <InputDefault className='w-4/12 mr-6' label='Nome' type='text' />
            <div className='w-3/12'>
              <InputSelectDefault label='Cargo' options={[]} />
            </div>
          </div>
        </div>

        <div className='mb-7 text-left'>
          <p className='font-bold text-blue-900' style={{color: (title === 'dark'? colors.textLabel:colors.primary)+' !important'}}>Contato</p>
          <Divider tipo='horizontal'/>
          <InputMask className='w-2/12' label='Telefone' mask={'(99) 9.9999-9999'} />
        </div>

        <div className='text-left'>
          <p className='font-bold text-blue-900' style={{color: (title === 'dark'? colors.textLabel:colors.primary)+' !important'}}>Acesso</p>
          <Divider tipo='horizontal'/>
          <InputDefault className='w-5/12 mr-6' label='Email' type='email' />
          <div className='flex mt-3'>
            <InputDefault className='w-2/12 mr-6' label='Email' type='password' />
            <InputDefault className='w-2/12 mr-6' label='Email' type='password' />
          </div>
        </div>

      </div>
    } else{
      return <div>
        <div className='text-left'>
           <p className='font-bold text-blue-900' >Principais</p>
          <Divider tipo='horizontal'/>
        </div>
        <div className='p-5'>
          <InputCheck label='Estoque' classN='mb-3'/>
          <InputCheck label='Financeiro' classN='mb-3'/>
          <InputCheck label='Venda' classN='mb-3'/>
          <InputCheck label='Configurações' classN='mb-3'/>
          <InputCheck label='Usuários'/>
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
        showRowLines
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
        <TabsDefault tabs={[{ value: 'tab1', label: 'Informações' }, { value: 'tab2', label: 'Permissões' }]} onSelectTab={tabs} />
        <footer className=''>
            <div className="flex justify-end" style={{ bottom: 25, right: 15, position: 'absolute' }}>
              <ButtonBase label="CANCELAR" model="btn_line" className="primary-color mr-5  w-32" size="large" onClick={() => setShowModal(false)} />
              <ButtonIcon className="mr-3" label="SALVAR" icon={<FaSave />} width={'50%'} />
            </div>
          </footer>
      </div>

    </ModalDefault>
  </Container>
}
export default Usuario;