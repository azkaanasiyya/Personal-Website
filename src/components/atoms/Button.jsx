function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'h-[48px] rounded-full px-[24px] py-[8px] text-sm font-medium';
  const variants = {
    primary: `bg-primary-500 text-white hover:bg-primary-400`,
    outlined: `border-2 border-primary-400 text-white hover:bg-primary-400`,
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
