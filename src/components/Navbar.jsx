import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import { personal } from "../data/personal";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Certificates", to: "/certificates" },
  { label: "Contact", to: "/contact" },
];

const displayName = "Abdalla Abulawi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClassName = ({ isActive }) =>
    [
      "relative rounded-full px-4 py-2 text-sm font-bold transition",
      isActive
        ? "bg-cyan-400/15 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.14)]"
        : "text-slate-300 hover:bg-white/5 hover:text-white",
    ].join(" ");

  return (
    <header className="fixed left-0 top-0 z-[90] w-full border-b border-cyan-400/10 bg-[#020617]/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <NavLink
          to="/"
          className="group inline-flex items-center gap-3"
          aria-label="Go to home page"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cyan-400/30 bg-slate-900 shadow-[0_0_28px_rgba(34,211,238,0.16)]">
            <img
              src={personal.profileImage}
              alt="Abdalla Abulawi"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-white transition group-hover:text-cyan-200">
              {displayName}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              AI Developer
            </span>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl text-slate-200 transition hover:border-cyan-300/35 hover:bg-cyan-400/10 hover:text-cyan-200 lg:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-cyan-400/10 bg-[#020617]/95 px-5 py-4 backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  [
                    "rounded-2xl px-4 py-3 text-sm font-bold transition",
                    isActive
                      ? "bg-cyan-400/15 text-cyan-200"
                      : "text-slate-300 hover:bg-white/5 hover:text-white",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}