import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
  isScrolled?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  href,
  isScrolled = false,
}: ButtonProps) => {
  const baseClasses = `
    flex items-center justify-center
    text-center
    transition-all duration-300 ease-in-out
    font-manrope
    cursor-pointer
  `;

  const variants = {
    primary: `
      w-full
      h-[60px]
      rounded-full
      bg-lime
      font-medium
      text-base
      text-black
      shadow-[0px_6px_14px_0px_rgba(173,216,77,0.41)]
      hover:opacity-90
    `,

    secondary: `
      h-[35px]
      px-6
      rounded-full
      border
      font-medium
      text-sm
      
      ${
        isScrolled
          ? `
            bg-black
            border-black
            text-white
            hover:bg-transparent
            hover:text-black
          `
          : `
            bg-transparent
            border-black lg:border-white
            text-black lg:text-white
            hover:bg-white
            hover:text-black
          `
      }
    `,
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
};

export default Button;
