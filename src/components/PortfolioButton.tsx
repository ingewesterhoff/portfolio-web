import { ButtonHTMLAttributes, forwardRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "./ui/utils";

interface PortfolioButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "unstyled";
  children: React.ReactNode;
}

export const PortfolioButton = forwardRef<
  HTMLButtonElement,
  PortfolioButtonProps
>(
  (
    { variant = "primary", className, children, ...props },
    ref,
  ) => {
    const baseStyles =
      "px-[30px] sm:px-[40px] md:px-[50px] py-[12px] sm:py-[16px] md:py-[20px] rounded-[100px] h-auto font-['Outfit',sans-serif] font-bold text-[14px] sm:text-[16px] md:text-[18px] tracking-[1.4px] sm:tracking-[1.6px] md:tracking-[1.8px] uppercase transition-all duration-300";

    const variantStyles = {
      primary:
        "bg-[#c4a9ff] hover:bg-[#E5DAFF] active:bg-[#E5DAFF] active:scale-100 text-[#261e35] shadow-[0_10px_40px_rgba(196,169,255,0.4)] hover:shadow-[0_15px_50px_rgba(196,169,255,0.6)] active:shadow-[0_15px_50px_rgba(196,169,255,0.6)] hover:scale-105",
      secondary:
        "border-2 border-[#e5daff] text-[#e5daff] hover:bg-[#e5daff] hover:text-[#261e35] active:bg-[#e5daff] active:text-[#261e35] bg-transparent shadow-[0_5px_20px_rgba(229,218,255,0.2)] hover:shadow-[0_8px_30px_rgba(229,218,255,0.4)] active:shadow-[0_8px_30px_rgba(229,218,255,0.4)]",
      ghost:
        "bg-transparent text-[#c4a9ff] hover:bg-[#c4a9ff]/10 hover:text-[#e5daff] active:bg-[#c4a9ff]/20 active:text-[#e5daff]",
      unstyled: "",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

PortfolioButton.displayName = "PortfolioButton";

// React Router Link styled as button
interface PortfolioButtonLinkProps {
  to: string;
  variant?: "primary" | "secondary" | "ghost" | "unstyled";
  children: React.ReactNode;
  className?: string;
}

export const PortfolioButtonLink = forwardRef<
  HTMLAnchorElement,
  PortfolioButtonLinkProps
>(({ to, variant = "primary", className, children }, ref) => {
  const baseStyles =
    variant === "unstyled"
      ? ""
      : "inline-block px-[30px] sm:px-[40px] md:px-[50px] py-[12px] sm:py-[16px] md:py-[20px] rounded-[100px] font-['Outfit',sans-serif] font-bold text-[14px] sm:text-[16px] md:text-[18px] tracking-[1.4px] sm:tracking-[1.6px] md:tracking-[1.8px] uppercase transition-all duration-300 text-center";

  const variantStyles = {
    primary:
      "bg-[#c4a9ff] hover:bg-[#E5DAFF] active:bg-[#E5DAFF] active:scale-100 text-[#261e35] shadow-[0_10px_40px_rgba(196,169,255,0.4)] hover:shadow-[0_15px_50px_rgba(196,169,255,0.6)] active:shadow-[0_15px_50px_rgba(196,169,255,0.6)] hover:scale-105",
    secondary:
      "border-2 border-[#e5daff] text-[#e5daff] hover:bg-[#e5daff] hover:text-[#261e35] active:bg-[#e5daff] active:text-[#261e35] bg-transparent shadow-[0_5px_20px_rgba(229,218,255,0.2)] hover:shadow-[0_8px_30px_rgba(229,218,255,0.4)] active:shadow-[0_8px_30px_rgba(229,218,255,0.4)]",
    ghost:
      "bg-transparent text-[#c4a9ff] hover:bg-[#c4a9ff]/10 hover:text-[#e5daff] active:bg-[#c4a9ff]/20 active:text-[#e5daff]",
    unstyled: "",
  };

  return (
    <Link
      to={to}
      ref={ref}
      className={cn(
        baseStyles,
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
});

PortfolioButtonLink.displayName = "PortfolioButtonLink";