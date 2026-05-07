import { motion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  afterHighlight = "",
  description,
  align = "left",
  maxWidth = "max-w-4xl",
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={[maxWidth, isCenter ? "mx-auto text-center" : ""].join(" ")}
    >
      {eyebrow && (
        <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
          {eyebrow}
        </p>
      )}

      <h1 className="mx-auto mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
        {afterHighlight}
      </h1>

      {description && (
        <p
          className={[
            "mt-8 text-base leading-8 text-slate-300 sm:text-lg",
            isCenter ? "mx-auto max-w-3xl" : "max-w-3xl",
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}