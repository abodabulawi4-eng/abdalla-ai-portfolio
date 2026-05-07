import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

export default function CertificateCard({ certificate, index = 0 }) {
  return (
    <motion.a
      href={certificate.image}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: index * 0.04,
      }}
      className="group flex h-full min-h-[250px] flex-col rounded-[2rem] border border-cyan-400/15 bg-white/[0.04] p-6 shadow-[0_0_55px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/[0.07]"
      aria-label={`Open ${certificate.name} certificate`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-3xl text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.14)] transition group-hover:scale-105 group-hover:border-cyan-300/45 group-hover:bg-cyan-400/15">
          <FiAward />
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm text-slate-400 transition group-hover:border-cyan-300/35 group-hover:text-cyan-200">
          <FiExternalLink />
        </div>
      </div>

      <div className="mt-8 flex flex-1 flex-col">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-300">
          Certificate
        </p>

        <h2 className="mt-3 text-lg font-black leading-7 text-white transition group-hover:text-cyan-100">
          {certificate.name}
        </h2>

        <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
          {certificate.provider}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <p className="text-sm font-black text-cyan-300">
            {certificate.date}
          </p>

          <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-100">
            Open
          </span>
        </div>
      </div>
    </motion.a>
  );
}