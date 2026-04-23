"use client";

import { useState } from "react";
import Link from "next/link";
import allProjects from "../utils/allprojects.json";
import Image from "next/image";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = allProjects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );

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
        <div className="mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Projects
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed">
            A collection of projects spanning fintech, proptech, agritech, and
            edtech sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block overflow-hidden border border-foreground/10 hover:border-foreground/25 transition-colors duration-500"
            >
              <div className="aspect-[4/3] bg-foreground/5">
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
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${project.type === "professional" ? "bg-accent/10 text-accent" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"}`}
                  >
                    {project.type === "professional"
                      ? "Professional"
                      : "Community"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] px-2 py-0.5 rounded-full ${tagColors[tag] || "bg-foreground/10 text-foreground/60"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs tracking-wider text-foreground/50 uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="font-body text-lg font-medium mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs border border-foreground/10 rounded text-foreground/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-sm link-underline text-foreground/70 hover:text-foreground">
                  View project →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            <button
              onClick={() => setCurrentPage((p: number) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm border border-foreground/10 rounded hover:border-foreground/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 text-sm rounded transition-colors ${page === currentPage ? "bg-foreground text-background" : "border border-foreground/10 hover:border-foreground/30"}`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>
            <button
              onClick={() =>
                setCurrentPage((p: number) => Math.min(totalPages, p + 1))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm border border-foreground/10 rounded hover:border-foreground/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
