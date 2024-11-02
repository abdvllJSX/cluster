import { Check, X, CornerUpRight } from "lucide-react"

export const StatusIndicator = ({ status }) => {
  const positiveStatuses = ['Confirmed', 'Success', 'Approved', 'Complete', 'Successful']
  const isPositive = positiveStatuses.includes(status)
  const isAbandoned = status === 'Abandoned'
  
  return (
    <div className={`px-[1rem] flex items-center w-fit py-[.5rem] rounded-[2rem] ${
      isAbandoned ? "bg-[#E7EAED] text-[#525964]" :
      isPositive ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#FEF3F2] text-[#B42318]"
    } gap-[.5rem]`}>
      {isAbandoned ? (
        <CornerUpRight size={16} className="text-[#8895A7] w-[1.5rem] h-[1.5rem]" strokeWidth={2} />
      ) : isPositive ? (
        <Check size={16} className="text-[#12B76A] w-[1.5rem] h-[1.5rem]" strokeWidth={2} />
      ) : (
        <X size={16} className="w-[1.5rem] h-[1.5rem] text-[#F04438]" />
      )}
      <p className="text-[1.5rem] font-[400]">{status}</p>
    </div>
  )
} 