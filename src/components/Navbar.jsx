import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { personal } from "../data/personal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-400/10 bg-[#050816]/80 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Go to home section"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-black text-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.25)]">
            AI
          </span>
          <span className="text-lg font-bold tracking-wide text-white transition group-hover:text-cyan-300">
            {personal.brandName}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.15)] transition hover:border-cyan-300 hover:bg-cyan-400/20 lg:inline-flex"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-white/5 text-xl text-white transition hover:bg-cyan-400/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-cyan-400/10 bg-[#050816]/95 px-5 pb-5 pt-2 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-center text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}