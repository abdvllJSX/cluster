import { cn } from "@/lib/utils";
import * as React from "react";

interface iSelectOptions {
  label: string;
  value: string;
}

export interface InputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: iSelectOptions[];
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, InputProps>(
  ({ className, options, placeholder, ...props }, ref) => {
    return (
      <select
        className={cn(
          "mt-2 block w-full rounded-md border border-neutral-200 bg-transparent py-3 pl-3 pr-10 shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
          className,
        )}
        ref={ref}
        {...props}
      >
        <option value={""}>{placeholder || "Select Item"}</option>
        {options?.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    );
  },
);
Select.displayName = "Select";

export { Select };
