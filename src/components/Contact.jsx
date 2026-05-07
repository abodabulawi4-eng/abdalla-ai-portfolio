import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { personal } from "../data/personal";

const contactItems = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: FiMail,
  },
  {
    label: "WhatsApp",
    value: personal.phone,
    href: personal.socials.whatsapp,
    icon: FiPhone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdalla-abulawi",
    href: personal.linkedin,
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/abodabulawi4-eng",
    href: personal.github,
    icon: FiGithub,
  },
  {
    label: "Location",
    value: personal.location,
    href: null,
    icon: FiMapPin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030712] px-5 py-24 text-white lg:px-8"
    >
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Build something intelligent, clean, and useful.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300">
            For AI projects, full-stack systems, dashboards, automation tools,
            or data-driven applications, contact me directly through the links
            below.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.25)] transition hover:bg-cyan-200"
            >
              <FiMail />
              Send Email
            </a>

            <a
              href={personal.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400/25 bg-white/5 px-7 py-4 text-sm font-bold text-cyan-100 transition hover:bg-cyan-400/10"
            >
              <FiPhone />
              WhatsApp
            </a>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            const content = (
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="group h-full rounded-[1.75rem] border border-cyan-400/15 bg-white/[0.045] p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.065]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
                  <Icon />
                </div>

                <p className="text-sm font-bold uppercase tracking-wider text-purple-300">
                  {item.label}
                </p>

                <p className="mt-3 break-words text-sm font-semibold leading-6 text-slate-200">
                  {item.value}
                </p>
              </motion.div>
            );

            if (!item.href) {
              return <div key={item.label}>{content}</div>;
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}