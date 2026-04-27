import { CaretDownIcon, type Icon } from "@phosphor-icons/react";
import { useRef } from "react";
import { cn } from "@/utils/cn";

interface TextInputProps extends React.ComponentProps<"input"> {
  icon?: Icon;
  label?: string;
}

export function DatePicker({
  id,
  className,
  type = "date",
  icon: Icon,
  label,
  ...props
}: TextInputProps) {
  const textInputId = id || "text-input";

  const inputRef = useRef<HTMLInputElement>(null);

  function handleOpenPicker() {
    inputRef.current?.showPicker();
    inputRef.current?.focus();
  }

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={textInputId} className="font-bold text-gray-200">
          {label}
        </label>
      )}

      <button
        type="button"
        className="group flex cursor-pointer items-center gap-2 overflow-hidden rounded-lg border border-gray-500 p-3 transition-colors focus-within:border-yellow"
        onClick={handleOpenPicker}
      >
        {Icon && <Icon className="size-5 shrink-0 text-yellow" />}

        <input
          {...props}
          ref={inputRef}
          id={textInputId}
          type={type}
          className={cn(
            "w-full cursor-pointer text-base text-gray-200 outline-none placeholder:text-gray-400",
            "[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden",
            className,
          )}
        />

        <CaretDownIcon className="size-5 shrink-0 text-gray-300 transition-colors group-focus-within:text-yellow" />
      </button>
    </div>
  );
}
