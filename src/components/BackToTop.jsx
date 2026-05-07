import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleVisibility();

    window.addEventListener("scroll", handleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#050816]/85 text-xl text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.18)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-400/15"
    >
      <FiArrowUp />
    </button>
  );
}