import { clsx } from "clsx";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  variant?: "outline" | "contained" | "default";
};

const Button = ({ className, variant = "default", ...props }: Props) => {
  return (
    <button
      {...props}
      className={clsx(className, "rounded-xl p-2", {
        "bg-slate-100  border-zinc-900 border-2  hover:bg-zinc-50 transition-colors duration-200  dark:bg-transparent dark:border-zinc-100":
          variant === "outline",
        "bg-black text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300 transition-colors duration-200":
          variant === "contained",
        "dark:bg-transparent ": variant === "default",
      })}
    />
  );
};
export default Button;
