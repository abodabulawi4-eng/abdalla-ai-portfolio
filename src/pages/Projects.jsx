import { useMemo, useState } from "react";

import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const filters = [
  "All",
  "AI",
  "Computer Vision",
  "Full-Stack",
  "Data Science",
  "Automation",
];

const groupOrder = [
  "Featured AI Projects",
  "Full-Stack Systems",
  "Additional Projects",
];

function matchesFilter(project, activeFilter) {
  if (activeFilter === "All") return true;

  const normalizedFilter = activeFilter.toLowerCase();

  const searchableText = [
    project.name,
    project.group,
    project.category,
    project.filterCategory,
    project.description,
    ...project.tags,
    ...project.technologies,
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(normalizedFilter);
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => matchesFilter(project, activeFilter));
  }, [activeFilter]);

  const groupedProjects = useMemo(() => {
    return groupOrder
      .map((group) => ({
        group,
        items: filteredProjects.filter((project) => project.group === group),
      }))
      .filter((section) => section.items.length > 0);
  }, [filteredProjects]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] px-5 pb-24 pt-36 text-white lg:px-8">
      <section className="mx-auto max-w-7xl">
        {/* Projects Hero */}
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Projects
          </p>

          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            AI-first systems,{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              intelligent automation
            </span>
            , and full-stack engineering.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            A focused collection of AI, computer vision, data science, and
            full-stack projects built around real problems, structured
            solutions, and practical technical execution.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={[
                    "rounded-full border px-5 py-3 text-sm font-black transition",
                    isActive
                      ? "border-cyan-300/45 bg-cyan-400/15 text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.16)]"
                      : "border-white/10 bg-white/[0.045] text-slate-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-100",
                  ].join(" ")}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-16 space-y-16">
          {groupedProjects.map((section) => (
            <section key={section.group}>
              <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-purple-300">
                    Project Group
                  </p>

                  <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {section.group}
                  </h2>
                </div>

                <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-200">
                  {section.items.length} Projects
                </span>
              </div>

              <div
                className={[
                  "grid gap-6",
                  section.group === "Featured AI Projects"
                    ? "lg:grid-cols-2"
                    : "md:grid-cols-2 xl:grid-cols-3",
                ].join(" ")}
              >
                {section.items.map((project, index) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    index={index}
                    onViewDetails={setSelectedProject}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-14 rounded-[2rem] border border-red-400/20 bg-red-400/[0.045] p-8 text-center">
            <h2 className="text-2xl font-black text-white">
              No projects found.
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              Change the selected filter to view available projects.
            </p>
          </div>
        )}
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}