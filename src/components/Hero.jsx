import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { personal } from "../data/personal";

const socialLinks = [
  {
    label: "LinkedIn",
    href: personal.socials.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: personal.socials.github,
    icon: FaGithub,
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

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#020617] px-5 pt-32 text-white lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.14),transparent_35%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.12)]">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            {personal.title}
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            {personal.hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {personal.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.28)] transition hover:bg-cyan-200"
            >
              {personal.hero.primaryCta}
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/25 bg-white/5 px-7 py-4 text-sm font-bold text-cyan-100 transition hover:bg-cyan-400/10"
            >
              {personal.hero.secondaryCta}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.label}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/25 via-blue-500/10 to-purple-500/25 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-2xl">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
              <img
                src={personal.profileImage}
                alt="Abdalla Hani Abulawi"
                className="h-[420px] w-full object-cover object-center"
              />
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-cyan-400/15 bg-slate-950/70 p-5">
              <p className="text-sm font-medium text-cyan-300">
                {personal.name}
              </p>
              <p className="mt-2 text-2xl font-black text-white">
                {personal.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {personal.bio}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}