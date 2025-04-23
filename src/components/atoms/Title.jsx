function Title({ children, className }) {
  return (
    <h3
      className={`bg-gradient-to-r from-primary-400 to-primary-100 bg-clip-text text-4xl font-semibold text-transparent ${className}`}
    >
      {children}
    </h3>
  );
}
export default Title;
