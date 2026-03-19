"use client";

type UtilityTextButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export default function UtilityTextButton({
  children,
  onClick,
  className = "",
}: UtilityTextButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`theme-footer-link theme-utility-hover theme-utility-text hover:scale-110 transform transition-all duration-200 ease-out relative group inline-block cursor-pointer ${className}`.trim()}
    >
      {children}
      <span className="theme-utility-underline absolute -bottom-0.5 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </button>
  );
}
