import React from "react";

type NavButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function NavButton({ className = "", children, ...rest }: NavButtonProps) {
  return (
    <button className={`h-[25px] overflow-clip flex navButton  ${className}`} {...rest}>
      <div className="flex flex-col items-center">
        <div className="h-[25px] navText">
          <span className="h-fit my-auto">{children}</span>
        </div>
        <div className="h-[25px] navText">
          <span className="h-fit my-auto">{children}</span>
        </div>
      </div>
    </button>
  );
}
