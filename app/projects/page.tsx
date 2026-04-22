"use client";

import { useState } from "react";
import Link from "next/link";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const allProjects = [
    {
      id: "ifunza-platform",
      title: "iFunza Platform",
      category: "Fintech / EdTech",
      type: "professional",
      summary: "SAAS for schools with automated fee collection and parent-teacher engagement.",
      tech: ["Next.js", "GraphQL", "MySQL", "Node.js"],
      gradient: "from-amber-100 to-amber-200"
    },
    {
      id: "property-management",
      title: "Property Management System",
      category: "PropTech",
      type: "professional",
      summary: "Property management for agents and landlords with automated invoicing and rent collection via MPESA and Paystack.",
      tech: ["React", "Node.js", "PostgreSQL", "MPESA"],
      gradient: "from-slate-100 to-slate-200"
    },
    {
      id: "property-listing",
      title: "Property Listing Application",
      category: "PropTech",
      type: "professional",
      summary: "Property listing app allowing prospective tenants to search and apply for properties online.",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      gradient: "from-zinc-100 to-zinc-200"
    },
    {
      id: "beanverified-coffee",
      title: "BeanVerified Coffee Tracing",
      category: "Agritech",
      type: "professional",
      summary: "Trace coffee back to source by scanning QR codes on packaging.",
      tech: ["React Native", "Firebase", "Node.js"],
      gradient: "from-stone-100 to-stone-200"
    },
    {
      id: "ifunza-wallet",
      title: "iFunza Wallet",
      category: "Fintech",
      type: "professional",
      summary: "Mobile wallet enabling peer-to-peer transactions and school fee payments.",
      tech: ["React Native", "Node.js", "GraphQL"],
      gradient: "from-orange-100 to-orange-200"
    },
    {
      id: "ifunza-estore",
      title: "iFunza E-Store",
      category: "E-commerce",
      type: "professional",
      summary: "Online store for parents to purchase school-related equipment.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      gradient: "from-yellow-100 to-yellow-200"
    },
    {
      id: "kanisa-connect",
      title: "Kanisa Connect",
      category: "Productivity",
      type: "community",
      summary: "Church management app for seats, events, and live streaming.",
      tech: ["Flutter", "Firebase", "React"],
      gradient: "from-indigo-100 to-indigo-200"
    },
    {
      id: "rentyme-landlord",
      title: "Rentyme Landlord",
      category: "PropTech",
      type: "professional",
      summary: "Application for landlords to manage properties and tenants.",
      tech: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-rose-100 to-rose-200"
    },
    {
      id: "rentyme-tenant",
      title: "Rentyme Tenant",
      category: "PropTech",
      type: "professional",
      summary: "Mobile app for tenants to manage rent payments and communicate with landlords.",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      gradient: "from-emerald-100 to-emerald-200"
    },
    {
      id: "beanverified-shop",
      title: "BeanVerified Shop",
      category: "E-commerce",
      type: "professional",
      summary: "E-commerce platform for customers to buy and ship coffee directly.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      gradient: "from-amber-200 to-amber-300"
    },
    {
      id: "rentyme-website",
      title: "Rentyme Property Website",
      category: "PropTech",
      type: "professional",
      summary: "Property listing website for prospective tenants.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      gradient: "from-blue-100 to-blue-200"
    },
    {
      id: "parent-teacher",
      title: "iFunza Parent Teacher Engagement",
      category: "EdTech",
      type: "professional",
      summary: "SAAS application for school admins to manage schools with automated invoicing and parent engagement.",
      tech: ["Next.js", "GraphQL", "MySQL"],
      gradient: "from-purple-100 to-purple-200"
    }
  ];

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = allProjects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Projects
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed">
            A collection of projects spanning fintech, proptech, agritech, and edtech sectors. 
            Each one solving real problems with thoughtful technical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <div 
              key={project.id}
              className="group block overflow-hidden border border-foreground/10 hover:border-foreground/25 transition-colors duration-500"
            >
              <div className={`aspect-[4/3] ${project.gradient}`} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      project.type === "professional"
                        ? "bg-accent/10 text-accent"
                        : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                    }`}
                  >
                    {project.type === "professional" ? "Professional" : "Community"}
                  </span>
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
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 text-sm rounded transition-colors ${
                    page === currentPage
                      ? "bg-foreground text-background"
                      : "border border-foreground/10 hover:border-foreground/30"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((p: number) => Math.min(totalPages, p + 1))}
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