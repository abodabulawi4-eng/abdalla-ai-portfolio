import {
  FiActivity,
  FiBarChart2,
  FiCpu,
  FiDatabase,
  FiFileText,
  FiGrid,
  FiShield,
} from "react-icons/fi";
import { motion } from "framer-motion";

const iconMap = {
  "AI Data Nexus Platform": FiBarChart2,
  "AI Motion Source Classifier": FiActivity,
  "Evidence System": FiShield,
  "Baladity Plus": FiDatabase,
  "AI-Based Report Generation System": FiFileText,
  "Full-Stack Dashboard System": FiGrid,
  "Quiz Game": FiCpu,
};

export default function ProjectCard({ project, index = 0, onViewDetails }) {
  const Icon = iconMap[project.name] || FiCpu;
  const isFeatured = project.priority === "featured";
  const isSecondary = project.priority === "secondary";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: index * 0.04,
      }}
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border backdrop-blur-2xl transition",
        "hover:-translate-y-1 hover:bg-white/[0.065]",
        isFeatured
          ? "border-cyan-400/25 bg-white/[0.055] p-7 shadow-[0_0_70px_rgba(34,211,238,0.12)] hover:border-cyan-300/45"
          : "border-white/10 bg-slate-950/65 p-6 hover:border-cyan-300/30",
        isSecondary ? "opacity-90" : "",
      ].join(" ")}
    >
      <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

      <div className="relative flex flex-1 flex-col">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div
            className={[
              "flex items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
              isFeatured ? "h-16 w-16 text-3xl" : "h-14 w-14 text-2xl",
            ].join(" ")}
          >
            <Icon />
          </div>

          <span
            className={[
              "rounded-full border px-4 py-2 text-xs font-black uppercase tracking-wider",
              isFeatured
                ? "border-cyan-400/25 bg-cyan-400/10 text-cyan-200"
                : "border-purple-400/20 bg-purple-400/10 text-purple-200",
            ].join(" ")}
          >
            {project.priority === "featured" ? "Featured" : project.group}
          </span>
        </div>

        <p className="text-sm font-bold text-cyan-300">{project.category}</p>

        <h3
          className={[
            "mt-3 font-black tracking-tight text-white",
            isFeatured ? "text-2xl" : "text-xl",
          ].join(" ")}
        >
          {project.name}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-bold text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="mt-7 inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-400/20"
        >
          View Details
        </button>
      </div>
    </motion.article>
  );
}