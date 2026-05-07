import { motion } from "framer-motion";

export default function ContactCard({ item, index = 0 }) {
  const Icon = item.icon;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: index * 0.05,
      }}
      className="group h-full rounded-[1.75rem] border border-cyan-400/15 bg-white/[0.045] p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.065]"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.12)] transition group-hover:scale-110">
        <Icon />
      </div>

      <p className="text-sm font-black uppercase tracking-wider text-purple-300">
        {item.label}
      </p>

      <p className="mt-3 break-words text-sm font-semibold leading-6 text-slate-200">
        {item.value}
      </p>
    </motion.div>
  );

  if (!item.href) {
    return <div>{content}</div>;
  }

  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      className="block h-full"
    >
      {content}
    </a>
  );
}