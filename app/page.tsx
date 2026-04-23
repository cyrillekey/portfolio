import Link from "next/link";
import allProjects from "./utils/allprojects.json";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20 pb-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <section className="min-h-[70vh] flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-0">
          <div className="max-w-2xl">
            <div className="overflow-hidden">
              <p className="animate-fade-in-up delay-100 font-body text-xs tracking-[0.25em] text-accent uppercase mb-6">
                Full Stack Developer
              </p>
            </div>

            <div className="overflow-hidden">
              <h1 className="animate-fade-in-up delay-200 font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[0.92] tracking-tight">
                Cyrille
                <br />
                <span className="font-display italic font-light">Otieno</span>
              </h1>
            </div>

            <div className="animate-fade-in-up delay-300 max-w-lg">
              <p className="text-3xl md:text-4xl font-display font-light leading-tight mt-8 mb-6">
                I build digital products that balance technical complexity with
                intuitive user experiences.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                With over 4 years of experience in full-stack development,
                I&lsquo;ve worked across fintech, proptech, and agritech
                sectors—building everything from payment wallets to property
                management systems and supply chain tracers.
              </p>
            </div>

            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4 mt-10">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "GraphQL",
                "Flutter",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-xs tracking-wider border border-foreground/15 rounded-full text-foreground/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up delay-500 lg:w-[320px]">
            <div className="border-l border-foreground/10 pl-6 space-y-6">
              <div>
                <p className="text-xs tracking-[0.2em] text-muted uppercase mb-2">
                  Location
                </p>
                <p className="font-body text-sm">Nairobi, Kenya</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-muted uppercase mb-2">
                  Experience
                </p>
                <p className="font-body text-sm">4+ years</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="/contact"
                  className="link-underline text-sm text-foreground/80 hover:text-foreground"
                >
                  Contact
                </a>
                <a
                  href="https://github.com/cyrillekey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm text-foreground/80 hover:text-foreground"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-2xl font-light">Projects</h2>
            <Link
              href="/projects"
              className="text-sm link-underline text-foreground/60 hover:text-foreground"
            >
              View all projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.slice(0, 4).map((project, i) => (
              <div
                key={project.title}
                className="group block overflow-hidden border border-foreground/10 hover:border-foreground/25 transition-colors duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-video bg-foreground/5">
                  {project.thumbnail ? (
                    <Image
                      src={{ src: project.thumbnail, height: 400, width: 400 }}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full ${project.gradient}`} />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        project.type === "professional"
                          ? "bg-accent/10 text-accent"
                          : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                      }`}
                    >
                      {project.type === "professional"
                        ? "Professional"
                        : "Community"}
                    </span>
                    {project.tags?.map((tag: string) => (
                      <span
                        key={tag}
                        className={`text-[10px] px-2 py-0.5 rounded-full ${tag === "web" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" : tag === "mobile" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" : "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-body text-lg font-medium mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                    {project.summary}
                  </p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-sm link-underline text-foreground/70 hover:text-foreground"
                  >
                    View project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-24">
          <h2 className="font-display text-2xl font-light mb-10">Experience</h2>
          <div className="space-y-0">
            {[
              {
                company: "iFunza Inc.",
                role: "Full Stack Developer",
                period: "Aug 2022 – Present",
                highlights: [
                  "Built iFunza Wallet enabling P2P transactions and school fee payments",
                  "Developed E-Store for online school equipment purchases",
                  "Led REST to GraphQL migration, improving data fetching efficiency",
                ],
              },
              {
                company: "Rentyme Limited",
                role: "Full Stack Developer",
                period: "Jul 2023 – Aug 2024",
                highlights: [
                  "Led redesign of Landlord, Tenant, and Property Listing applications",
                  "Developed mobile app streamlining tenant interactions",
                  "Implemented responsive redesign for cross-device compatibility",
                ],
              },
              {
                company: "Beanverified Limited",
                role: "Full Stack Developer",
                period: "Nov 2024 – Nov 2025",
                highlights: [
                  "Built source-to-cup coffee tracing system with QR code scanning",
                  "Designed scalable REST application server",
                  "Implemented e-commerce shop for direct coffee sales",
                ],
              },
              {
                company: "UjuziCraft Technology",
                role: "Junior Full Stack Developer",
                period: "Nov 2021 – July 2022",
                highlights: [
                  "Developed and maintained web applications",
                  "Built cross-platform mobile apps using Flutter & React Native",
                  "Created TV applications for LG & Samsung (WebOS)",
                ],
              },
            ].map((job, i) => (
              <div
                key={job.company}
                className="animate-slide-in-right border-t border-foreground/10 py-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-3">
                  <h3 className="font-body text-lg font-medium">
                    {job.company}
                  </h3>
                  <span className="text-sm text-muted">{job.period}</span>
                </div>
                <p className="text-sm text-accent mb-3">{job.role}</p>
                <ul className="space-y-1 text-sm text-foreground/60">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="text-foreground/30">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-light mb-8">
              Get in touch
            </h2>
            <p className="text-foreground/60 mb-6">
              Interested in working together? Let&lsquo;s connect.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="mailto:cyrilleotieno7@gmail.com"
                className="link-underline text-foreground/80 hover:text-foreground"
              >
                cyrilleotieno7@gmail.com
              </a>
              <a
                href="https://github.com/cyrillekey"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-foreground/80 hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="tel:+254708073370"
                className="link-underline text-foreground/80 hover:text-foreground"
              >
                +254 708 073370
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-12 lg:px-20 py-8 border-t border-foreground/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} Cyrille Otieno. All rights reserved.
          </p>
          <p className="text-xs text-foreground/40">Built with Next.js</p>
        </div>
      </footer>
    </div>
  );
}
