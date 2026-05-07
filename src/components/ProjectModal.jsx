import { FiX, FiCpu, FiCheckCircle, FiTool, FiZap } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[80] flex items-center justify-center px-5 py-8">
        <motion.button
          type="button"
          aria-label="Close project details"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 28, scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-cyan-400/20 bg-[#050816]/95 p-6 shadow-[0_0_80px_rgba(34,211,238,0.16)] backdrop-blur-2xl md:p-8"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-xl text-slate-300 transition hover:border-cyan-300/35 hover:bg-cyan-400/10 hover:text-cyan-200"
          >
            <FiX />
          </button>

          <div className="pr-12">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
              {project.group}
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
              {project.name}
            </h2>

            <p className="mt-3 text-sm font-bold text-purple-300">
              {project.category}
            </p>

            <p className="mt-6 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
              {project.description}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-red-400/15 bg-red-400/[0.04] p-5">
              <div className="mb-4 flex items-center gap-3">
                <FiCpu className="text-2xl text-red-300" />
                <h3 className="text-lg font-black text-white">Problem</h3>
              </div>

              <p className="text-sm leading-7 text-slate-300">
                {project.problem}
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-cyan-400/15 bg-cyan-400/[0.05] p-5">
              <div className="mb-4 flex items-center gap-3">
                <FiCheckCircle className="text-2xl text-cyan-300" />
                <h3 className="text-lg font-black text-white">Solution</h3>
              </div>

              <p className="text-sm leading-7 text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-purple-400/15 bg-purple-400/[0.05] p-5">
            <div className="mb-4 flex items-center gap-3">
              <FiZap className="text-2xl text-purple-300" />
              <h3 className="text-lg font-black text-white">
                Future AI Enhancements
              </h3>
            </div>

            <p className="text-sm leading-7 text-slate-300">
              {project.future}
            </p>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
            <div className="mb-5 flex items-center gap-3">
              <FiTool className="text-2xl text-cyan-300" />
              <h3 className="text-lg font-black text-white">Technologies</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-bold text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}