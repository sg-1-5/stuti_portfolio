import { about, experience, projects, skills, achievements, education, profile, stats } from "../data";
import {
  Section, Reveal, Rich, Tag, LinkButton,
  GitHubIcon, ExternalIcon, MailIcon, PhoneIcon, LinkedInIcon, PinIcon,
} from "./ui";

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="A little about me">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-slate-400">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={150} className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass card-hover rounded-2xl p-5">
              <div className="gradient-text text-3xl font-extrabold">{s.value}</div>
              <div className="mt-2 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 · Experience" title="Where I've built things">
      <div className="relative border-l border-white/10 pl-8">
        {experience.map((e, i) => (
          <Reveal key={i} className="relative mb-10">
            <span className="absolute top-2 -left-[41px] h-4 w-4 rounded-full border-4 border-[#07070d] bg-gradient-to-br from-violet-500 to-cyan-400 ring-4 ring-violet-500/20" />
            <div className="glass card-hover rounded-2xl p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{e.title}</h3>
                  <p className="mt-1 font-medium text-violet-300">{e.org}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-sm text-slate-400">{e.period}</span>
                  <div className="mt-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                    🏆 {e.badge}
                  </div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {e.points.map((p, j) => (
                  <li key={j} className="flex gap-3 text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span><Rich text={p} /></span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {e.tech.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <div className="mt-6 flex gap-3">
                <LinkButton href={e.links.github} icon={<GitHubIcon width={16} height={16} />}>Code</LinkButton>
                <LinkButton href={e.links.live} icon={<ExternalIcon width={16} height={16} />}>Live</LinkButton>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 · Projects" title="Featured projects">
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 120} className="h-full">
            <article className="glass card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl">
              <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <div className="grid-bg absolute inset-0 opacity-60" />
                <div className="absolute inset-0 grid place-items-center text-6xl transition-transform duration-500 group-hover:scale-125">
                  {p.icon}
                </div>
                <div className="absolute bottom-3 left-4 flex gap-2">
                  {p.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-1 text-sm font-medium text-cyan-300">{p.subtitle}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-[15px] text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      <span><Rich text={pt} /></span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
                <div className="mt-6 flex gap-3">
                  {p.links.github && (
                    <LinkButton href={p.links.github} icon={<GitHubIcon width={16} height={16} />}>Code</LinkButton>
                  )}
                  {p.links.live && (
                    <LinkButton href={p.links.live} icon={<ExternalIcon width={16} height={16} />}>Live Demo</LinkButton>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 · Skills" title="My toolkit">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 80} className="h-full">
            <div className="glass card-hover h-full rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-xl">
                  {s.icon}
                </span>
                <h3 className="font-semibold text-white">{s.group}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition hover:border-violet-400/50 hover:text-white"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="05 · Achievements" title="Milestones & recognition">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 90} className="h-full">
            <a
              href={a.link}
              target="_blank"
              rel="noreferrer"
              className="glass card-hover group flex h-full flex-col rounded-2xl p-6"
            >
              <span className="text-4xl">{a.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{a.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-300 group-hover:text-cyan-300">
                View proof <ExternalIcon width={14} height={14} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="06 · Education" title="Academic background">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 120} className="h-full">
            <div className="glass card-hover h-full rounded-2xl p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="text-3xl">{i === 0 ? "🎓" : "🏫"}</span>
                <span className="font-mono text-sm text-slate-400">{e.period}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{e.school}</h3>
              <p className="mt-1 text-slate-400">{e.degree}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                <PinIcon width={14} height={14} /> {e.location}
              </p>
              <div className="mt-5 inline-block rounded-lg bg-gradient-to-r from-violet-500/20 to-cyan-400/20 px-4 py-2 font-semibold text-white">
                {e.score}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const cards = [
    { icon: <MailIcon />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <PhoneIcon />, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: <LinkedInIcon />, label: "LinkedIn", value: "Connect with me", href: profile.links.linkedin },
    { icon: <GitHubIcon />, label: "GitHub", value: "See my code", href: profile.links.github },
  ];
  return (
    <Section id="contact" eyebrow="07 · Contact" title="Let's work together">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-600/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
          <div className="relative">
            <h3 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              Looking for a developer who ships <span className="gradient-text">AI-powered products</span>?
            </h3>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              I'm actively seeking internship and SDE opportunities. Whether you have a role, a project, or just want
              to chat about tech — my inbox is always open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5"
            >
              <MailIcon /> Say Hello
            </a>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="card-hover flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30 text-white">
                    {c.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-500">{c.label}</span>
                    <span className="block truncate text-sm font-medium text-slate-200">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Stuti Garg · Built with React, Vite & Tailwind CSS
    </footer>
  );
}
