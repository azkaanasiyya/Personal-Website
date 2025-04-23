function Heading({ children, className = '' }) {
  return (
    <h1
      className={`bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-7xl font-semibold text-transparent ${className}`}
    >
      {children}
    </h1>
  );
}

export default Heading;
