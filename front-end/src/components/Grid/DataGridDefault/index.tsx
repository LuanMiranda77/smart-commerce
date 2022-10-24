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

interface DataGridDefaultProps {
  //adicionar os props
  dataSource: Object[];
  columns: ColumnsDataGridType[];
  showBorders?:boolean;
  defaultPageSize?:number;
  pageSizes?:number[];
  isSearch?:boolean;
  isGroupPanel?:boolean;
  allowSorting?:boolean;
}

export const DataGridDefault: React.FC<DataGridDefaultProps> = (props) => {
  // Specifying a currency globally
  config({ defaultCurrency: 'BRL' });

  return <Container>
    <DataGrid
      dataSource={props.dataSource}
      allowColumnReordering={false}
      rowAlternationEnabled={true}
      showBorders={props.showBorders}
      height={'100%'}
    >
      <GroupPanel visible={false} />
      <SearchPanel visible={props.isSearch} />
      <Grouping autoExpandAll={false} />

      {props.columns.map((column, key) => {
        return <Column
          key={key}
          dataField={column.dataField}
          caption={column.caption}
          dataType={column.dataType}
          format={column.format}
          alignment={column.alignment}
          allowGrouping={column.allowGrouping}
          cssClass={column.cssClass}
          width={column.width}
          allowSorting={props.allowSorting}
        />

      })}

      {/* <Pager allowedPageSizes={props.pageSizes} showPageSizeSelector={true} />
      <Paging defaultPageSize={10} /> */}
    </DataGrid>

  </Container>;
}