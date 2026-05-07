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
      <section className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-6xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Contact
          </p>

          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Let’s build{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              intelligent software
            </span>{" "}
            that solves real problems.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            For AI-powered applications, machine learning systems, dashboards,
            automation tools, full-stack platforms, or data-driven solutions,
            contact me directly through the channels listed below.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item, index) => (
            <ContactCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}