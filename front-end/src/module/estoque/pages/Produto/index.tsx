import _ from 'lodash';
import { useContext, useState } from 'react';
import { FaPauseCircle, FaPenSquare, FaPlayCircle, FaPlus, FaPlusSquare, FaSave } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import {
  ButtonBase,
  ButtonIcon,
  DataGridDefault,
  DialogPopupConfirme,
  Divider,
  InputCheck,
  InputDate,
  InputDefault,
  InputMask,
  InputMook,
  InputNumber,
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

function Produto() {

  const { colors, title } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [produto, setProduto] = useState<any>();
  const [showPoupAtivo, setShowPopupAtivo] = useState(false);
  const [showPoupInativo, setShowPopupInativo] = useState(false);


  const renderCell = (element: any) => {
    if (element.value === "S") {
      return <div className='rounded-full h-6 text-center p-1' style={{ backgroundColor: colors.success }}><span className='font-bold text-white'>ATIVO</span></div>
    }
    else if (element.value === "N") {
      return <div className='rounded-full  h-6 text-center p-1' style={{ backgroundColor: colors.error }}><span className='font-bold text-white'>INATIVO</span></div>
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
  columns.push({ dataField: 'codigo', caption: 'CÓDIGO', alignment: 'center', dataType: 'string', width: 70, cssClass: 'font-bold column-1' });
  columns.push({ dataField: 'codBarras', caption: 'Cod. BARRAS', alignment: 'center', dataType: 'string', cssClass: 'font-bold', width: 120 });
  columns.push({ dataField: 'descricao', caption: 'DESCRIÇÃO', alignment: 'left', dataType: 'string', cssClass: 'font-bold' });
  columns.push({ dataField: 'medida', caption: 'MEDIDA', alignment: 'center', dataType: 'string', width: 80 });
  columns.push({ dataField: 'estoque', caption: 'ESTOQUE', alignment: 'center', dataType: 'number', format: { type: 'fixedPoint', precision: 3 }, width: 110 });
  columns.push({ dataField: 'precoCusto', caption: 'P. CUSTO', alignment: 'center', dataType: 'number', format: { type: 'fixedPoint', precision: 3 }, cssClass: 'font-bold', width: 100 });
  columns.push({ dataField: 'precoVarejo', caption: 'P. VAREJO', alignment: 'center', dataType: 'number', format: { type: 'fixedPoint', precision: 3 }, width: 100 });
  columns.push({ dataField: 'precoAtacado', caption: 'P. ATACADO', alignment: 'center', dataType: 'number', format: { type: 'fixedPoint', precision: 3 }, cssClass: 'font-bold column-2', width: 100 });
  columns.push({ dataField: 'status', caption: 'STATUS', alignment: 'center', dataType: 'number', width: 100, styleCell: renderCell });
  columns.push({ dataField: '', caption: '', alignment: 'center', dataType: '', width: 100, styleCell: renderCell });

  const data = [
    { codigo: '1', codBarras: '123456789125', descricao: 'produto1', medida: 'UND', estoque: 1502, status: 'N', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '2', codBarras: '123456789123', descricao: 'tudo', medida: 'UND', estoque: 1502, status: 'N', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '3', codBarras: '123456789123', descricao: 'tudynho', medida: 'UND', estoque: 1502, status: 'N', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '4', codBarras: '123456789123', descricao: 'luto', medida: 'UND', estoque: 1502, status: 'N', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '5', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'N', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '6', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'N', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '7', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '8', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '9', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '10', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '11', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '12', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '13', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '14', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '15', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '16', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '17', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '18', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '19', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '20', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '21', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '22', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '23', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '24', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '25', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '26', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
    { codigo: '27', codBarras: '123456789123', descricao: 'produto', medida: 'UND', estoque: 1502, status: 'S', precoCusto: 15, precoVarejo: 25.23, precoAtacado: 22.30 },
  ]
  const [dataSource, setDataSource] = useState(data);
  const [dataSourceCopy, setDataSourceCopy] = useState(dataSource);

  const search = (data: string) => {
    if (data !== '') {
      let notas = dataSourceCopy;
      if (!isNaN(parseFloat(data)) && isFinite(parseFloat(data))) {
        if (data.length < 12) {
          notas = dataSourceCopy.filter(produto => { return produto.codigo.includes(data) });
        } else {
          notas = dataSourceCopy.filter(produto => { return produto.codBarras.includes(data) });
        }
      } else {
        notas = dataSourceCopy.filter(produto => { return produto.descricao.includes(data.toUpperCase()) });
      }
      setDataSource(notas);
    } else {
      setDataSource(dataSourceCopy);
    }
  }

  const onEdit = (produto: any) => {
    console.log(produto);
    setProduto(produto);
    setShowModal(true);

  }

  const showPopupConfirmeAction = (produto: any, tipo: number) => {
    setProduto(produto);
    (tipo === 1 ? setShowPopupAtivo(true) : setShowPopupInativo(true));

  }

  const onAtive = (produto: any) => {
    let data = _.map(dataSourceCopy, (value) => {
      if (produto.codigo === value.codigo) {
        value.status = 'S';
      }
      return value;
    });
    setDataSource(data);
    setShowPopupAtivo(false);
  }

  const onInative = (produto: any) => {
    let data = _.map(dataSourceCopy, (value) => {
      if (produto.codigo === value.codigo) {
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

          <div className='flex items-center'>
            <InputDate label='Data Vencimento'/>
            <InputNumber className='font-bold' label='MarkUp' prefixo='' casaDecimal={2} separadorDecimal=',' fixedZeroFinal />
          </div>
        <div className='mb-5 text-left'>
        </div>

        <div className='mb-7 text-left'>
          
        </div>

        <div className='text-left'>
         
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
      <div className='w-1/12 mr-5'>
        <ButtonIcon label="Novo" icon={<FaPlus />} width={'100%'} onClick={() => setShowModal(true)} />
      </div>
      <div className='w-2/12'>
        <ButtonIcon label="Duplicar item" icon={<FaPlus />} width={'100%'} onClick={() => setShowModal(true)} color={colors.warning} />
      </div>
    </div>
    <TableContainer>
      <DataGridDefault
        columns={columns}
        dataSource={dataSource}
        allowSorting
        paginar={false}
        // showRowLines
        rowAlternationEnabled
        showBorders
        showColumnLines
        hoverStateEnabled
        isSelectRow
        moduloSeletion='single'
      />
    </TableContainer>
    <ModalDefault
      isOpen={showModal}
      title='FICHA DO PRODUTO'
      onRequestClose={() => setShowModal(false)}
      width='98%'
      margin='1%'
      height='95%'
      left='0%'
    >
      <div className='p-1 flex'>

        <div id='lado-left' className='w-4/12'>
          <InputMook className='w-4/12 mb-5' label='Código' type='text' value={'01'} />
          <InputDefault className='w-6/12 mb-5' label='Código de Barras' type='number' />
          <InputDefault className='mb-5' label='Descrição' type='text' />
          <div className='w-8/12 mb-5 flex justify-between items-center'>
            <div className='w-full mr-2'>
              <InputSelectDefault label='Categoria' options={[]} placeholder='Selecione a categoria' isClearable isSearchable />
            </div>
            <FaPlusSquare className='mt-6' style={{ fontSize: '25px', color: title === 'dark' ? colors.white : colors.primary }} />
          </div>

          <div id='dt-importantes'>
            <div className='text-left font-bold' style={{ color: title === 'dark' ? colors.white : colors.primary }}>
              <p>Datas importantes</p>
              <Divider tipo='horizontal' className='' />
            </div>
            <div className='h-40 flex'>
              <div className='font-bold text-left p-2'>
                <p style={{ color: title === 'dark' ? colors.white : colors.success }}>Criado em</p>
                <p style={{ color: title === 'dark' ? colors.white : colors.primary }}>12/12/2021 19:00</p>
              </div>
              <Divider tipo='vertical' className='ml-4 mr-4' />
              <div className='font-bold text-left p-2'>
                <p style={{ color: title === 'dark' ? colors.white : colors.warning }}>Ultima atualização</p>
                <p style={{ color: title === 'dark' ? colors.white : colors.primary }}>12/12/2021 19:00</p>
              </div>
            </div>

          </div>
        </div>

        <Divider tipo='vertical' className='ml-4 mr-4' />

        <div id='lado-right' className='w-8/12'>
          <TabsDefault tabs={
            [
              { value: 'tab1', label: 'Estoque' },
              { value: 'tab2', label: 'Promoções' },
              { value: 'tab3', label: 'Movimentação' },
              { value: 'tab4', label: 'Impostos' },
            ]
          }
            onSelectTab={tabs}
          />
        </div>

      </div>

      <footer className=''>
        <div className="flex justify-end" style={{ bottom: 25, right: 15, position: 'absolute' }}>
          <ButtonBase label="CANCELAR" model="btn_line" className="primary-color mr-5  w-32" size="large" onClick={() => setShowModal(false)} />
          <ButtonIcon className="mr-3" label="SALVAR" icon={<FaSave />} width={'50%'} />
        </div>
      </footer>

    </ModalDefault>

    <DialogPopupConfirme title="Confirme" isOpen={showPoupInativo} onRequestClose={() => setShowPopupInativo(false)} onClickSim={() => onInative(produto)}>
      <p className="font-bold text-2xl">Tem certeza que deseja bloquear o usuário? </p>
      <p className="font-bold" style={{ color: colors.error }}>O mesmo não poderá acessar o sistema até ser liberado !</p>
    </DialogPopupConfirme>

    <DialogPopupConfirme title="Confirme" isOpen={showPoupAtivo} onRequestClose={() => setShowPopupAtivo(false)} onClickSim={() => onAtive(produto)}>
      <p className="font-bold text-2xl">Tem certeza que deseja liberar o usuário? </p>
      <p className="font-bold" style={{ color: colors.error }}>O mesmo poderá acessar o sistema normalmente!</p>
    </DialogPopupConfirme>

  </Container>

}
export default Produto;