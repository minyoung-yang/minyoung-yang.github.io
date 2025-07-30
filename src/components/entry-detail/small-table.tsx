import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { ReactNode } from "react";

type SmallTableProps = {
  headers: ReactNode[];
  cells: (SmallTableCell | ReactNode)[][];
};

type SmallTableCell = {
  content: ReactNode;
  colSpan?: number;
  rowSpan?: number;
};

export function isSmallTableCell(cell: any): cell is SmallTableCell {
  return typeof cell === "object" && "content" in cell && cell !== null;
}

export function SmallTable({ headers, cells }: SmallTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table className="border-t border-b text-center">
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {cells.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) =>
                isSmallTableCell(cell) ? (
                  <TableCell
                    key={cellIndex}
                    colSpan={cell.colSpan}
                    rowSpan={cell.rowSpan}
                  >
                    {cell.content}
                  </TableCell>
                ) : (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ),
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
