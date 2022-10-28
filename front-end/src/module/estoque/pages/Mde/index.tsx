import React, { useContext, useEffect, useState } from "react"
import { FaArchive, FaDollarSign, FaFileDownload, FaFileUpload, FaFunnelDollar } from "react-icons/fa";

import { Body, Container, ContainerTable } from './styles';
import { ThemeContext } from 'styled-components';
import { ButtonIcon, DataGridDefault, InputSearch, InputSelectDefault, SummaryDefault } from "../../../../components";
import { status } from './__mooks';

/**
*@Author
*@Issue
*/

function Mde() {
  const theme = useContext(ThemeContext);
  const columns = new Array<ColumnsDataGridType>();
  columns.push({ dataField: 'item', caption: 'ITEM', alignment: 'center', dataType: '', width: 70, cssClass: 'font-bold column-1' });
  columns.push({ dataField: 'codigo', caption: 'Código', alignment: '', dataType: '', width: 70, cssClass: 'font-bold', visible: false });
  columns.push({ dataField: 'descricao', caption: 'DESCRIÇÃO', alignment: '', dataType: '', cssClass: 'font-bold column-2' });
  columns.push({ dataField: 'quantidade', caption: 'QUANTIDADE', alignment: 'center', dataType: 'number', allowSearch: false, format: { type: 'fixedPoint', precision: 3 }, width: 110 });
  columns.push({ dataField: 'valor', caption: 'VALOR', alignment: 'center', dataType: 'number', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 110 });
  columns.push({ dataField: 'desconto', caption: 'DESCONTO', alignment: 'center', dataType: 'number', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 110 });
  columns.push({ dataField: 'total', caption: 'TOTAL', alignment: 'right', dataType: 'number', cssClass: 'font-bold', allowSearch: false, format: { type: 'fixedPoint', precision: 2 }, width: 150 });

  const dataSource = [
    { item: 1, descricao: 'produto', quantidade: 10.00, valor: 1502, desconto: 12.00, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32.00 },
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
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
    { item: 1, descricao: 'produto', quantidade: 10, valor: 1502, desconto: 12, total: 32 },
  ]

  return <Container className="card-local w-full h-full p-3 font-bold" style={{ backgroundColor: (theme.title === 'dark' ? theme.colors.tertiary : theme.colors.white) }}>
    <header className="flex text-2xl font-bolde items-center justify-between mb-1" style={{ color: theme.colors.primary }}>
      <div className="flex" style={{ backgroundColor: (theme.title === 'dark' ? theme.colors.tertiary : theme.colors.white), borderRadius: '8px' }}>
        <i className="mr-1"><FaFileUpload /></i>
        <label htmlFor="">Nota de entrada</label>
      </div>
      <div>
        <ButtonIcon className="text-sm mr-3" label="FILTRAR" icon={<FaFunnelDollar />} width='100%' />
      </div>
    </header>
    <hr />
    <Body>
      <div className="flex items-center justify-between mb-5 mt-2">
        <div className="w-3/12">
          <InputSelectDefault label="Status" options={status} autoFocus placeholder="Selecione..." />
        </div>
        <div className="text-xs mt-2">
          <ButtonIcon className="text-sm mr-10" label="CARREGAR NOTAS RECENTES" icon={<FaFileDownload />} width='100%' style={{ backgroundColor: theme.colors.success }} />
        </div>
      </div>
      <div>
        <InputSearch/>
      </div>
      <ContainerTable>
        <DataGridDefault columns={columns} dataSource={dataSource}/>
      </ContainerTable>

    </Body>
    <footer className="grid grid-cols-4 gap-3">
      <SummaryDefault className="shadow-lg" label="Total de Notas" icon={<FaArchive style={{ color: theme.colors.success }} />} montante={15} colorBorder={theme.colors.success} backgroundColor={theme.colors.gray} />
      <SummaryDefault className="shadow-lg" label="Total de Bruto" icon={<FaDollarSign style={{ color: theme.colors.info }} />} montante={15} colorBorder={theme.colors.info} backgroundColor={theme.colors.gray} />
      <SummaryDefault className="shadow-lg" label="Total de ICMS" icon={<FaDollarSign style={{ color: theme.colors.warning }} />} montante={15} colorBorder={theme.colors.warning} backgroundColor={theme.colors.gray} />
      <SummaryDefault className="shadow-lg" label="Total de Desconto" icon={<FaDollarSign style={{ color: theme.colors.error }} />} montante={15} colorBorder={theme.colors.error} backgroundColor={theme.colors.gray} />
    </footer>
  </Container>;
}
export default Mde;