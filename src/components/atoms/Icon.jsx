function Icon({ src, alt, className }) {
  return <img src={src} alt={alt} className={`h-6 w-6 ${className}`} />;
}
export default Icon;
