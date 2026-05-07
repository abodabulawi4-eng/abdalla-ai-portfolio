import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMail,
  FiCpu,
  FiDatabase,
  FiCode,
  FiActivity,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { personal } from "../data/personal";
import { projects } from "../data/projects";

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

const focusPreview = [
  {
    title: "Machine Learning",
    description:
      "Building models for prediction, classification, and data-driven decision support.",
    icon: FiCpu,
  },
  {
    title: "Computer Vision",
    description:
      "Developing systems that analyze images, videos, motion, and visual patterns.",
    icon: FiActivity,
  },
  {
    title: "Data Science",
    description:
      "Cleaning, analyzing, visualizing, and modeling data to extract useful insights.",
    icon: FiDatabase,
  },
  {
    title: "Full-Stack AI",
    description:
      "Connecting AI features with dashboards, APIs, automation, and usable software.",
    icon: FiCode,
  },
];

const featuredProjects = projects
  .filter((project) => project.priority === "featured")
  .slice(0, 3);

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.14)]">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
            AI Developer
          </div>

          <p className="text-xs font-black uppercase tracking-[0.3em] text-purple-300 sm:text-sm">
            Abdalla Hani Abulawi
          </p>

          <h1 className="mt-5 max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.9rem]">
            Building AI-powered software for{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              real-world problems.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            I develop machine learning systems, computer vision solutions, data
            tools, and full-stack applications that turn ideas into practical
            software.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 text-sm font-black text-slate-950 shadow-[0_0_36px_rgba(34,211,238,0.25)] transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              View Projects
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 px-7 py-4 text-sm font-black text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-400/10"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-7 flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] text-lg text-slate-300 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-cyan-400/22 via-blue-500/10 to-purple-500/22 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.4rem] border border-cyan-400/25 bg-white/[0.06] p-4 shadow-[0_0_70px_rgba(34,211,238,0.11)] backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10" />

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950">
              <img
                src={personal.profileImage}
                alt="Abdalla Hani Abulawi"
                className="h-[400px] w-full object-cover object-center sm:h-[440px]"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-[2rem] border border-cyan-400/15 bg-white/[0.045] p-7 backdrop-blur-2xl"
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">
              Introduction
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
              Practical AI systems built beyond experiments.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              {personal.bio}
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusPreview.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-400/10"
                >
                  <Icon className="text-3xl text-cyan-300" />

                  <h3 className="mt-5 text-lg font-black">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">
              Featured Work
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
              Featured AI and full-stack systems.
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/20"
          >
            View All Projects
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="rounded-[2rem] border border-cyan-400/15 bg-white/[0.045] p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.065]"
            >
              <FiDatabase className="text-3xl text-cyan-300" />

              <p className="mt-5 text-xs font-black uppercase tracking-wider text-purple-300">
                {project.category}
              </p>

              <h3 className="mt-3 text-xl font-black">{project.name}</h3>

              <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-bold text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/[0.04] to-purple-500/10 p-8 text-center backdrop-blur-2xl md:p-12">
          <h2 className="text-2xl font-black tracking-tight sm:text-4xl">
            Need a practical AI-powered system?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            Contact me for machine learning systems, dashboards, automation
            tools, data platforms, or full-stack AI applications.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
          >
            Contact Me
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}