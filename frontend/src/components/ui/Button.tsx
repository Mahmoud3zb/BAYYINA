import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 active:scale-[0.98] cursor-pointer';

  const variantStyles = {
    primary: 'bg-[#104263] hover:bg-[#0c334d] text-white border-0 shadow-none',
    secondary: 'bg-white hover:bg-slate-50 text-[#104263] border border-slate-200',
    outline: 'border-[1.5px] border-[#104263] text-[#104263] hover:bg-[#104263] hover:text-white bg-transparent',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3 text-[15px] sm:text-base gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
