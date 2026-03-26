import type { Icon } from "@phosphor-icons/react";
import { cn } from "@/utils/cn";

interface ButtonIconProps extends React.ComponentProps<"button"> {
  icon: Icon;
}

export function ButtonIcon({
  type = "button",
  className,
  icon: Icon,
  ...props
}: ButtonIconProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        "w-fit cursor-pointer text-yellow outline-none transition-colors hover:text-yellow-dark focus:text-yellow-dark disabled:pointer-events-none disabled:opacity-30",
        className,
      )}
    >
      <Icon className="size-8" />
    </button>
  );
}
