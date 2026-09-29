import { useEffect, useState } from "react";

const items = ["About", "Experience", "Projects", "Skills", "Achievements", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "";
      for (const it of items) {
        const el = document.getElementById(it.toLowerCase());
        if (el && el.getBoundingClientRect().top <= 120) current = it;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[#07070d]/80 backdrop-blur-xl" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 text-lg font-bold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-extrabold">
            SG
          </span>
          <span className="hidden sm:inline">Stuti Garg</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {items.map((it) => (
            <li key={it}>
              <a
                href={`#${it.toLowerCase()}`}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active === it ? "text-white bg-white/10" : "text-slate-400 hover:text-white"
                }`}
              >
                {it}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:gargstuti159@gmail.com"
          className="hidden rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:opacity-90 lg:inline-block"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg p-2 text-slate-200 lg:hidden"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 bg-[#07070d]/95 px-6 py-4 backdrop-blur-xl lg:hidden">
          {items.map((it) => (
            <li key={it}>
              <a
                href={`#${it.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {it}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
