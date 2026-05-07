import { motion } from "framer-motion";
import {
  FiAward,
  FiCode,
  FiDatabase,
  FiExternalLink,
  FiGlobe,
  FiTerminal,
} from "react-icons/fi";

function getCertificateIcon(name) {
  const lowerName = name.toLowerCase();

  if (lowerName.includes("data")) return FiDatabase;
  if (lowerName.includes("sql")) return FiDatabase;
  if (lowerName.includes("python")) return FiTerminal;
  if (lowerName.includes("web")) return FiGlobe;
  if (lowerName.includes("coding")) return FiCode;

  return FiAward;
}

function getCertificateLevel(index) {
  if (index <= 2) return "Featured";
  return "Certificate";
}

export default function CertificateCard({ certificate, index = 0 }) {
  const Icon = getCertificateIcon(certificate.name);
  const badge = getCertificateLevel(index);

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
        "group flex h-full flex-col rounded-[1.75rem] border p-6 backdrop-blur-2xl transition",
        "focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-400/25",
        index <= 2
          ? "border-cyan-400/25 bg-cyan-400/[0.055] shadow-[0_0_55px_rgba(34,211,238,0.10)] hover:border-cyan-300/45"
          : "border-white/10 bg-white/[0.04] shadow-[0_0_45px_rgba(15,23,42,0.32)] hover:border-cyan-300/30",
        "hover:-translate-y-1 hover:bg-white/[0.06]",
      ].join(" ")}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-2xl text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
          <Icon />
        </div>

        <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-purple-200">
          {badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
          Certificate
        </p>

        <h2 className="mt-3 text-lg font-black leading-7 text-white">
          {certificate.name}
        </h2>

        <p className="mt-4 line-clamp-2 min-h-[3rem] text-sm leading-6 text-slate-400">
          {certificate.provider}
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-sm font-black text-cyan-300">
            {certificate.date}
          </p>

          <a
            href={certificate.image}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-100 outline-none transition hover:border-cyan-300/50 hover:bg-cyan-400/20 focus:ring-2 focus:ring-cyan-400/30"
          >
            View Certificate
            <FiExternalLink />
          </a>
        </div>
      </div>
    </motion.article>
  );
}