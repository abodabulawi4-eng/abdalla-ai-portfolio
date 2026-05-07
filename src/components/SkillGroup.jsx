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

const iconMap = {
  Programming: FiCode,
  "AI & Data Science": FiCpu,
  "Frameworks & Libraries": FiLayers,
  "Web Development": FiZap,
  Databases: FiDatabase,
  Tools: FiTool,
  "Other Skills": FiSettings,
};

export default function SkillGroup({ group, index = 0 }) {
  const Icon = iconMap[group.category] || FiCpu;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: index * 0.05,
      }}
      className="group rounded-[2rem] border border-cyan-400/15 bg-white/[0.045] p-6 shadow-[0_0_55px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.065]"
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-2xl text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
          <Icon />
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-purple-300">
            Category
          </p>

          <h2 className="mt-1 text-xl font-black text-white">
            {group.category}
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.items.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}