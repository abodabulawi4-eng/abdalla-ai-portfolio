import { motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiSettings,
  FiTool,
  FiZap,
} from "react-icons/fi";
import { skills } from "../data/skills";

const categoryIcons = {
  "Programming Languages": FiCode,
  "AI & Data Science": FiCpu,
  "Libraries & Frameworks": FiLayers,
  "Web Development": FiZap,
  Databases: FiDatabase,
  "Tools & Platforms": FiTool,
  "Other Skills": FiSettings,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020617] px-5 py-24 text-white lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(168,85,247,0.13),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            Technical Skills
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            A focused stack for AI, data, and full-stack development.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300">
            Skills are grouped by practical usage, not dumped like a weak CV list.
            The structure highlights AI first, then the tools needed to build and
            ship complete products.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = categoryIcons[group.category] || FiCpu;

            return (
              <motion.article
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="group rounded-[2rem] border border-cyan-400/15 bg-white/[0.045] p-6 shadow-[0_0_50px_rgba(15,23,42,0.4)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.065]"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300 transition group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-black text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}