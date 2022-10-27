import React from 'react';
import { Container } from './styles';
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
} from 'devextreme-react/data-grid';
import config from 'devextreme/core/config';
import { ColumnsDataGridType } from './types';
import { Selection } from 'devextreme-react/tree-list';

interface DataGridDefaultProps {
  //adicionar os props
  dataSource: Object[];
  columns: ColumnsDataGridType[];
  showBorders?:boolean;
  showRowLines?:boolean;
  defaultPageSize?:number;
  pageSizes?:number[];
  isSearch?:boolean;
  isGroupPanel?:boolean;
  allowSorting?:boolean;
  columnGroup?:boolean;
  paginar?:boolean;
  isSelectRow?:boolean;
  hoverStateEnabled?:boolean;
  rowAlternationEnabled?:boolean;
  showColumnLines?:boolean;
  moduloSeletion?: 'single'| 'multiple';
  onRowClick?:(element: any)=>void;
  onSelectionChanged?:(element: any)=>void;
  onRowDblClick?:(element: any)=>void;
  styleCell?: (data: any)=> React.ReactNode;
  // styleCellColumn?: (data: any)=> React.ReactNode;

};

export const DataGridDefault: React.FC<DataGridDefaultProps> = (props) => {
  // Specifying a currency globally
  config({ defaultCurrency: 'BRL' });

  return <Container>
    <DataGrid id="gridContainer"
      dataSource={props.dataSource}
      allowColumnReordering={true}
      rowAlternationEnabled={props.rowAlternationEnabled}
      showBorders={props.showBorders}
      showRowLines={props.showRowLines}
      showColumnLines={props.showColumnLines}
      hoverStateEnabled={props.hoverStateEnabled}
      height={'100%'}
      onSelectionChanged={props.onSelectionChanged}
      onRowClick={props.onRowClick}
      onRowDblClick={props.onRowDblClick}
      noDataText={''}
    >
      {props.isSelectRow ? <Selection mode={props.moduloSeletion}/> : null}
      <GroupPanel visible={props.columnGroup} />
      <SearchPanel visible={props.isSearch} />
      {/* <Grouping autoExpandAll={true} /> */}

      {props.columns.map((column, key) => {
        return <Column
          key={key}
          dataField={column.dataField}
          caption={column.caption}
          dataType={column.dataType}
          format={column.format}
          alignment={column.alignment}
          allowGrouping={column.allowGrouping}
          allowSorting={props.allowSorting}
          cssClass={column.cssClass}
          width={column.width}
          cellRender={column.styleCell}
          allowSearch={column.allowSearch}
          visible={column.visible}
        />

      })}

      <Paging defaultPageSize={props.defaultPageSize}  enabled={props.paginar}/>
      <Pager allowedPageSizes={props.pageSizes} showPageSizeSelector={true} />
    </DataGrid>

  </Container>;
}