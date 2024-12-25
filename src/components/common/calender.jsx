import { CalendarIcon, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { useState } from "react";
import { convertDateRange } from "../../utilis/formatdate";
import { useEffect } from "react";

const CustomCalendar = ({ date, setDate, refetchFN }) => {
    const [open, setOpen] = useState(false);

    const handleApply = () => {
        refetchFN()
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(prev => !prev);
    };
    
    const handleClear = () => {
        setDate({
            from: "",
            to: ""
        })
    }
    return (
        <Popover open={open} onOpenChange={handleOpen}>
            <PopoverTrigger asChild>
                <Button className="py-[1.8rem] shadow shadow-[#0A0D120D] rounded-[.5rem] text-[1.5rem] text-[#717680] font-[400] px-[1.3rem]" id="date" variant={"outline"} >
                    <CalendarIcon size={18} className="text-[#717680]" strokeWidth={2} />
                    {date?.from ? (
                        date.to ? (
                            <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                            </>
                        ) : (
                            format(date.from, "LLL dd, y")
                        )
                    ) : (
                        <span>Pick a date</span>
                    )}
                    <ChevronDown className="ml-[1.5rem] sm:hidden" size={20} strokeWidth={2} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <div className="px-[1.5rem] py-[1rem]">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={1}
                        className="flex-row text-[1.4rem]"
                    />

                    <div className="mt-[3rem] flex items-center justify-end gap-[1rem]">
                        <Button variant={"outline"} 
                        onClick={handleClear}
                        className="text-[1.4rem] rounded-[.5rem] px-[1.5rem] py-[1.4rem] border-[#FF4002] border text-[#FF4002]">Clear All</Button>

                        <Button
                            className="bg-[green] px-[1.5rem] rounded-[.5rem] py-[1.4rem] text-white"
                            disabled={!date?.from || !date?.to}
                            onClick={handleApply}
                        >Apply</Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default CustomCalendar;