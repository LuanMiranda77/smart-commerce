import { string } from "prop-types"

export type ColumnsDataGridType = {
    dataField:string;
    caption: string;
    dataType: string | 'string';
    format?: string | Object ;
    alignment?:string;
    allowGrouping?: boolean ;
    cssClass?:string;
    width?:number ;
}