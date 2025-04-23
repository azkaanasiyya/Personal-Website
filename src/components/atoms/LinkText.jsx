function LinkText({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-semibold text-blue-600 hover:underline"
    >
      {children}
    </a>
  );
}
export default LinkText;
