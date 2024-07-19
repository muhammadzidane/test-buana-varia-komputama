interface TableHeaderColumn {
  accessor: string;
  header: string;
}

interface TableHeaderProps {
  columns: TableHeaderColumn[];
}
