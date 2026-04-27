import { type ComponentProps, useState } from "react";
import { cn } from "@/utils/cn";

interface TimeSelectProps extends ComponentProps<"button"> {
  value: string;
  onSelect?: () => void;
}

export function TimeSelect({ value, onSelect, ...props }: TimeSelectProps) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      type="button"
      data-slot="time-select"
      data-selected={isSelected}
      className={cn(
        "w-fit cursor-pointer rounded-lg border border-gray-500 bg-gray-600 px-4.5 py-2 text-gray-200 transition-colors hover:bg-gray-500",
        "disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-500",
        "data-[selected=true]:pointer-events-none data-[selected=true]:border-yellow data-[selected=true]:text-yellow",
      )}
      onClick={() => {
        setIsSelected(true);
        onSelect?.();
      }}
      {...props}
    >
      {value}
    </button>
  );
}
