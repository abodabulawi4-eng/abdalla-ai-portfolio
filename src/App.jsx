import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import AnimatedBackground from "./components/AnimatedBackground";
import RouteScrollToTop from "./components/RouteScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />

      <div className="relative min-h-screen overflow-x-hidden bg-[#020617] text-white">
        <AnimatedBackground />
        <ScrollProgress />
        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <div className="relative z-10">
          <Footer />
        </div>

        <BackToTop />
      </div>
    </BrowserRouter>
  );
}