import { Column } from "devextreme-react/data-grid";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import {
  FaDollarSign,
  FaPauseCircle,
  FaPen,
  FaPenSquare,
  FaPlayCircle,
  FaPlus,
  FaSearch,
  FaTrash,
} from "react-icons/fa";
import {
  ButtonIcon,
  DataGridDefault,
  DialogPopupConfirme,
  Divider,
  InputCheck,
  InputDate,
  InputDefault,
  InputFileProduto,
  InputMook,
  InputNumber,
  InputSelectDefault,
  ModalDefault,
  SummaryDefault,
  TabsDefault,
} from "../../../../components";
import cfops from "../../../../helpers/help_lista_CFOP.json";
import useProduct from "../../../../hooks/useProduct";
import ModalCategoria from "./categoria";
import { Container, ContainerFoto, TableContainer } from "./styles";
import { columnsPromocao } from "./types";
import {GoCircleSlash} from 'react-icons/go';
import {BiXCircle} from 'react-icons/bi';

/**
 *@Author
 *@Issue
 */

function Produto() {
  const {
    dataSource,
    setDataSource,
    estabelecimento,
    title,
    colors,
    showModal,
    setShowModal,
    produto,
    setProduto,
    showPoupAtivo,
    setShowPopupAtivo,
    showPoupInativo,
    setShowPopupInativo,
    showModalCategoria,
    setShowModalCategoria,
    isAtado,
    setIsAtacado,
    tableHeaders,
    onInative,
    onAtive,
  } = useProduct();

  const renderCell = (element: any) => {
    if (element.value === "S") {
      return (
        <div
          className="rounded-full h-6 text-center p-1"
          style={{ backgroundColor: colors.success }}
        >
          <span className="font-bold text-white">ATIVO</span>
        </div>
      );
    } else if (element.value === "N") {
      return (
        <div
          className="rounded-full  h-6 text-center p-1"
          style={{ backgroundColor: colors.error }}
        >
          <span className="font-bold text-white">INATIVO</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center">
          {element.data.status === "N" ? (
            <i
              className="text-2xl cursor-pointer mr-6"
              style={{ color: colors.error }}
            >
              <GoCircleSlash
                id="buttonAtive"
                className=""
                title="Ativar usuário"
                onClick={() => showPopupConfirmeAction(element.data, 1)}
                size={18}
              />
            </i>
          ) : (
            <i
              className="text-2xl cursor-pointer mr-6"
              style={{ color: colors.error }}
            >
              <FaTrash
                id="buttonInative"
                className=""
                title="Desativar usuário"
                onClick={() => showPopupConfirmeAction(element.data, 2)}
                size={15}
              />
            </i>
          )}
          <i
            className="text-2xl cursor-pointer"
            style={{ color: colors.primary }}
          >
            <FaPen
              id="buttonAction"
              className=""
              title="Editar usuário"
              onClick={() => onEdit(element.data)}
              size={18}
            />
          </i>
        </div>
      );
    }
  };

  const renderCellMov = (element: any) => {
    if (element.value < 0) {
      return (
        <span className="font-bold" style={{ color: colors.error }}>
          {element.value}
        </span>
      );
    } else if (element.value > 0) {
      return (
        <span className="font-bold" style={{ color: colors.success }}>
          {element.value}
        </span>
      );
    } else if (element.value.includes("S")) {
      return (
        <span className="font-bold" style={{ color: colors.error }}>
          {element.value}
        </span>
      );
    } else if (element.value.includes("E")) {
      return (
        <span className="font-bold" style={{ color: colors.success }}>
          {element.value}
        </span>
      );
    }
  };

  const columnsMovimentacao = [
    {
      dataField: "dataMov",
      caption: "DATA MOVIMENTO",
      alignment: "center",
      dataType: "date",
      cssClass: "font-bold column-1",
    },
    {
      dataField: "quant",
      caption: "QUANT.",
      alignment: "center",
      dataType: "number",
      styleCell: renderCellMov,
      format: { type: "fixedPoint", precision: 3 },
    },
    {
      dataField: "unit",
      caption: "UNITÁRIO",
      alignment: "center",
      dataType: "number",
      format: { type: "fixedPoint", precision: 2 },
    },
    {
      dataField: "desconto",
      caption: "DESCONTO",
      alignment: "center",
      dataType: "number",
      format: { type: "fixedPoint", precision: 2 },
    },
    {
      dataField: "acresimo",
      caption: "ACRÉSIMO",
      alignment: "center",
      dataType: "number",
      format: { type: "fixedPoint", precision: 2 },
    },
    {
      dataField: "total",
      caption: "TOTAL",
      alignment: "center",
      dataType: "number",
      format: { type: "fixedPoint", precision: 2 },
    },
    {
      dataField: "tipo",
      caption: "TIPO",
      alignment: "center",
      dataType: "string",
      styleCell: renderCellMov,
    },
  ];
  const dataMov = [
    {
      dataMov: "12/12/2022",
      quant: -120,
      unit: 123,
      desconto: 15,
      acresimo: 5,
      total: 50,
      tipo: "SV",
    },
    {
      dataMov: "12/12/2022",
      quant: 500,
      unit: 123,
      desconto: 15,
      acresimo: 5,
      total: 50,
      tipo: "EX",
    },
    {
      dataMov: "12/12/2022",
      quant: -120,
      unit: 123,
      desconto: 15,
      acresimo: 5,
      total: 50,
      tipo: "SV",
    },
  ];

  const [dataSourceCopy, setDataSourceCopy] = useState(dataSource);

  const onEdit = (produto: any) => {
    console.log(produto);
    setProduto(produto);
    setShowModal(true);
  };

  const showPopupConfirmeAction = (produto: any, tipo: number) => {
    setProduto(produto);
    tipo === 1 ? setShowPopupAtivo(true) : setShowPopupInativo(true);
  };

  // const onAtive = (produto: any) => {
  //   let data = _.map(dataSourceCopy, (value) => {
  //     if (produto.codigo === value.codigo) {
  //       value.status = "S";
  //     }
  //     return value;
  //   });
  //   setDataSource(data);
  //   setShowPopupAtivo(false);
  // };

  // const onInative = (produto: any) => {
  //   let data = _.map(dataSourceCopy, (value) => {
  //     if (produto.codigo === value.codigo) {
  //       value.status = "N";
  //     }
  //     return value;
  //   });
  //   setDataSource(data);
  //   setShowPopupInativo(false);
  // };

  const tabs = (tab: string) => {
    if (tab === "tab1") {
      return (
        <div className="tab1">
          <div className="w-full flex items-center justify-between mb-5">
            <div className="w-3/12 text-left mr-5">
              <InputDate label="Data Vencimento" />
            </div>
            <div>
              <InputNumber
                className="font-bold"
                label="MarkUp"
                prefixo=""
                casaDecimal={2}
                separadorDecimal=","
                fixedZeroFinal
                placeholder="00,00"
              />
            </div>
            <div className="mt-5 mr-5">
              <InputCheck
                label="Preço Atacado?"
                checked={isAtado}
                onChange={(e) => setIsAtacado(e.target.checked)}
              />
            </div>
          </div>

          <div className="mb-5 text-left flex">
            <div className="mr-10">
              <InputNumber
                className="font-bold"
                label="Saldo"
                prefixo=""
                casaDecimal={3}
                separadorMilhar="."
                separadorDecimal=","
                fixedZeroFinal
                placeholder="00,000"
              />
            </div>
            <InputNumber
              className="font-bold"
              label="Fator de conversão"
              prefixo=""
              casaDecimal={3}
              separadorMilhar="."
              separadorDecimal=","
              fixedZeroFinal
              placeholder="00,000"
            />
          </div>

          <div className="mb-5 text-left flex">
            <div className="mr-10">
              <InputNumber
                className="font-bold"
                label="Saldo minimo"
                prefixo=""
                casaDecimal={2}
                separadorMilhar="."
                separadorDecimal=","
                fixedZeroFinal
                placeholder="00,00"
              />
            </div>
            {isAtado ? (
              <InputNumber
                className="font-bold"
                label="Quantidade minima do atacado"
                prefixo=""
                casaDecimal={2}
                separadorMilhar="."
                separadorDecimal=","
                fixedZeroFinal
                placeholder="00,00"
              />
            ) : (
              ""
            )}
          </div>

          <div className="mb-5 text-left flex">
            <div className="mr-10">
              <InputNumber
                className="font-bold"
                label="Preço custo"
                prefixo=""
                casaDecimal={2}
                separadorMilhar="."
                separadorDecimal=","
                fixedZeroFinal
                placeholder="00,00"
              />
            </div>
            <div className="mr-10">
              <InputNumber
                className="font-bold"
                label="Preço venda"
                prefixo=""
                casaDecimal={2}
                separadorMilhar="."
                separadorDecimal=","
                fixedZeroFinal
                placeholder="00,00"
              />
            </div>
            {isAtado ? (
              <InputNumber
                className="font-bold"
                label="Preço atacado"
                prefixo=""
                casaDecimal={2}
                separadorMilhar="."
                separadorDecimal=","
                fixedZeroFinal
                placeholder="00,00"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      );
    } else if (tab === "tab2") {
      return (
        <div className="tab2">
          <div className="mb-5 w-3/12">
            <InputNumber
              className="font-bold"
              label="% Desconto"
              prefixo=""
              casaDecimal={2}
              separadorDecimal=","
              fixedZeroFinal
              placeholder="00,00"
            />
          </div>
          <div className="w-full flex items-center mb-5">
            <div className="w-3/12 text-left mr-5">
              <InputDate label="Data de inicio" />
            </div>
            <div className="w-3/12 text-left mr-5">
              <InputDate label="Data final" />
            </div>
            <div className="mt-6 w-2/12">
              <ButtonIcon label="Pesquisa" icon={<FaSearch />} width="100%" />
            </div>
          </div>
          <div className="" style={{ height: "calc(100vh - 415px)" }}>
            <DataGridDefault
              columns={columnsPromocao}
              dataSource={[]}
              allowSorting
              paginar={false}
              // showRowLines
              rowAlternationEnabled
              showBorders
              showColumnLines
              hoverStateEnabled
              isSelectRow
              moduloSeletion="single"
            />
          </div>
        </div>
      );
    } else if (tab === "tab3") {
      return (
        <div className="tab3">
          <div className="w-full flex items-center mb-5">
            <div className="w-3/12 text-left mr-5">
              <InputDate label="Data de inicio" />
            </div>
            <div className="w-3/12 text-left mr-5">
              <InputDate label="Data final" />
            </div>
            <div className="mt-6 w-2/12">
              <ButtonIcon label="Pesquisa" icon={<FaSearch />} width="100%" />
            </div>
          </div>
          <div className="mb-3" style={{ height: "calc(100vh - 440px)" }}>
            <DataGridDefault
              columns={columnsMovimentacao}
              dataSource={dataMov}
              allowSorting
              paginar={false}
              // showRowLines
              rowAlternationEnabled
              showBorders
              showColumnLines
              hoverStateEnabled
              isSelectRow
              moduloSeletion="single"
            />
          </div>
          {/* <Divider tipo="horizontal" className="mb-1" /> */}
          <div className="flex w-full">
            <div className="w-6/12 text-left">
              <p className="font-bold" style={{ color: colors.primary }}>
                INDICADORES
              </p>
              <div className="flex">
                <div
                  className="text-xs font-bold mr-5"
                  style={{ color: colors.success }}
                >
                  <p>EX → ENTRA POR XML</p>
                  <p>EA → ENTRA AVUSO</p>
                  <p>EM → ENTRA MANUAL</p>
                </div>
                <div
                  className="text-xs font-bold"
                  style={{ color: colors.error }}
                >
                  <p>SV → SAIDA VENDA</p>
                  <p>SD → SAIDA DESPERDICIO</p>
                  <p>SM → SAIDA MANUAL</p>
                </div>
              </div>
            </div>
            <div className="w-6/12 flex text-left h-18">
              <SummaryDefault
                className="w-6/12 mr-5"
                label="Valor das entradas"
                colorBorder={colors.warning}
                backgroundColor={""}
                montante={100}
                icon={<FaDollarSign style={{ color: colors.warning }} />}
              />
              <SummaryDefault
                className="w-6/12"
                label="Valor das saídas"
                colorBorder={colors.primary}
                backgroundColor={""}
                montante={100}
                icon={<FaDollarSign style={{ color: colors.primary }} />}
              />
            </div>
          </div>
        </div>
      );
    } else if (tab === "tab4") {
      return (
        <div className="tab4">
          <div className="grid grid-cols-12 gap-3 mb-5">
            <InputDefault className="col-span-2" type="number" label="NCM" />
            <InputDefault className="col-span-2" type="number" label="CEST" />
          </div>

          <div className="flex mb-10">
            <div className="w-6/12 mr-5">
              <InputSelectDefault label="CFOP" options={cfops.entrada} />
            </div>
            <InputDefault type="number" label="CST/CSOSN" />
          </div>

          <div className="grid grid-cols-12 gap-3">
            <div className="mr-2 col-span-2">
              <InputNumber
                placeholder="00,00"
                label="% ICMS"
                separadorDecimal=","
                casaDecimal={2}
                separadorMilhar="."
                prefixo=""
                fixedZeroFinal
                color={colors.info}
              />
            </div>
            <div className="mr-2 col-span-2">
              <InputNumber
                placeholder="00,00"
                label="ICMS"
                separadorDecimal=","
                casaDecimal={2}
                separadorMilhar="."
                prefixo=""
                fixedZeroFinal
                color={colors.info}
              />
            </div>
            <div className="mr-2 col-span-2">
              <InputNumber
                placeholder="00,00"
                label="% IPI"
                separadorDecimal=","
                casaDecimal={2}
                separadorMilhar="."
                prefixo=""
                fixedZeroFinal
                color={colors.warning}
              />
            </div>
            <div className="mr-2 col-span-2">
              <InputNumber
                placeholder="00,00"
                label="IPI"
                separadorDecimal=","
                casaDecimal={2}
                separadorMilhar="."
                prefixo=""
                fixedZeroFinal
                color={colors.warning}
              />
            </div>
            <div className="mr-2 col-span-2">
              <InputNumber
                placeholder="00,00"
                label="% COFINS"
                separadorDecimal=","
                casaDecimal={2}
                separadorMilhar="."
                prefixo=""
                fixedZeroFinal
                color={colors.error}
              />
            </div>
            <div className="mr-2 col-span-2">
              <InputNumber
                placeholder="00,00"
                label="COFINS"
                separadorDecimal=","
                casaDecimal={2}
                separadorMilhar="."
                prefixo=""
                fixedZeroFinal
                color={colors.error}
              />
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <Container className="card-local p-2">
        <DataGridDefault
          dataSource={dataSource}
          allowSorting
          paginar={false}
          // showRowLines
          rowAlternationEnabled
          showBorders
          showColumnLines
          hoverStateEnabled
          isSelectRow
          moduloSeletion="single"
          isSearch
          headerChildren={
            <div className="flex w-4/12 justify-end">
                <ButtonIcon
                  label="Novo"
                  icon={<FaPlus />}
                  width={"100px"}
                  onClick={() => setShowModal(true)}
                  background={colors.primary}
                  className="mr-5"
                />
                <ButtonIcon
                  label="Duplicar item"
                  icon={<FaPlus />}
                  width={"150px"}
                  onClick={() => setShowModal(true)}
                  color={colors.primary}
                  background={colors.white}
                  borderColor={colors.primary}
                />
            </div>
          }
          cssSearch="w-8/12"
        >
          {tableHeaders.map((item, i) => {
            return (
              <Column
                key={i}
                caption={item.caption}
                dataField={item.dataField}
                dataType={"string"}
                width={i === 0 ? 70 : i === 1 ? 120 : i > 2 ? 100 : null}
                cssClass={`font-bold ${i === 0 ? "column-1" : ""}`}
                alignment={
                  i === 0 || i === 1
                    ? "center"
                    : i >= 4 && i <= 7
                    ? "right"
                    : ""
                }
                format={
                  i === 5
                    ? { type: "fixedPoint", precision: 3 }
                    : i === 4 || (i > 5 && i <= 7)
                    ? { type: "fixedPoint", precision: 2 }
                    : ""
                }
                cellRender={i > 7 ? renderCell : null}
              />
            );
          })}
        </DataGridDefault>

      {/* ===============================MOdal================ */}
      <ModalDefault
        isOpen={showModal}
        title="Ficha do produto"
        onRequestClose={() => setShowModal(false)}
        height="100vh"
      >
        <div className="p-1 flex">
          <div id="lado-left" className="w-4/12">
            <div className="flex items-center">
              <div className="w-9/12">
                <div className="flex items-center">
                  <InputMook
                    className="w-6/12 mb-5"
                    label="Código"
                    type="text"
                    value={"01"}
                  />
                  <div
                    className="rounded-full h-10 text-center p-2 w-6/12 ml-8"
                    style={{ backgroundColor: colors.success }}
                  >
                    <span className="font-bold text-white">ATIVO</span>
                  </div>
                </div>
                <InputDefault
                  className="w-8/12 mb-5"
                  label="Código de Barras"
                  type="number"
                />
              </div>
              <ContainerFoto>
                <InputFileProduto lado="left" upload={() => {}} />
              </ContainerFoto>
            </div>
            <InputDefault className="mb-5" label="Descrição" type="text" />

            <div className="w-8/12 mb-5 flex justify-between items-center">
              <div className="w-full mr-2">
                <InputSelectDefault
                  label="Categoria"
                  options={[]}
                  placeholder="Selecione a categoria"
                  isClearable
                  isSearchable
                />
              </div>
              <BiPlus
                className="mt-6 cursor-pointer"
                style={{
                  fontSize: "25px",
                  color: title === "dark" ? colors.white : colors.primary,
                }}
                onClick={() => setShowModalCategoria(true)}
              />
            </div>
            <div id="dt-importantes">
              <div
                className="text-left font-bold"
                style={{
                  color: title === "dark" ? colors.white : colors.tertiary,
                }}
              >
                <p>Datas importantes:</p>
              </div>
              <div className="flex">
                <div className="font-bold text-left p-2">
                  <p
                    style={{
                      color: title === "dark" ? colors.white : colors.success,
                    }}
                  >
                    Criado em
                  </p>
                  <p
                    style={{
                      color: title === "dark" ? colors.white : colors.primary,
                    }}
                  >
                    12/12/2021 19:00
                  </p>
                </div>
                <Divider
                  tipo="vertical"
                  className="ml-4 mr-4"
                  color={colors.tertiary}
                />
                <div className="font-bold text-left p-2">
                  <p
                    style={{
                      color: title === "dark" ? colors.white : colors.error,
                    }}
                  >
                    Ultima atualização
                  </p>
                  <p
                    style={{
                      color: title === "dark" ? colors.white : colors.primary,
                    }}
                  >
                    12/12/2021 19:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Divider tipo="vertical" className="ml-4 mr-4" />

          <div id="lado-right" className="w-8/12">
            <TabsDefault
              tabs={[
                { value: "tab1", label: "Estoque" },
                { value: "tab2", label: "Promoções" },
                { value: "tab3", label: "Movimentação" },
                { value: "tab4", label: "Impostos" },
              ]}
              onSelectTab={tabs}
            />
          </div>
        </div>

        {/* <footer className=''>
        <div className="flex justify-end" style={{ bottom: 25, right: 15, position: 'absolute' }}>
          <ButtonBase label="CANCELAR" model="btn_line" className="primary-color mr-5  w-32" size="large" onClick={() => setShowModal(false)} />
          <ButtonIcon className="mr-3" label="SALVAR" icon={<FaSave />} width={'50%'} />
        </div>
      </footer> */}
      </ModalDefault>

      <DialogPopupConfirme
        title="Confirme"
        isOpen={showPoupInativo}
        onRequestClose={() => setShowPopupInativo(false)}
        onClickSim={() => onInative(produto)}
      >
        <p className="font-bold text-2xl">
          Tem certeza que deseja bloquear o usuário?{" "}
        </p>
        <p className="font-bold" style={{ color: colors.error }}>
          O mesmo não poderá acessar o sistema até ser liberado !
        </p>
      </DialogPopupConfirme>

      <DialogPopupConfirme
        title="Confirme"
        isOpen={showPoupAtivo}
        onRequestClose={() => setShowPopupAtivo(false)}
        onClickSim={() => onAtive(produto)}
      >
        <p className="font-bold text-2xl">
          Tem certeza que deseja liberar o usuário?{" "}
        </p>
        <p className="font-bold" style={{ color: colors.error }}>
          O mesmo poderá acessar o sistema normalmente!
        </p>
      </DialogPopupConfirme>

      <ModalCategoria
        showModal={showModalCategoria}
        closeModal={() => setShowModalCategoria(false)}
      />
    </Container>
  );
}
export default Produto;
