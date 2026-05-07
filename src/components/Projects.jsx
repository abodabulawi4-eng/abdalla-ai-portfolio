import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiActivity,
  FiBarChart2,
  FiCpu,
  FiDatabase,
  FiFileText,
  FiGrid,
  FiLayers,
  FiShield,
  FiX,
  FiZap,
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

const filters = ["All", "AI", "Computer Vision", "Full-Stack", "Data Science", "Automation"];

const getGroup = (project) => {
  if (project.name === "AI Data Nexus Platform" || project.name === "AI Motion Source Classifier") {
    return "Featured AI Projects";
  }

  if (project.name === "Quiz Game") {
    return "Additional Projects";
  }

  return "Full-Stack Systems";
};

const groupOrder = ["Featured AI Projects", "Full-Stack Systems", "Additional Projects"];

const matchesFilter = (project, activeFilter) => {
  if (activeFilter === "All") return true;

  const query = activeFilter.toLowerCase();
  const text = [project.name, project.category, project.description, ...project.technologies]
    .join(" ")
    .toLowerCase();

  if (query === "full-stack") {
    return text.includes("full-stack") || text.includes("react") || text.includes("node") || text.includes("express");
  }

  if (query === "ai") {
    return text.includes("ai") || text.includes("machine learning") || text.includes("deep learning");
  }

  return text.includes(query);
};

const getProblem = (project) => {
  if (project.name === "AI Data Nexus Platform") {
    return "Raw datasets require repeated cleaning, modeling, visualization, and reporting before they become useful for decision-making.";
  }
  if (project.name === "AI Motion Source Classifier") {
    return "Video motion sources are hard to classify with simple frame-based logic because motion behavior changes over time.";
  }
  if (project.name === "Evidence System") {
    return "Evidence records need secure storage, restricted access, traceability, and structured report generation.";
  }
  if (project.name === "Baladity Plus") {
    return "Citizen service requests and complaints become slow and disorganized when handled manually.";
  }
  if (project.name === "AI-Based Report Generation System") {
    return "Manual report creation is slow, inconsistent, and hard to standardize across technical or administrative systems.";
  }
  if (project.name === "Full-Stack Dashboard System") {
    return "Administrative systems need a central interface to manage users, records, reports, and system activity.";
  }
  return "Traditional quiz apps often lack personalization, learning insight, and adaptive educational behavior.";
};

const getFuture = (project) => {
  if (project.name === "AI Data Nexus Platform") {
    return "Automated model recommendation, intelligent feature engineering, natural-language dataset querying, and stronger forecasting workflows.";
  }
  if (project.name === "AI Motion Source Classifier") {
    return "Real-time surveillance support, anomaly detection, multi-object tracking, and advanced motion behavior analysis.";
  }
  if (project.name === "Evidence System") {
    return "Evidence classification, case pattern detection, anomaly alerts, and intelligent report insights.";
  }
  if (project.name === "Baladity Plus") {
    return "Complaint classification, priority prediction, public service analytics, and automated response suggestions.";
  }
  if (project.name === "AI-Based Report Generation System") {
    return "AI-generated summaries, insight extraction, natural-language report writing, and recommendation-based reporting.";
  }
  if (project.name === "Full-Stack Dashboard System") {
    return "Predictive analytics, automated alerts, usage-pattern analysis, and intelligent admin recommendations.";
  }
  return "Adaptive difficulty, question recommendation, user-performance analysis, and learning-pattern tracking.";
};

const summaryStats = [
  { label: "Total Projects", value: projects.length, icon: FiLayers },
  { label: "Featured AI Projects", value: 2, icon: FiCpu },
  { label: "Full-Stack Systems", value: 4, icon: FiDatabase },
  { label: "Certificates", value: 8, icon: FiShield },
];

const philosophyCards = [
  {
    title: "No fake demos",
    description: "Projects are presented through real scope, technical direction, and practical execution.",
    icon: FiZap,
  },
  {
    title: "AI-first direction",
    description: "The strongest work focuses on data science, machine learning, computer vision, and automation.",
    icon: FiActivity,
  },
  {
    title: "Built for clarity",
    description: "Every project opens clear details: problem, solution, technologies, and future AI enhancements.",
    icon: FiBarChart2,
  },
];

function ProjectCard({ project, index, onOpen }) {
  const Icon = projectIcons[project.name] || FiCpu;
  const group = getGroup(project);
  const isFeatured = group === "Featured AI Projects";
  const isSecondary = group === "Additional Projects";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.48, ease: "easeOut", delay: index * 0.04 }}
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border backdrop-blur-2xl transition duration-300",
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
            {isFeatured ? "Featured" : group}
          </span>
        </div>

        <p className="text-sm font-bold text-cyan-300">{project.category}</p>

        <h3 className={["mt-3 font-black tracking-tight text-white", isFeatured ? "text-2xl" : "text-xl"].join(" ")}>
          {project.name}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, isFeatured ? 10 : 7).map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-bold text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-7 inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-400/20"
        >
          View Details
        </button>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const Icon = projectIcons[project.name] || FiCpu;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.article
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(event) => event.stopPropagation()}
          className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-cyan-300/20 bg-[#050b18] p-6 shadow-[0_0_90px_rgba(34,211,238,0.12)] sm:p-8"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
            aria-label="Close project details"
          >
            <FiX />
          </button>

          <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-3xl text-cyan-300">
            <Icon />
          </div>

          <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">{project.category}</p>
          <h3 className="mt-4 pr-10 text-3xl font-black tracking-tight text-white sm:text-4xl">{project.name}</h3>
          <p className="mt-5 text-base leading-8 text-slate-300">{project.description}</p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
              <h4 className="font-black text-white">Problem</h4>
              <p className="mt-3 text-sm leading-7 text-slate-400">{getProblem(project)}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
              <h4 className="font-black text-white">Solution</h4>
              <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
              <h4 className="font-black text-white">Future AI Enhancements</h4>
              <p className="mt-3 text-sm leading-7 text-slate-400">{getFuture(project)}</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-black text-white">Technologies</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-2 text-xs font-bold text-cyan-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter]
  );

  const groupedProjects = useMemo(
    () =>
      groupOrder
        .map((group) => ({
          group,
          items: filteredProjects.filter((project) => getGroup(project) === group),
        }))
        .filter((section) => section.items.length > 0),
    [filteredProjects]
  );

  return (
    <section id="projects" className="relative overflow-hidden bg-[#030712] px-5 py-24 text-white lg:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_28%),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:auto,auto,72px_72px,72px_72px]" />
        <div className="absolute right-[-8rem] top-24 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-24 left-[-10rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-black uppercase tracking-[0.36em] text-cyan-300">Home / Projects</p>
            <p className="mt-10 text-sm font-black uppercase tracking-[0.45em] text-cyan-300">Projects</p>

            <h2 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              AI-first systems,
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                intelligent automation,
              </span>
              and full-stack engineering.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A focused collection of AI, computer vision, data science, and full-stack projects built around real problems, structured solutions, and practical technical execution.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;
                const count = projects.filter((project) => matchesFilter(project, filter)).length;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={[
                      "group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-black transition duration-300",
                      isActive
                        ? "border-cyan-300/60 bg-cyan-400/20 text-cyan-50 shadow-[0_0_36px_rgba(34,211,238,0.22)]"
                        : "border-white/10 bg-white/[0.045] text-slate-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-100 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]",
                    ].join(" ")}
                  >
                    <span>{filter}</span>
                    <span className={isActive ? "rounded-full bg-white/15 px-2 py-0.5 text-[11px] text-white" : "rounded-full bg-slate-950/70 px-2 py-0.5 text-[11px] text-slate-400 group-hover:text-cyan-100"}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-cyan-300/20 bg-white/[0.055] p-6 shadow-[0_0_80px_rgba(15,23,42,0.45)] backdrop-blur-2xl sm:p-7">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-purple-200">Project Index</p>
                <h3 className="mt-4 text-2xl font-black tracking-tight text-white">Real technical work, not placeholder buttons.</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  No fake GitHub or demo links. Every card opens a real project overview with problem, solution, technologies, and future AI enhancements.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {summaryStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 transition hover:border-cyan-300/30 hover:bg-cyan-400/10">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-3xl font-black text-white">{stat.value}</span>
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300"><Icon /></span>
                        </div>
                        <p className="mt-3 text-xs font-black uppercase tracking-wider text-slate-400">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {philosophyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300"><Icon /></div>
                <h3 className="text-base font-black text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 space-y-14">
          {groupedProjects.map((section) => (
            <div key={section.group}>
              <div className="mb-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-purple-300">Project Group</p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">{section.group}</h3>
                </div>
                <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-200">
                  {section.items.length} {section.items.length === 1 ? "Project" : "Projects"}
                </span>
              </div>

              <div className={section.group === "Featured AI Projects" ? "grid gap-6 lg:grid-cols-2" : "grid gap-6 md:grid-cols-2 xl:grid-cols-3"}>
                {section.items.map((project, index) => (
                  <ProjectCard key={project.name} project={project} index={index} onOpen={setSelectedProject} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
