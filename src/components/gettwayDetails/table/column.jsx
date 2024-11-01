import { createColumnHelper } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import useFormatToNaira from "@/hooks/formatToNaira"
import { Check, CircleAlert } from "lucide-react"

const formatToNaira = useFormatToNaira()
export const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllRowsSelected()
            ? true
            : table.getIsSomeRowsSelected()
              ? "indeterminate"
              : false
        }
        className="w-[2rem] ml-[2rem] h-[2rem] rounded-[0.5rem] border-[#D5D7DA]"
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="w-[2rem] ml-[2rem] bg-white h-[2rem] rounded-[0.5rem] border-[#D5D7DA]"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "transactionRef",
    header: "Transaction Ref",
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => (
      <div className="flex items-center text-black gap-[1rem]">
        <img src={'/common/Avatar.png'} alt="customer" className="w-[4rem] h-[4rem] rounded-[50%]" />
        <div className="flex flex-col gap-[.5rem]">
          <p className="text-[1.7rem]  text-black mb-[.2rem] font-[400]">{row.original.customer.name}</p>
          <p className="text-[1.3rem] text-[#535862] font-[400]">{row.original.customer.email}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "gatewayRef",
    header: "Gateway Ref",
  },
  {
    accessorKey: "paymentTarget",
    header: "Payment Target",
    cell: ({ row }) => (
      <p className="text-[1.7rem] text-[#181D27] font-[400]">{row.original.paymentTarget}</p>
    ),
  },
  {
    accessorKey: "totalAmount",
    header: "Total Amount",
    cell: ({ row }) => (
      <p className="text-[1.7rem] text-[#000000] font-[400]">{formatToNaira(row.original.totalAmount)}</p>
    ),
  },
  {
    accessorKey: "paidAmount",
    header: "Paid Amount",
    cell: ({ row }) => (
      <p className="text-[1.7rem] text-[#000000] font-[400]">{formatToNaira(row.original.paidAmount)}</p>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className={`px-[1rem] flex items-center w-fit py-[.5rem] rounded-[2rem] ${row.original.status == "Confirmed" ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#FEF3F2] text-[#B42318]"} gap-[.5rem]`}>
        {row.original.status == "Confirmed" ? <Check size={16} className="text-[#12B76A]" strokeWidth={2} /> : <CircleAlert size={20} className="w-[1.5rem] h-[1.5rem] text-[#B42318]" />}
        <p className="text-[1.5rem] font-[400]">{row.original.status}</p>
      </div>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <Button variant="ghost" className="text-[1.6rem] font-[600] text-[#FF9100]">Details</Button>
    ),
  }
] 