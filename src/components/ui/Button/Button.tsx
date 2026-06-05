'use client'

import { ButtonHTMLAttributes } from "react";
import s from "./Button.module.scss";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  className?: string;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  white?: boolean;
  target?: string;
  rel?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, href='', target, rel, onClick, white=false, children, ...rest }: ButtonProps) => {
  if (href) return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${s.button} ${white ? s.whiteBtn : ""} ${className || ""}`}
    >
      {children}
    </Link>
  )

  return (
    <button
      className={`${s.button} ${white ? s.whiteBtn : ""} ${className || ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
