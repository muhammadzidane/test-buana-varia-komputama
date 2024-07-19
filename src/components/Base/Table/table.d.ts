interface TableProps extends TableHeaderProps, TableFooterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: undefined | any[];
  withFooter?: boolean;
}
