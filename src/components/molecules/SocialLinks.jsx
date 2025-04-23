function SocialLinks() {
  const links = [
    { label: 'LinkedIn', href: '#' },
    { label: 'Dribbble', href: '#' },
    { label: 'Instagram', href: '#' },
  ];

  return (
    <div className="flex gap-2 text-center text-sm text-neutral-50 md:text-right">
      {links.map((link, index) => (
        <span key={index} className="flex items-center gap-1">
          <a href={link.href} className="hover:underline">
            {link.label}
          </a>
          {index < links.length - 1 && <span>/</span>}
        </span>
      ))}
    </div>
  );
}

export default SocialLinks;
