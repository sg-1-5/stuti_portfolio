import { useEffect, useState } from "react";
import { profile, stats } from "../data";
import { GitHubIcon, LinkedInIcon, MailIcon, PinIcon, DownloadIcon } from "./ui";

function useTyping(words, speed = 80, pause = 1600) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    let t;
    if (!deleting && text === word) t = setTimeout(() => setDeleting(true), pause);
    else if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => i + 1);
    } else
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? speed / 2 : speed
      );
    return () => clearTimeout(t);
  }, [text, deleting, idx, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background */}
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="blob pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-violet-600/30 blur-[120px]" />
      <div
        className="blob pointer-events-none absolute top-1/3 -right-40 h-[26rem] w-[26rem] rounded-full bg-cyan-500/20 blur-[120px]"
        style={{ animationDelay: "-5s" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to internships & SDE roles
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="mt-5 h-9 font-mono text-xl text-slate-200 sm:text-2xl">
            <span className="text-violet-400">&gt; </span>
            {typed}
            <span className="caret text-cyan-400">▍</span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{profile.tagline}</p>

          <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <PinIcon /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5 hover:shadow-violet-500/50"
            >
              View My Work
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <DownloadIcon /> Resume
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { href: profile.links.github, icon: <GitHubIcon />, label: "GitHub" },
              { href: profile.links.linkedin, icon: <LinkedInIcon />, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: <MailIcon />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Code card */}
        <div className="glass relative hidden rounded-2xl p-1 shadow-2xl shadow-violet-900/30 lg:block">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 font-mono text-xs text-slate-500">stuti.py</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
            <code>
              <span className="text-fuchsia-400">class</span> <span className="text-cyan-300">Developer</span>:{"\n"}
              {"  "}name = <span className="text-emerald-300">"Stuti Garg"</span>{"\n"}
              {"  "}college = <span className="text-emerald-300">"BIT Mesra"</span>{"\n"}
              {"  "}cgpa = <span className="text-amber-300">8.61</span>{"\n"}
              {"  "}stack = [{"\n"}
              {"    "}<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"FastAPI"</span>,{"\n"}
              {"    "}<span className="text-emerald-300">"PyTorch"</span>, <span className="text-emerald-300">"LLMs"</span>{"\n"}
              {"  "}]{"\n"}
              {"  "}dsa_solved = <span className="text-amber-300">500</span> + ...{"\n\n"}
              {"  "}<span className="text-fuchsia-400">def</span> <span className="text-cyan-300">hire</span>(self):{"\n"}
              {"    "}<span className="text-fuchsia-400">return</span> <span className="text-emerald-300">"Let's build →"</span>
            </code>
          </pre>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute inset-x-0 bottom-0 hidden border-t border-white/10 bg-white/[0.02] backdrop-blur md:block">
        <div className="mx-auto grid max-w-6xl grid-cols-4 divide-x divide-white/10 px-6">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-5 text-center">
              <div className="gradient-text text-2xl font-extrabold">{s.value}</div>
              <div className="mt-1 text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
