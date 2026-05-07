import { motion } from "framer-motion";
import { FiCpu, FiMapPin, FiTarget, FiUserCheck } from "react-icons/fi";
import { personal } from "../data/personal";

const aboutCards = [
  {
    icon: FiUserCheck,
    title: "Education",
    text: personal.about.education,
  },
  {
    icon: FiCpu,
    title: "AI Focus",
    text: personal.about.focus,
  },
];

const statIcons = [FiCpu, FiTarget, FiUserCheck, FiMapPin];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030712] px-5 py-24 text-white lg:px-8"
    >
      <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            About
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building intelligent software with{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI, data, and clean system design.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {personal.about.intro}
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                className="group rounded-[2rem] border border-cyan-400/15 bg-white/[0.045] p-7 text-center shadow-[0_0_50px_rgba(15,23,42,0.45)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.065]"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
                  <Icon />
                </div>

                <h3 className="text-xl font-black text-white">{card.title}</h3>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-300">
                  {card.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {personal.stats.map((stat, index) => {
            const Icon = statIcons[index] || FiCpu;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.04]"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300">
                  <Icon />
                </div>

                <p className="text-2xl font-black text-cyan-300">
                  {stat.value}
                </p>

                <p className="mt-3 text-sm font-bold text-slate-300">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}