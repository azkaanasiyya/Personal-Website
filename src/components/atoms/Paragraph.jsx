function Paragraph({ children, className }) {
  return <p className={`text-base text-neutral-200 ${className}`}>{children}</p>;
}
export default Paragraph;
