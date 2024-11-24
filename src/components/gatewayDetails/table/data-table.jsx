import { ArrowPathIcon, InboxIcon } from "@heroicons/react/24/outline/index.js";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Button } from "../../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

const DataTable = ({ data, columns, loading }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="border border-[#E0E0E0] rounded-[1rem]">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className="text-[1.4rem] font-[500] sm:bg-[#FAFAFA] text-[#535862]"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <TableHead className="py-[1.5rem]" key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {loading && (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <div className="flex flex-col self-center items-center text-2xl p-4">
                  <ArrowPathIcon className="animate-spin w-[2.3rem] h-[2.3rem]" />
                  Loading data...
                </div>
              </TableCell>
            </TableRow>
          )}
          {!loading && table.getRowModel().rows.length === 0 && (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <div className="flex flex-col self-center items-center text-2xl p-4">
                  <InboxIcon className="w-[2.3rem] h-[2.3rem]" />
                  No data found.
                </div>
              </TableCell>
            </TableRow>
          )}
          {!loading &&
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() =>
                  navigate(
                    `/gateway-details/${id}/transactions/${row.original.trxID}`,
                  )
                }
                className="border-b hover:bg-[#EFDAF6] cursor-pointer text-[#535862] text-[1.7rem] font-[400]  border-[#E0E0E0]"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="py-[3rem]" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="flex justify-between px-[2rem] py-[1.5rem] items-center gap-[1rem]">
        <Button
          variant="outline"
          className="text-[1.7rem] border-[#D5D7DA] py-[2rem] rounded-[.7rem] px-[1rem] font-[400] text-[#535862]"
        >
          <ArrowLeft size={16} strokeWidth={1} />
          <p className="text-[1.7rem] font-[600] text-[#535862]">Previous</p>
        </Button>
        <Button
          variant="outline"
          className="text-[1.7rem] border-[#D5D7DA] py-[2rem] rounded-[.7rem] px-[2rem] font-[400] text-[#535862]"
        >
          <p className="text-[1.7rem] font-[600] text-[#535862]">Next</p>
          <ArrowRight size={16} strokeWidth={1} />
        </Button>
      </div>
    </div>
  );
};

export default DataTable;
