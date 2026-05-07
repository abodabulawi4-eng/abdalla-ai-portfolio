import { skills } from "../data/skills";
import SkillGroup from "../components/SkillGroup";
import SectionTitle from "../components/SectionTitle";

export default function Skills() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] px-5 pb-24 pt-36 text-white lg:px-8">
      <section className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="Technical stack built for AI, data, and full-stack systems."
          description="No progress bars, no fake percentages. Skills are grouped by real usage across AI modeling, data workflows, web systems, databases, tools, and project execution."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => (
            <SkillGroup key={group.category} group={group} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}