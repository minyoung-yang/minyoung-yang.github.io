import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type OneRowTableProps = {
  headers: string[];
  cells: string[];
};
export function OneRowTable({ headers, cells }: OneRowTableProps) {
  if (headers.length !== cells.length) {
    console.warn("headers와 cells의 길이가 다릅니다.");
  }
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
          <TableRow>
            {cells.map((cell, index) => (
              <TableCell key={index}>{cell}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
