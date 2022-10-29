import React, { useContext, useEffect,  useState  } from "react"
import { FaAddressCard } from "react-icons/fa";
import {ThemeContext} from 'styled-components';
import { InputNumber, InputMask, InputIcon, InputDefault, DataGridDefault } from "../../../../components";
import { Container } from './styles';
import {ColumnsDataGridType} from '../../../.././components/types';


/**
*@Author
*@Issue
*/

function Estabelecimento(){
  const theme = useContext(ThemeContext);
  const [mask, setMask] = useState<string>('999.999.999-99');
  const columns = new Array<ColumnsDataGridType>();
  columns.push({dataField:'test', caption:'Luta1', alignment:'center', dataType:''});
  columns.push({dataField:'test', caption:'Luta2', alignment:'center', dataType:''});
  columns.push({dataField:'test', caption:'Luta3', alignment:'center', dataType:''});
  columns.push({dataField:'test', caption:'Luta4', alignment:'center', dataType:''});
  columns.push({dataField:'test', caption:'Luta5', alignment:'center', dataType:''});

  return <Container className="p-10">
          <InputNumber label="number" casaDecimal={2} fixedZeroFinal  separadorDecimal="," prefixo="" placeholder={'sdsdsas'}></InputNumber>
          <InputMask label="teste" mask={mask}></InputMask>
          <InputIcon label="teste icon" icon={<FaAddressCard/>} placeholder={'sdsdsas'}></InputIcon>
          <InputDefault label="ds" type="asds" placeholder="sdsds"></InputDefault>
          <DataGridDefault columns={columns} dataSource={[]}></DataGridDefault>
         </Container>;
}
export default Estabelecimento;