import { CalendarIcon, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";

const CustomCalendar = ({ date, setDate }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="py-[1.8rem] shadow shadow-[#0A0D120D] rounded-[.5rem] text-[1.5rem] sm:hidden text-[#717680] font-[400] px-[1.3rem]" id="date" variant={"outline"} >
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
                    <ChevronDown className="ml-[1.5rem]" size={20} strokeWidth={2} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={1}
                    className="flex-row text-[1.4rem]"
                />
            </PopoverContent>
        </Popover>
    );
}

export default CustomCalendar;