"use client";

import React from "react";

import { TableFooter, TableHeader, TableBody } from "./components";

const Table: React.FC<TableProps> = ({
  currentPage = 1,
  totalPage,
  columns,
  data,
}) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-1">
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>
      <TableFooter currentPage={currentPage} totalPage={totalPage} />
    </div>
  );
};

export default Table;
