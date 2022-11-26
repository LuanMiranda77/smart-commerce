import { useContext, useState } from "react";
import { FaFileDownload, FaFileImport, FaFileSignature, FaFileUpload, FaFunnelDollar, FaPlus, FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

import { Column } from "devextreme-react/data-grid";
import _ from 'lodash';
import CountUp from 'react-countup';
import { toast } from "react-toastify";
import { ThemeContext } from 'styled-components';
import { ButtonBase, ButtonIcon, ButtonUpload, DataGridDefault, InputDate, InputDefault, InputMask, InputSearch, InputSelectDefault, ModalDefault } from "../../../../components";
import { ModalEntrada } from "./modalEntrada";
import { Body, Container, ContainerFiltro, ContainerTable } from './styles';
import { status, tiposFiltroData } from './__mooks';
import { colors } from "react-select/dist/declarations/src/theme";
import { NFeEntradaType, initialState } from "../../../../domain/types/nfe_entrada";
import { selectState } from "../../../../store/slices/menuUser.slice";
import { MdeService } from "../services/MdeService";
import { response } from "express";
import { DowloadService } from "../../../services/dowloadDoc";
import { UploadService } from "../../../services/uploadDoc";
import { selectStateEstab } from "../../../../store/slices/estabelecimento.slice";
import { useSelector } from "react-redux";


function Mde() {
  const estabelecimento = useSelector(selectStateEstab);
  const {title, colors} = useContext(ThemeContext);
  const [showModalEntrada, setShowModalEntrada] = useState(false);
  const [showModalFiltro, setShowModalFiltro] = useState(false);
  const [tamanhoIpuntCnpjCpf, setTamanhoIpuntCnpjCpf] = useState(0);
  const [tipoNota, setTipoNota] = useState(0);
  const [notaSelect, setNotaSelect] = useState<NFeEntradaType>(initialState);
  // href="./CarregadorArquivos1?c=<%= arq.getCodigo() %>&ct=<%= arq.getContentType() %>"

  const actionNota = (nota: any) => {
    let compra = nota.data
    if (compra.status === 'A') {
      // toast.success('Nota cancelada');
    } else if (compra.status === 'P') {
      // toast.success('Nota autorizada');
    } else {
      // toast.error('Não é possivel autorizar uma nota cancelada');
      return
    }
  }

  const renderCell = (element: any) => {
    if (element.value === "M") {
      return <span className='font-bold text-white' style={{ color: colors.success }}>MANIFESTA</span>
    } else if (element.value === "A") {
      return <span className='font-bold text-white' style={{ color: colors.error, fontSize: '12px' }}>A MANIFESTAR</span>
    } else if (element.value === "E") {
      return <span className='font-bold text-white' style={{ color: colors.warning, fontSize: '12px' }}>AVULSA</span>
    } else if (element.value === "S") {
      return <i className='text-lg cursor-pointer' style={{ color: colors.primary }}><FaRegCheckCircle className='ml-5' title='Nota incluida no sistema' /></i>
    } else if (element.value === "N") {
      return <i className='text-lg cursor-pointer' style={{ color: colors.error }}><FaRegTimesCircle id='buttonAction' className='ml-5' title='Nota não incluida no sistema' /></i>
    } else {
      return <i className='text-lg cursor-pointer' style={{ color: colors.primary }} onClick={() => setShowModalEntrada(true)}><FaFileImport id='buttonAction' className='ml-3' title='Realizar entrada da nota' /></i>
    }
  }

  const data = [
    { numero: '12368498', emissao: '11/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'CADA', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'A', manifesto: '12/05/2022', entrada: '', incluida: 'N' },
    { numero: '98984225', emissao: '31/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'KAKA D', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'A', manifesto: '12/05/2022', entrada: '', incluida: 'N' },
    { numero: '1154889', emissao: '21/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'A', manifesto: '12/05/2022', entrada: '', incluida: 'N' },
    { numero: '1245', emissao: '10/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'A', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '45687', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'A', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '697', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '1125', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'M', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
    { numero: '12368978', emissao: '01/05/2022', cnpj: '03.406.025/0001-35', fornecedor: 'LUZIA DO LINDO', vlrbruto: 1502, vlricms: 12, vlrdesconto: 32, vlrliquido: 1432, status: 'E', manifesto: '12/05/2022', entrada: '15/05/2022', incluida: 'S' },
  ];

  const [dataSource, setDataSource] = useState(data);
  const [dataSourceCopy, setDataSourceCopy] = useState(dataSource);
  const search = (desc: any) => {
    if (desc !== '') {
      let notas = dataSourceCopy;
      if (!isNaN(parseFloat(desc)) && isFinite(desc)) {
        notas = dataSourceCopy.filter(produto => { return produto.numero.includes(desc) });
      } else {
        notas = dataSourceCopy.filter(produto => { return produto.fornecedor.includes(desc.toUpperCase()) });
      }
      setDataSource(notas);
    } else {
      setDataSource(dataSourceCopy);
    }
  }

  const filterStatus = (status: string) => {
    if (status !== '') {
      let notas = dataSourceCopy;
      if (status === 'NE') {
        notas = dataSourceCopy.filter((e) => {
          if (e.entrada !== '') {
            return e;
          }
        });
      } else {
        notas = _.filter(dataSourceCopy, { "status": status });
      }
      setDataSource(notas);
    } else {
      setDataSource(dataSourceCopy);
    }
  }

  const onTesteCnpjCpf = (e: string) => {
    console.log(e);
    if (e !== undefined) {
      setTamanhoIpuntCnpjCpf(e.length);
    }
  };

  const onManifestar = () =>{
    if(!notaSelect){
      toast.error("Selecione uma nota para realizar o manifesto.");
      return
    }
    else if(notaSelect.status === "E"){
      toast.error("Nota de entrada avulsa não pode ser manifestada.");
      return
    }
    else if(notaSelect.status === "M"){
      toast.error("Nota já foi incluida não é possivel o manifesto.");
      return
    }
    if(estabelecimento.id){
      DowloadService.get('33220200074569000100550100003043831231851691','xml', estabelecimento.id);
    }

  }

  const uploadXml = (files: FileList | null) => {
    if(files){

      
      // var reader  = new FileReader();
      // reader.readAsDataURL(files[0]);

      // console.log(estabelecimento, Array.from(files));
      // UploadService.post(estabelecimento, Array.from(files))?.then(response=>{
      //   console.log(response);
      // })
      // .catch(err=>{console.error(err)});
    }
  };

  const onNovo = () => {
    setNotaSelect(initialState);
    setTipoNota(0);
    setShowModalEntrada(true);
  };

  return <Container className="card-local w-full h-full p-3 font-bold" style={{ backgroundColor: (title === 'dark' ? colors.tertiary : colors.white) }}>
    <header className="flex text-xl font-bold items-center justify-between mb-1 h-6" style={{ color: colors.primary }}>
      <div className="flex items-center justify-between" style={{ backgroundColor: (title === 'dark' ? colors.tertiary : colors.white), borderRadius: '8px' }}>
        <i className="mr-1"><FaFileUpload /></i>
        <label htmlFor="">Notas de entrada</label>
      </div>
      <div className="text-sm text-center">
        <b className="mr-2">Certificado: fskksiiskkaii</b>
        <b style={{ color: colors.error }}>Vencimento:12/05/2022</b>
      </div>
      <div>
        <ButtonIcon className="text-sm mr-3" label="FILTRAR" icon={<FaFunnelDollar />} width='100%' style={{ height: '28px' }} onClick={() => setShowModalFiltro(true)} />
      </div>
    </header>
    <hr />
    <Body>
      <div className="flex items-center justify-between mb-5 mt-2">
        <div className="w-3/12">
          <InputSelectDefault label="Status" options={status} autoFocus placeholder="Selecione..." onChange={(e) => filterStatus(e.value)} defaultValue={status[0]} />
        </div>
        <div className="text-xs">
          <ButtonIcon className="text-sm mr-10 mb-1" label="CARREGAR NOTAS RECENTES" icon={<FaFileDownload />} width='100%' style={{ backgroundColor: colors.success }} />
          <div className="text-center">
            <p className="font-bold">Última consulta: <span className="font-normal">12/12/2022 19:09:35</span></p>
            <p className="font-bold">Tempo restante: <span style={{ color: colors.error }}>09:06</span> </p>
          </div>
        </div>
      </div>
      <div className="h-10 flex ">
        <div className="w-4/12">
          <InputSearch onChange={(e) => search(e.currentTarget.value)} />
        </div>
        <div className="w-8/12 flex">
          <ButtonIcon className="mr-3" label="Entrada avulso" icon={<FaPlus />} width={'170px'} style={{ marginTop: '-3px' }} onClick={onNovo}/>
          <ButtonUpload className="mr-3" label="Importar XML" color={colors.primary} boderColor={colors.primary} width={'160px'} style={{ marginTop: '-3px' }} multiple upload={(e)=> uploadXml(e.target.files)} />
          <ButtonIcon className="mr-3" label="Manifestar nota" icon={<FaFileSignature />} width={'170px'} style={{ marginTop: '-3px' }} color={colors.warning} onClick={onManifestar} />
          <div className="linha-vertical h-8 m-2" style={{ marginTop: '-1px' }}></div>
          <div className="w-20 text-xs font-bold text-center">
            <p>Quantidade</p>
            <CountUp end={150000} prefix='' separator="" decimal="" decimals={0} />
          </div>
          <div className="linha-vertical h-8 m-2" style={{ marginTop: '-1px' }}></div>
          <div className="w-40 text-xs font-bold text-right">
            <p>Valor total</p>
            <CountUp end={150000000} prefix='R$ ' separator="." decimal="," decimals={2} />
          </div>
        </div>
      </div>
      <hr className="mb-3" style={{ marginTop: '-5px' }} />
      <ContainerTable>
        <DataGridDefault
          dataSource={dataSource}
          paginar={false}
          showBorders
          showColumnLines
          hoverStateEnabled
          rowAlternationEnabled
          isSelectRow
          moduloSeletion='single'
          onSelectionChanged={(e) => setNotaSelect(e.selectedRowsData[0])}
        >
          <Column dataField= 'numero' caption= 'NÚMERO' alignment= 'left' dataType= 'string' width={100} cssClass= 'font-bold column-1'  />
          <Column dataField= 'emissao' caption= 'EMISSÃO' alignment= 'center' dataType= 'date' width={95} cssClass= 'font-bold' />
          <Column dataField= 'cnpj' caption= 'CNPJ/CPF' alignment= '' dataType= 'string' width={150} />
          <Column dataField= 'fornecedor' caption= 'FORNECEDOR' alignment= 'left' dataType= 'number' />
          <Column dataField= 'vlrbruto' caption= 'VLR.BRUTO' alignment= 'center' dataType= 'number' format={{type:'fixedPoint', precision:2}} width={110} />
          {/* <Column dataField= 'vlricms' caption= 'VLR.ICMS' alignment= 'center' dataType= 'number' allowSearch={false} format={{type:'fixedPoint', precision:2}} width={110} />
          <Column dataField= 'vlrdesconto' caption= 'VLR.DESCONTO' alignment= 'right' dataType= 'number' cssClass= 'font-bold' allowSearch={false} format={{type:'fixedPoint', precision:2}} width={150} />
          <Column dataField= 'vlrliquido' caption= 'VLR.LÍQUIDO' alignment= 'right' dataType= 'number' cssClass= 'font-bold' allowSearch={false} format={{type:'fixedPoint', precision:2}} width={150} /> */}
          <Column dataField= 'status' caption= 'STATUS' alignment= 'center' dataType= 'number' cssClass= 'font-bold text-sx' allowSearch={false} width={ 120} cellRender={renderCell}  />
          <Column dataField= 'manifesto' caption= 'MANIFESTO' alignment= 'center' dataType= 'date' allowSearch={false} width={100} />
          <Column dataField= 'entrada' caption= 'ENTRADA' alignment= 'center' dataType= 'date' cssClass= 'font-bold' allowSearch={false} width={95} />
          <Column dataField= 'incluida' caption= 'INCLUIDA' alignment= 'center' dataType= 'number' cssClass= 'font-bold' allowSearch={false} width={90} cellRender={renderCell}  />
          <Column dataField= '' caption= '' alignment= 'center' dataType= '' cssClass= '' allowSearch={false} format={{type:'fixedPoint', precision:2}} width={50} cellRender={renderCell} />
        </DataGridDefault>
      </ContainerTable>
    </Body>

    <ModalDefault isOpen={showModalFiltro} title='FILTRAR NOTAS' onRequestClose={() => setShowModalFiltro(false)} width='50%' left="22%" height="75%" margin="5%">
      <ContainerFiltro className="bg-white w-full p-3">
        <div className="text-left font-bold mb-5">
          <p className="text-xs">Filtro por data</p>
          <hr className="mb-2" style={{ border: '1px solid' + colors.gray }} />
          <div className="flex items-center mt-3">
            <div className="w-full mr-5">
              <InputSelectDefault label="Tipo" options={tiposFiltroData} defaultValue={tiposFiltroData[0]} />
            </div>
            <InputDate className="text-ms w-40 mr-5" label="Data inicial" />
            <InputDate className="text-ms w-40" label="Data final" />
          </div>
        </div>

        <div className="text-left text-xs font-bold">
          <p>Informações diversas</p>
          <hr className="mb-5" style={{ border: '1px solid' + colors.gray }} />
          <div className="w-full">
            <InputDefault className="w-3/12 mr-5 mb-5" label="Número da nota" type="number" />
            <div className="flex w-full">
              {tamanhoIpuntCnpjCpf < 11 ?
                <InputMask className="w-6/12 mr-5 " label="CNPJ" type="number" mask={'99.999.999/9999-99'} />
                :
                <InputMask className="w-6/12 mr-5 " label="CPF" type="number" mask={'999.999.999-99'} />
              }
              <InputDefault className="w-full" label="Fornnecedor" type="text" />
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full" style={{ bottom: 25, right: 15, position: 'absolute' }}>
          <ButtonBase label="CANCELAR" model="btn_line" className="primary-color mr-5  w-32" size="large" onClick={() => setShowModalFiltro(false)} />
          <ButtonBase label="FILTAR" model="btn_base" className="primary-color w-32" size="large" />
        </div>
      </ContainerFiltro>
    </ModalDefault>

    <ModalEntrada showModal={showModalEntrada} closeModal={() => setShowModalEntrada(false)} tipo={tipoNota} nota={notaSelect}/>
    {/* <ToastDefault /> */}
  </Container>;
}
export default Mde;