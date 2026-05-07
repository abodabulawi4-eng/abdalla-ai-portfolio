import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#020617] px-5 py-24 text-white lg:px-8"
    >
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            Certificates
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Verified learning across Python, data science, SQL, and development.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300">
            Certificates are presented as clean professional cards with direct
            access to the original certificate image.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.04,
              }}
              className="group flex h-full flex-col rounded-[1.75rem] border border-cyan-400/15 bg-white/[0.045] p-6 shadow-[0_0_45px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.065]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
                <FiAward />
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="text-lg font-black leading-7 text-white">
                  {certificate.name}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {certificate.provider}
                </p>

                <p className="mt-4 text-sm font-bold text-cyan-300">
                  {certificate.date}
                </p>

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:border-cyan-300/45 hover:bg-cyan-400/20"
                >
                  View Certificate
                  <FiExternalLink />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}