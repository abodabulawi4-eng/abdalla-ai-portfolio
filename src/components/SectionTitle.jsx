import { motion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
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
      className={[
        maxWidth,
        isCenter ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
          {eyebrow}
        </p>
      )}

      <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>

      {description && (
        <p
          className={[
            "mt-7 text-base leading-8 text-slate-300 sm:text-lg",
            isCenter ? "mx-auto max-w-3xl" : "max-w-3xl",
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}