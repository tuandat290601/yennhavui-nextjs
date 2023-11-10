import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@/utils";
const IconVariants = cva(
  "border-0 margin-0 outline-none p-0 align-middle inline-flex items-center justify-center overflow-hidden relative w-[90%] h-[90%] ",
  {
    variants: {
      size: {
        xs: "w-3 h-3 min-h-[12px] min-w-[12px]",
        sm: "w-4 h-4 min-h-[16px] min-w-[16px]",
        md: "w-5 h-5 min-h-[20px] min-w-[20px]",
        lg: "w-6 h-6 min-h-[24px] min-w-[24px]",
        xl: "w-7 h-7 min-h-[28px] min-w-[28px]",
      },
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

interface Props
  extends VariantProps<typeof IconVariants>,
    HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Icon({ size, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "[&_svg]:flex [&_svg]:items-center [&_svg]:justify-center",
        IconVariants({ size, className })
      )}
      {...props}
    />
  );
}
export default Icon;
