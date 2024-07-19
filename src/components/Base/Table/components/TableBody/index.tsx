import React from "react";

const TableBody: React.FC<TableBodyProps> = ({ columns = [], data = [] }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-1 text-sm">
      {data.map((row, rowIndex: number) => (
        <tr key={rowIndex}>
          {columns.map((column, colIndex) => (
            <td className="px-6 py-4 whitespace-nowrap" key={colIndex}>
              {row[column.accessor]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
