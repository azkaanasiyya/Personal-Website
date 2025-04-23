function Text({ children, className = '' }) {
    return <p className={`text-white ${className}`}>{children}</p>;
  }
  
export default Text;
  