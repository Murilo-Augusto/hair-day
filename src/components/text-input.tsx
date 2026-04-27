import type { Icon } from "@phosphor-icons/react";
import { cn } from "@/utils/cn";

interface TextInputProps extends React.ComponentProps<"input"> {
  icon?: Icon;
  label?: string;
}

export function TextInput({
  id,
  className,
  type = "text",
  icon: Icon,
  label,
  ...props
}: TextInputProps) {
  const textInputId = id || "text-input";

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={textInputId} className="font-bold text-gray-200">
          {label}
        </label>
      )}

      <label
        htmlFor={textInputId}
        className="group flex cursor-text items-center gap-2 overflow-hidden rounded-lg border border-gray-500 p-3 transition-colors focus-within:border-yellow"
      >
        {Icon && <Icon className="size-5 shrink-0 text-yellow" />}

        <input
          {...props}
          id={textInputId}
          type={type}
          className={cn(
            "w-full text-base text-gray-200 outline-none placeholder:text-gray-400",
            className,
          )}
        />
      </label>
    </div>
  );
}
