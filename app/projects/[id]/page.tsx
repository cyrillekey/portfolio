import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

const projects = [
  {
    id: "ifunza-platform",
    title: "iFunza Platform",
    category: "Fintech / EdTech",
    type: "professional",
    summary: "SAAS for schools with automated fee collection and parent-teacher engagement.",
    objective: "Streamline school fee management and enhance parent-teacher communication through a comprehensive digital platform.",
    tech: ["Next.js", "GraphQL", "MySQL", "Node.js"],
    gradient: "from-amber-100 to-amber-200",
    features: [
      "Automated fee invoicing and payment tracking",
      "Parent-teacher messaging system",
      "Student performance dashboard",
      "Fee payment via MPESA and cards",
      "Real-time notifications"
    ],
    challenges: [
      "Handling high-volume concurrent payments",
      "Ensuring data privacy for students",
      "Integrating with multiple payment providers",
      "Managing real-time notifications at scale"
    ],
    solutions: [
      "Implemented queue-based payment processing",
      "End-to-end encryption for sensitive data",
      "Unified payment gateway abstraction",
      "WebSocket-based notification system"
    ]
  },
  {
    id: "property-management",
    title: "Property Management System",
    category: "PropTech",
    type: "professional",
    summary: "Property management for agents and landlords with automated invoicing and rent collection via MPESA and Paystack.",
    objective: "Simplify property and tenant management with automated billing and payment collection.",
    tech: ["React", "Node.js", "PostgreSQL", "MPESA"],
    gradient: "from-slate-100 to-slate-200",
    features: [
      "Property inventory management",
      "Automated rent invoicing",
      "Tenant screening and onboarding",
      "Maintenance request tracking",
      "Financial reporting dashboard"
    ],
    challenges: [
      "Coordinating between landlords and tenants",
      "Handling failed payment retries",
      "Document verification process"
    ],
    solutions: [
      "Centralized communication hub",
      "Smart retry logic for payments",
      "Automated document validation"
    ]
  },
  {
    id: "property-listing",
    title: "Property Listing Application",
    category: "PropTech",
    type: "professional",
    summary: "Property listing app allowing prospective tenants to search and apply for properties online.",
    objective: "Connect landlords with tenants through an intuitive property discovery platform.",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    gradient: "from-zinc-100 to-zinc-200",
    features: [
      "Advanced property search and filters",
      "Virtual property tours",
      "Online application submission",
      "Favorite properties list",
      "Push notifications for new listings"
    ],
    challenges: [
      "Optimizing search for large datasets",
      "Managing image uploads on mobile",
      "Real-time availability updates"
    ],
    solutions: [
      "Elasticsearch integration",
      "Compressed image processing pipeline",
      "WebSocket for live updates"
    ]
  },
  {
    id: "beanverified-coffee",
    title: "BeanVerified Coffee Tracing",
    category: "Agritech",
    type: "professional",
    summary: "Trace coffee back to source by scanning QR codes on packaging.",
    objective: "Ensure transparency in the coffee supply chain from farm to cup.",
    tech: ["React Native", "Firebase", "Node.js"],
    gradient: "from-stone-100 to-stone-200",
    features: [
      "QR code scanning for authenticity",
      "Farm-to-cup journey visualization",
      "Coffee origin profiles",
      "Farmer attribution"
    ],
    challenges: [
      "Generating unique QR codes at scale",
      "Offline scanning capability",
      "Verifying farm data integrity"
    ],
    solutions: [
      "Blockchain-basedQR generation",
      "Local caching for offline use",
      "Multi-layer verification"
    ]
  },
  {
    id: "ifunza-wallet",
    title: "iFunza Wallet",
    category: "Fintech",
    type: "professional",
    summary: "Mobile wallet enabling peer-to-peer transactions and school fee payments.",
    objective: "Provide a secure mobile wallet for school fee payments and P2P transfers.",
    tech: ["React Native", "Node.js", "GraphQL"],
    gradient: "from-orange-100 to-orange-200",
    features: [
      "P2P money transfers",
      "School fee payments",
      "Transaction history",
      "Wallet balance display",
      "Security PIN protection"
    ],
    challenges: [
      "Ensuring transaction atomicity",
      "Fraud prevention",
      "Offline transaction queue"
    ],
    solutions: [
      "Database transactions with rollback",
      "ML-based fraud detection",
      "Pending transaction sync"
    ]
  },
  {
    id: "ifunza-estore",
    title: "iFunza E-Store",
    category: "E-commerce",
    type: "professional",
    summary: "Online store for parents to purchase school-related equipment.",
    objective: "Enable parents to conveniently purchase school supplies and materials.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-yellow-100 to-yellow-200",
    features: [
      "Product catalog with categories",
      "Shopping cart",
      "Order tracking",
      "Multiple payment options"
    ],
    challenges: [
      "Inventory sync across sales channels",
      "Managing school-specific catalogs"
    ],
    solutions: [
      "Real-time inventory updates",
      "School-specific product tiers"
    ]
  },
  {
    id: "kanisa-connect",
    title: "Kanisa Connect",
    category: "Productivity",
    type: "community",
    summary: "Church management app for seats, events, and live streaming.",
    objective: "Help churches manage attendance, events, and provide live streaming services.",
    tech: ["Flutter", "Firebase", "React"],
    gradient: "from-indigo-100 to-indigo-200",
    features: [
      "Seat reservation system",
      "Event management",
      "Live streaming integration",
      "Attendance tracking"
    ],
    challenges: [
      "Live streaming at scale",
      "Managing concurrent reservations"
    ],
    solutions: [
      "CDN-based streaming",
      "Optimistic locking for seats"
    ]
  },
  {
    id: "rentyme-landlord",
    title: "Rentyme Landlord",
    category: "PropTech",
    type: "professional",
    summary: "Application for landlords to manage properties and tenants.",
    objective: "Empower landlords with tools to manage properties and communicate with tenants.",
    tech: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-rose-100 to-rose-200",
    features: [
      "Property dashboard",
      "Tenant communication",
      "Rent collection tracking"
    ],
    challenges: [],
    solutions: []
  },
  {
    id: "rentyme-tenant",
    title: "Rentyme Tenant",
    category: "PropTech",
    type: "professional",
    summary: "Mobile app for tenants to manage rent payments and communicate with landlords.",
    objective: "Simplify tenant-landlord communication and rent payment tracking.",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    gradient: "from-emerald-100 to-emerald-200",
    features: [
      "Rent payment history",
      "Maintenance requests",
      " lease document storage"
    ],
    challenges: [],
    solutions: []
  },
  {
    id: "beanverified-shop",
    title: "BeanVerified Shop",
    category: "E-commerce",
    type: "professional",
    summary: "E-commerce platform for customers to buy and ship coffee directly.",
    objective: "Direct-to-consumer coffee sales with transparent sourcing.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-amber-200 to-amber-300",
    features: [
      "Product catalog",
      "Secure checkout",
      "Order tracking",
      "Coffee origin stories"
    ],
    challenges: [],
    solutions: []
  },
  {
    id: "rentyme-website",
    title: "Rentyme Property Website",
    category: "PropTech",
    type: "professional",
    summary: "Property listing website for prospective tenants.",
    objective: "Showcase available properties and enable online applications.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    gradient: "from-blue-100 to-blue-200",
    features: [
      "Property search",
      "Application portal",
      "Agent contact forms"
    ],
    challenges: [],
    solutions: []
  },
  {
    id: "parent-teacher",
    title: "iFunza Parent Teacher Engagement",
    category: "EdTech",
    type: "professional",
    summary: "SAAS application for school admins to manage schools with automated invoicing and parent engagement.",
    objective: "Foster collaboration between parents and teachers.",
    tech: ["Next.js", "GraphQL", "MySQL"],
    gradient: "from-purple-100 to-purple-200",
    features: [
      "Messaging system",
      "Progress reports",
      "Event calendar"
    ],
    challenges: [],
    solutions: []
  }
];

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
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground mb-8 link-underline"
        >
          ← Back to projects
        </Link>

        <div className={`aspect-[21/9] ${project.gradient} rounded-lg mb-12`} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  project.type === "professional"
                    ? "bg-accent/10 text-accent"
                    : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                }`}
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
            
            <p className="text-xl text-foreground/80 leading-relaxed mb-12">
              {project.summary}
            </p>

            <div className="mb-12">
              <h2 className="font-display text-2xl font-light mb-4">Objective</h2>
              <p className="text-foreground/70 leading-relaxed">
                {project.objective}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="mb-12">
                <h2 className="font-display text-2xl font-light mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-12">
                <h2 className="font-display text-2xl font-light mb-4">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.solutions && project.solutions.length > 0 && (
              <div className="mb-12">
                <h2 className="font-display text-2xl font-light mb-4">Solutions</h2>
                <ul className="space-y-3">
                  {project.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="font-display text-2xl font-light mb-4">Screenshots</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div 
                    key={i} 
                    className={`aspect-[3/4] ${project.gradient} rounded-lg flex items-center justify-center`}
                  >
                    <span className="text-foreground/30 text-sm">Screenshot {i}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl font-light mb-4">Video Walkthrough</h2>
              <div className="aspect-video bg-foreground/5 rounded-lg flex flex-col items-center justify-center">
                <svg className="w-16 h-16 text-foreground/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-foreground/40">Video demo coming soon</p>
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <div className="border border-foreground/10 rounded-lg p-6">
                <h3 className="font-body text-lg font-medium mb-4">Technologies</h3>
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
                <div className="space-y-3">
                  <a 
                    href="#"
                    className="block text-foreground/70 hover:text-foreground link-underline"
                  >
                    Live Demo →
                  </a>
                  <a 
                    href="#"
                    className="block text-foreground/70 hover:text-foreground link-underline"
                  >
                    GitHub Repository →
                  </a>
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
                ) : <span />}
                {nextProject ? (
                  <Link 
                    href={`/projects/${nextProject.id}`}
                    className="text-sm text-foreground/60 hover:text-foreground link-underline ml-auto"
                  >
                    Next →
                  </Link>
                ) : <span />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}