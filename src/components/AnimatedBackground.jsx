import { motion } from "framer-motion";

const nodes = [
  { left: "8%", top: "18%", delay: 0 },
  { left: "18%", top: "72%", delay: 0.4 },
  { left: "42%", top: "28%", delay: 0.8 },
  { left: "64%", top: "68%", delay: 1.2 },
  { left: "82%", top: "20%", delay: 1.6 },
  { left: "90%", top: "78%", delay: 2 },
];

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:46px_46px]" />

      <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-40 h-[34rem] w-[34rem] rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />

      {nodes.map((node, index) => (
        <motion.span
          key={`${node.left}-${node.top}`}
          className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.85)]"
          style={{
            left: node.left,
            top: node.top,
          }}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [1, 1.7, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: node.delay,
          }}
        >
          {index < nodes.length - 1 && (
            <span className="absolute left-1 top-1 h-px w-24 origin-left rotate-12 bg-gradient-to-r from-cyan-300/35 to-transparent" />
          )}
        </motion.span>
      ))}
    </div>
  );
}