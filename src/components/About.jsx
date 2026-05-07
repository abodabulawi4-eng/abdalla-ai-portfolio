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
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            AI developer focused on practical intelligent systems.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            {personal.about.intro}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
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
                className="rounded-[2rem] border border-cyan-400/15 bg-white/[0.045] p-7 shadow-[0_0_50px_rgba(15,23,42,0.45)] backdrop-blur-2xl transition hover:border-cyan-300/30 hover:bg-white/[0.065]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
                  <Icon />
                </div>

                <h3 className="text-xl font-black text-white">{card.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {card.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-3xl font-black text-cyan-300">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-300">
                      {stat.label}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/10 text-xl text-purple-300">
                    <Icon />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}