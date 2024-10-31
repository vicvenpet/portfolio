import React from 'react';

interface LinkInlineProps {
  href: string;
  children: React.ReactNode;
}

const LinkInline: React.FC<LinkInlineProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      role="link"
      className="inline-flex items-center text-white hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default LinkInline;
