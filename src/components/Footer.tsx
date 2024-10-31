import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vicvenpet/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/vicvenpet?tab=repositories', label: 'GitHub' },
    { icon: IoMdMail, href: 'mailto:hello@vicvenpet.xyz', label: 'Email' },
  ];

  return (
    <footer className="bg-zinc-900 py-8 px-6 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">
            © {currentYear} - Víctor Petkov
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}