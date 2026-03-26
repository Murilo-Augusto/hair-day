import type { Icon } from "@phosphor-icons/react";
import { cn } from "@/utils/cn";

interface TextInputProps extends React.ComponentProps<"input"> {
  icon?: Icon;
}

export function TextInput({
  id,
  className,
  icon: Icon,
  ...props
}: TextInputProps) {
  const textInputId = id || "text-input";

  return (
    <label
      htmlFor={textInputId}
      className="group flex cursor-text items-center gap-2 overflow-hidden rounded-lg border border-gray-500 p-3 transition-colors focus-within:border-yellow"
    >
      {Icon && <Icon className="size-5 text-yellow" />}

      <input
        {...props}
        id={textInputId}
        type="text"
        className={cn(
          "w-full text-base text-gray-200 outline-none placeholder:text-gray-400",
          className,
        )}
      />
    </label>
  );
}
