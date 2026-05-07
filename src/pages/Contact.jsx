import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

import { personal } from "../data/personal";
import ContactCard from "../components/ContactCard";

const contactItems = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: FiMail,
  },
  {
    label: "WhatsApp",
    value: personal.phone,
    href: personal.socials.whatsapp,
    icon: FiPhone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdalla-abulawi",
    href: personal.linkedin,
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/abodabulawi4-eng",
    href: personal.github,
    icon: FiGithub,
  },
  {
    label: "Location",
    value: personal.location,
    href: null,
    icon: FiMapPin,
  },
];

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] px-5 pb-24 pt-36 text-white lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            Contact
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let’s build intelligent software that solves real problems.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            For AI-powered applications, machine learning systems, dashboards,
            automation tools, full-stack platforms, or data-driven solutions,
            contact me directly through the channels listed here.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 text-sm font-black text-slate-950 shadow-[0_0_42px_rgba(34,211,238,0.25)] transition hover:bg-cyan-200"
            >
              <FiMail />
              Send Email
            </a>

            <a
              href={personal.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400/30 bg-white/5 px-7 py-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/10"
            >
              <FiPhone />
              WhatsApp
            </a>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {contactItems.map((item, index) => (
            <ContactCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}