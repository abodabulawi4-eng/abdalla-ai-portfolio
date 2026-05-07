import { motion } from "framer-motion";

export default function ContactCard({ item, index = 0 }) {
  const Icon = item.icon;

  const card = (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: index * 0.04,
      }}
      className="group h-full rounded-[1.75rem] border border-cyan-400/15 bg-white/[0.045] p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.065]"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.12)] transition group-hover:scale-110">
        <Icon />
      </div>

      <p className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
        {item.label}
      </p>

      <h2 className="mt-3 break-words text-base font-black leading-7 text-white">
        {item.value}
      </h2>

      {item.href && (
        <p className="mt-4 text-sm font-bold text-purple-200">
          Open {item.label}
        </p>
      )}
    </motion.article>
  );

  if (!item.href) {
    return <div className="h-full">{card}</div>;
  }

  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      className="block h-full"
    >
      {card}
    </a>
  );
}