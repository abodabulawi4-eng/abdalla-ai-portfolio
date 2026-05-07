import { FiAward, FiCode, FiDatabase, FiLayers } from "react-icons/fi";

import { certificates } from "../data/certificates";
import CertificateCard from "../components/CertificateCard";
import SectionTitle from "../components/SectionTitle";

const certificateHighlights = [
  {
    label: "Certificates",
    value: certificates.length,
    icon: FiAward,
  },
  {
    label: "Python & AI",
    value: "Core",
    icon: FiCode,
  },
  {
    label: "Data Science",
    value: "Focus",
    icon: FiDatabase,
  },
  {
    label: "SQL & Web",
    value: "Support",
    icon: FiLayers,
  },
];

export default function Certificates() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] px-5 pb-24 pt-36 text-white lg:px-8">
      <section className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Certificates"
          title="Verified learning in Python,"
          highlight="data science, SQL,"
          afterHighlight=" and development."
          description="A focused set of certificates supporting my work in AI, data analysis, programming, and software development."
          align="center"
          maxWidth="max-w-6xl"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certificateHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-cyan-400/15 bg-white/[0.04] p-6 text-center backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300">
                  <Icon />
                </div>

                <p className="mt-5 text-2xl font-black text-cyan-300">
                  {item.value}
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="mx-auto mb-9 max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-purple-300">
              Learning Path
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
              Featured certificates first.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400">
              Data Science, Python Essentials, and SQL are placed first because
              they support the AI and data direction of the portfolio.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.name}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}