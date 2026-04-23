import { notFound } from "next/navigation";
import Link from "next/link";
import projects from "@/app/utils/allprojects.json";
import Image from "next/image";
import { ScreenshotImage } from "@/app/components/ScreenshotImage";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((p) => p.id === id);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const tagColors: Record<string, string> = {
    web: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    mobile:
      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    backend:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground mb-8 link-underline"
        >
          ← Back to projects
        </Link>

        {/* <div className={`aspect-[21/9] ${project.gradient} rounded-lg mb-12`} /> */}
        <div className="aspect-[21/9] rounded-lg mb-12 overflow-hidden bg-foreground/5">
          {project.thumbnail ? (
            <Image
              src={{ src: project.thumbnail, height: 1920, width: 1080 }}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br ${project.gradient}`}
            />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${project.type === "professional" ? "bg-accent/10 text-accent" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"}`}
              >
                {project.type === "professional" ? "Professional" : "Community"}
              </span>
              <span className="text-xs text-foreground/50 uppercase">
                {project.category}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-light mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              {project.summary}
            </p>

            {project.description && (
              <div className="mb-10">
                <h2 className="font-display text-2xl font-light mb-4">
                  Description
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-3 py-1 rounded-full ${tagColors[tag] || "bg-foreground/10 text-foreground/60"}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mb-10">
              <h2 className="font-display text-2xl font-light mb-4">
                Objective
              </h2>
              <p className="text-foreground/70">{project.objective}</p>
            </div>

            {project.features.length > 0 && (
              <div className="mb-10">
                <h2 className="font-display text-2xl font-light mb-4">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-foreground/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.screenshots && project.screenshots?.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display text-2xl font-light mb-4">
                  Screenshots
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot: string, i: number) => (
                    <div
                      key={i}
                      className="aspect-video rounded-lg overflow-hidden bg-foreground/5"
                    >
                      <Image
                        src={{ src: screenshot, height: 1920, width: 1080 }}
                        alt={`Screenshot ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <ScreenshotImage
                    images={project.screenshots.map((a, index) => ({
                      src: a,
                      alt: `Screenshot_${index + 1}`,
                    }))}
                  />
                </div>
              </div>
            )}

            {project.video && (
              <div className="mt-12">
                <h2 className="font-display text-2xl font-light mb-4">
                  Video Walkthrough
                </h2>
                <div className="aspect-video rounded-lg overflow-hidden bg-foreground/5">
                  <iframe
                    className="w-full h-full"
                    src={project.video}
                    title="Video Walkthrough"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="sticky top-24">
              <div className="border border-foreground/10 rounded-lg p-6">
                <h3 className="font-body text-lg font-medium mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-sm border border-foreground/10 rounded text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="font-body text-lg font-medium mb-4">Links</h3>
                <div className="space-y-3 gap-y-3">
                  <a target="_blank" href={project.link}>
                    <button className="w-full px-4 py-2.5 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors text-sm font-medium">
                      View Demo
                    </button>
                  </a>
                  {project.github && (
                    <a href={project.github}>
                      <button className="w-full px-4 py-2.5 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors text-sm font-medium mt-2">
                        GitHub
                      </button>
                    </a>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                {prevProject ? (
                  <Link
                    href={`/projects/${prevProject.id}`}
                    className="text-sm text-foreground/60 hover:text-foreground link-underline"
                  >
                    ← Previous
                  </Link>
                ) : (
                  <span />
                )}
                {nextProject ? (
                  <Link
                    href={`/projects/${nextProject.id}`}
                    className="text-sm text-foreground/60 hover:text-foreground link-underline ml-auto"
                  >
                    Next →
                  </Link>
                ) : (
                  <span />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
