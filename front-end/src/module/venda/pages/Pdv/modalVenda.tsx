import React, { useState, useContext } from 'react';
import { ButtonBase, ButtonIcon, DataGridDefault, InputSearch, ModalDefault } from "../../../../components";
import { UsageState } from "webpack";
import { FaAccusoft, FaSearch } from 'react-icons/fa';
import { ColumnsDataGridType } from '../../../../components/types';
import _ from 'lodash';
import { TableProduto } from './styles';
import { ThemeContext } from 'styled-components';

// import { Container } from './styles';
interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const ModalVenda: React.FC<ModalProps> = (props) => {

  const theme = useContext(ThemeContext);

  const eventClose = () => {
    props.closeModal();
  }
  const columns = new Array<ColumnsDataGridType>();
  columns.push({ dataField: 'numero', caption: 'NÚMERO', alignment: 'center', dataType: '', width: 150, cssClass: 'font-bold column-1' });
  columns.push({ dataField: 'dataVenda', caption: 'DATA VENDA', alignment: 'center', dataType: 'date', cssClass: 'font-bold', allowSearch: false});
  columns.push({ dataField: 'bruto', caption: 'BRUTO', alignment: 'right', dataType: 'number', cssClass: 'font-bold', format: { type: 'fixedPoint', precision: 2 }});
  columns.push({ dataField: 'taxa', caption: 'TAXA', alignment: 'right', dataType: 'number', cssClass: 'font-bold column-2' , format: { type: 'fixedPoint', precision: 2 }});
  columns.push({ dataField: 'desconto', caption: 'DESCONTO', alignment: 'right', dataType: 'number',  format: { type: 'fixedPoint', precision: 2 }});
  columns.push({ dataField: 'liquido', caption: 'LIQUIDO', alignment: 'right', dataType: 'number', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }});
  columns.push({ dataField: '', caption: 'STATUS', alignment: 'center', dataType: 'number', format: { type: 'fixedPoint', precision: 2 }});
  columns.push({ dataField: '', caption: '', alignment: 'center', dataType: '',  format: { type: 'fixedPoint', precision: 2 }, width: 80 });

  const data = [
    { numero: '1', dataVenda: '12/08/2022', bruto: 250.00, taxa: 10.00, liquido: 1502, desconto: 12.00},
    { numero: '2', dataVenda: '12/08/2022', bruto: 35, taxa: 10, liquido: 1502, desconto: 1200 },
    { numero: '3', dataVenda: '12/08/2022', bruto: 25, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '4', dataVenda: '12/08/2022', bruto: 50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
    { numero: '1', dataVenda: '12/08/2022', bruto: 10.50, taxa: 10, liquido: 1502, desconto: 12},
  ]
  const [dataSource, setDataSource] = useState(data);
  const [dataSourceCopy, setDataSourceCopy] = useState(dataSource);

  const search = (desc: string) => {
    if (desc !== '') {
      let produtos = dataSourceCopy.filter(produto => { return produto.numero.includes(desc) });
      setDataSource(produtos);
    } else {
      setDataSource(dataSourceCopy);
    }
  }

  const eventCaptureTecla = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    event.key === "Escape" ? eventClose() : null;
  }

  return <ModalDefault key={"#modalvenda"} title="LISTA DAS VENDAS" isOpen={props.showModal} onRequestClose={eventClose}>
    <div className='p-3'>
      <div className='w-full p-2 card-local flex '>
        <div className='w-3/6'>
          <InputSearch onChange={(e) => search(e.currentTarget.value)} autoFocus onKeyDownCapture={eventCaptureTecla}/>
        </div>
        <div className='w-3/6 flex justify-end'>
          {/* <ButtonIcon icon={<FaAccusoft/>} label='AUTORIZADA' size='mini' className="primary-color" style={{background: theme.colors.success}}></ButtonIcon> */}
          <ButtonBase label='AUTORIZADA' model='btn_base' className='green-color mr-5' size='large' />
          <i className='mr-2'></i>
          <ButtonBase label='PENDENTE' model='btn_base' className='orange-color mr-5'  size='large'/>
        </div>
      </div>
      <TableProduto>
        <DataGridDefault
          columns={columns}
          dataSource={dataSource}
          allowSorting={false}
          paginar={false}
          showRowLines
          showBorders
          // showColumnLines
          hoverStateEnabled
          isSelectRow
        />
      </TableProduto>
    </div>

  </ModalDefault>;
}

export default ModalVenda;