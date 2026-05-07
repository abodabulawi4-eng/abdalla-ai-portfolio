import { motion } from "framer-motion";
import {
  FiCpu,
  FiMapPin,
  FiTarget,
  FiUserCheck,
  FiLayers,
  FiCode,
  FiDatabase,
  FiZap,
  FiAward,
} from "react-icons/fi";

import { personal } from "../data/personal";
import { focusAreas } from "../data/focusAreas";
import { certificates } from "../data/certificates";

const stats = [
  {
    label: "AI & Data Science Graduate",
    icon: FiUserCheck,
  },
  {
    label: "Full-Stack AI Projects",
    icon: FiCode,
  },
  {
    label: "Machine Learning Focus",
    icon: FiTarget,
  },
  {
    label: "Based in Jordan",
    icon: FiMapPin,
  },
];

const iconMap = {
  cpu: FiCpu,
  layers: FiLayers,
  target: FiTarget,
  code: FiCode,
  database: FiDatabase,
  zap: FiZap,
};

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] px-5 pb-24 pt-36 text-white lg:px-8">
      <section className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            About
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Building intelligent software with AI, data, and clean system design.
          </h1>

          <p className="mt-7 text-base leading-8 text-slate-300 sm:text-lg">
            {personal.about.intro}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                className="rounded-[1.6rem] border border-cyan-400/15 bg-white/[0.045] p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.065]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-2xl text-cyan-300">
                  <Icon />
                </div>

                <h2 className="mt-5 text-lg font-black leading-7 text-white">
                  {stat.label}
                </h2>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-[2rem] border border-cyan-400/15 bg-white/[0.045] p-7 backdrop-blur-2xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-purple-300">
              Education
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight">
              {personal.university}
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <p>
                Major:{" "}
                <span className="font-bold text-cyan-200">
                  {personal.major}
                </span>
              </p>

              <p>
                Graduation Status:{" "}
                <span className="font-bold text-cyan-200">
                  {personal.graduationStatus}
                </span>
              </p>

              <p>
                Focus: machine learning, data science, computer vision,
                automation, and full-stack intelligent applications.
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300">
                  <FiAward />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
                    Certificates
                  </p>
                  <h3 className="text-lg font-black text-white">
                    Professional Learning
                  </h3>
                </div>
              </div>

              <div className="grid gap-3">
                {certificates.map((certificate) => (
                  <div
                    key={certificate.name}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3"
                  >
                    <p className="text-sm font-bold text-slate-200">
                      {certificate.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {focusAreas.map((area, index) => {
              const Icon = iconMap[area.icon] || FiCpu;

              return (
                <motion.article
                  key={area.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: index * 0.04,
                  }}
                  className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-400/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300">
                    <Icon />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-white">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {area.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}