import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

interface TimeSelectProps extends Omit<ComponentProps<"button">, "value"> {
  value: string;
  isSelected: boolean;
}

export function TimeSelect({
  value,
  isSelected,
  className,
  ...props
}: TimeSelectProps) {
  return (
    <button
      {...props}
      type="button"
      data-slot="time-select"
      data-selected={isSelected}
      className={cn(
        "w-fit cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-4.5 py-2 text-gray-200 transition-colors hover:bg-gray-500",
        "disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-500",
        "data-[selected=true]:pointer-events-none data-[selected=true]:border-yellow data-[selected=true]:text-yellow",
        className,
      )}
    >
      {value}
    </button>
  );
}
