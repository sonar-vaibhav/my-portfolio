import { useEffect, useState } from "react";
import { ArrowDown, Menu, X } from "lucide-react";

const Hero = () => {
  const [reveal, setReveal] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateReveal = () => setReveal(Math.min(window.scrollY / Math.max(window.innerHeight * 0.9, 1), 1));
    updateReveal();
    window.addEventListener("scroll", updateReveal, { passive: true });
    return () => window.removeEventListener("scroll", updateReveal);
  }, []);

  return (
    <div className="relative min-h-[180vh] overflow-hidden bg-[#080808] text-[#f4f1eb]">
      <section className="sticky top-0 flex h-screen min-h-[620px] flex-col overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(190,36,22,0.22),transparent_31%),linear-gradient(115deg,#080808_12%,#121212_62%,#1a0d0a)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
          <a href="#top" className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-white">Lorenzo <span className="text-[#e4482e]">MX</span></a>
          <button aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70 transition hover:text-white">{menuOpen ? <X size={18} /> : <Menu size={18} />} {menuOpen ? "Close" : "Menu"}</button>
        </header>
        <div className="relative z-10 flex flex-1 items-center px-6 pb-20 sm:px-10 lg:px-16"><div className="max-w-xl"><p className="mb-5 font-mono text-[10px] uppercase tracking-[0.4em] text-[#f08a62]">Athlete / Stunt rider / 2024</p><h1 id="top" className="text-balance text-[clamp(4rem,13vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.09em]">Lorenzo<span className="text-[#e4482e]">.</span></h1><p className="mt-8 max-w-xs text-sm leading-6 text-white/60 sm:text-base">Precision, speed, and a little bit of chaos. Welcome to the ride.</p><a href="#story" className="mt-10 inline-flex items-center gap-3 border-b border-white/40 pb-2 font-mono text-[10px] uppercase tracking-[0.24em] transition hover:border-[#e4482e] hover:text-[#f08a62]">Explore the story <ArrowDown size={14} /></a></div></div>
        <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true"><img src="/images/hero-off.png" alt="Lorenzo riding a motocross bike" className="absolute inset-0 h-full w-full object-cover object-[68%_center] mix-blend-screen opacity-80 grayscale" /><img src="/images/hero-on.png" alt="" className="absolute inset-0 h-full w-full object-cover object-[68%_center] mix-blend-screen transition-[clip-path] duration-300" style={{ clipPath: `inset(${(1 - reveal) * 100}% 0 0 0)` }} /><div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent" /><div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" /></div>
        <div className="absolute bottom-7 left-6 right-6 z-20 flex items-end justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 sm:left-10 sm:right-10 lg:left-16 lg:right-16"><span>Scroll to reveal</span><span>01 — 04</span></div>
      </section>
      {menuOpen && <nav className="fixed inset-0 z-30 flex items-center justify-center bg-[#080808]/95 backdrop-blur-md"><div className="flex flex-col gap-7 text-center text-4xl font-black uppercase tracking-[-0.05em]"><a href="#story" onClick={() => setMenuOpen(false)}>The story</a><a href="#specs" onClick={() => setMenuOpen(false)}>The machine</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div></nav>}
      <section id="story" className="relative z-10 flex min-h-[70vh] items-center bg-[#080808] px-6 py-24 sm:px-10 lg:px-16"><div className="grid w-full max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#e4482e]">02 / The story</p><div><h2 className="max-w-3xl text-4xl font-bold uppercase leading-none tracking-[-0.06em] sm:text-6xl">Built for the moment between control and flight.</h2><p className="mt-8 max-w-xl text-base leading-7 text-white/50">Every line, landing, and late night in the workshop is part of the same pursuit: going further than yesterday.</p></div></div></section>
    </div>
  );
};

export default Hero;
