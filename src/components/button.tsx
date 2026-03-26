import { cn } from "@/utils/cn"

interface ButtonProps extends React.ComponentProps<"button"> {}

export function Button({ type = "button", className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-lg border-2 border-transparent bg-yellow px-6 py-4.5 font-bold text-gray-900 text-sm uppercase outline-none transition-colors hover:border-yellow-light focus:ring-2 focus:ring-yellow-light disabled:pointer-events-none disabled:opacity-30",
        className,
      )}
    />
  )
}
