import React from 'react';
import { Container } from './styles';
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
  Summary,
  TotalItem,
} from 'devextreme-react/data-grid';
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
  // styleCell?: (data: any)=> React.ReactNode;
  onRowClick?:(element: any)=>void;
  onSelectionChanged?:(element: any)=>void;
  onRowDblClick?:(element: any)=>void;
  onCellPrepared?:(element: any)=>void;
  onInitialized?:(element: any)=>void;
  onInitNewRow?:(element: any)=>void;
  onEditorPrepared?:(element: any)=>void;

  // styleCellColumn?: (data: any)=> React.ReactNode;

};

export const DataGridDefault: React.FC<DataGridDefaultProps> = (props) => {
  // Specifying a currency globally

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
      onInitialized={props.onInitialized}
      onInitNewRow={props.onInitNewRow}
      onEditorPrepared={props.onEditorPrepared}
      onRowClick={props.onRowClick}
      onRowDblClick={props.onRowDblClick}
      onCellPrepared={props.onCellPrepared}
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
          sortOrder={column.defaultSortOrder}
        />

      })}

      <Paging defaultPageSize={props.defaultPageSize}  enabled={props.paginar}/>
      <Pager allowedPageSizes={props.pageSizes} showPageSizeSelector={true} />
    </DataGrid>
  </Container>;
}