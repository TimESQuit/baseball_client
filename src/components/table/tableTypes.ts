type TableCell = string | number | null;
type TableRow = { [key: string]: TableCell };
type Field = string | number;
type fieldTitles = {
  [key: string]: string;
};

interface ICellContent {
  row: TableRow;
  field: Field;
  index: number;
  hiLight: string | null;
}

interface ITableBodyProps {
  rows: TableRow[] | [];
  fields: Field[];
  hiLight: string | null;
  indexed: boolean;
  indexStart: number;
}

interface ITableHeaderProps {
  fields: string[];
  handleSortField: Function;
  indexed: boolean;
  fieldTitles: fieldTitles;
}

interface ITableProps {
  fields: string[] | [];
  rows: TableRow[];
  handleSortField: Function;
  hiLight: string | null;
  indexed: boolean;
  fieldTitles?: fieldTitles;
}

export type { ITableBodyProps, ICellContent, ITableProps, ITableHeaderProps };
