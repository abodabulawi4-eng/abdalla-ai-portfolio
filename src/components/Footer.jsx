import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { personal } from "../data/personal";

const footerLinks = [
  {
    label: "LinkedIn",
    href: personal.socials.linkedin,
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    href: personal.socials.github,
    icon: FiGithub,
  },
  {
    label: "Email",
    href: personal.socials.email,
    icon: FiMail,
  },
  {
    label: "WhatsApp",
    href: personal.socials.whatsapp,
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/10 bg-[#020617]/95 px-5 py-10 text-white backdrop-blur-2xl lg:px-8">
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-3"
            aria-label="Go to home page"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-black text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.18)]">
              AI
            </span>

            <span className="text-lg font-black tracking-wide text-white">
              {personal.name}
            </span>
          </Link>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            AI Developer building intelligent software systems.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex items-center gap-3">
            {footerLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] text-lg text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <p className="text-sm text-slate-500">
            © 2026 {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}