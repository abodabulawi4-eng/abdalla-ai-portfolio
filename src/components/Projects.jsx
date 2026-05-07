import { motion } from "framer-motion";
import {
  FiActivity,
  FiBarChart2,
  FiCpu,
  FiDatabase,
  FiFileText,
  FiGrid,
  FiShield,
} from "react-icons/fi";
import { projects } from "../data/projects";

const projectIcons = {
  "AI Data Nexus Platform": FiBarChart2,
  "AI Motion Source Classifier": FiActivity,
  "Evidence System": FiShield,
  "Baladity Plus": FiDatabase,
  "AI-Based Report Generation System": FiFileText,
  "Full-Stack Dashboard System": FiGrid,
  "Quiz Game": FiCpu,
};

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.priority === "featured"
  );

  const secondaryProjects = projects.filter(
    (project) => project.priority !== "featured"
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030712] px-5 py-24 text-white lg:px-8"
    >
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.45em] text-cyan-300">
            Projects
          </p>

          <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI-first systems,{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              intelligent automation
            </span>
            , and full-stack engineering.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            A focused collection of AI, computer vision, data science, and
            full-stack projects built around real problems, structured
            solutions, and practical technical execution.
          </p>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
            {[
              "AI",
              "Machine Learning",
              "Computer Vision",
              "Full-Stack",
              "Data Science",
              "Automation",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-400/20 bg-white/[0.04] px-5 py-3 text-sm font-bold text-slate-200 shadow-[0_0_25px_rgba(34,211,238,0.06)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const Icon = projectIcons[project.name] || FiCpu;

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-white/[0.045] p-7 shadow-[0_0_55px_rgba(15,23,42,0.45)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.065]"
              >
                <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

                <div className="relative">
                  <div className="mb-6 flex items-start justify-between gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-3xl text-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.12)]">
                      <Icon />
                    </div>

                    <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-200">
                      Featured
                    </span>
                  </div>

                  <p className="text-sm font-bold text-cyan-300">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
                    {project.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-semibold text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {secondaryProjects.map((project, index) => {
            const Icon = projectIcons[project.name] || FiCpu;

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.045]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
                  <Icon />
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-black text-white">
                  {project.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 7).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-300"
                    >
                      {tech}
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