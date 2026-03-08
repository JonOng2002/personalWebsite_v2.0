import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Responsive, WidthProvider } from 'react-grid-layout/legacy';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);
import { HeroCard } from './components/HeroCard';
import { AboutCard } from './components/AboutCard';
import { AboutModal } from './components/AboutModal';
import { ExperienceCard } from './components/ExperienceCard';
import { ExperienceModal, ExperienceDetails } from './components/ExperienceModal';
import { ProjectMiniCard } from './components/ProjectMiniCard';
import { QuickLinks } from './components/QuickLinks';
import { VolunteeringCard } from './components/VolunteeringCard';
import { CatsCard } from './components/CatCard';
import { ProjectModal } from './components/ProjectModal';
import { TechSphere } from './components/TechSphere';
import { AiChatCard } from './components/AiChatCard';
import { BackgroundParticles } from './components/BackgroundParticles';
import { SpotifyWidget } from './components/SpotifyWidget';
import { BlogCard } from './components/BlogCard';
import { BlogModal } from './components/BlogModal';

type CardCategory = 'project' | 'work' | 'life' | 'all';
type FilterType = 'all' | 'projects' | 'work experiences' | 'life' | 'blog';

interface Card {
  id: string;
  category: CardCategory;
  colSpan: string;
  rowSpan: string;
  render: (relevance: number) => React.ReactNode;
}

const App: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceDetails | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const initialLg = [
    { i: 'hero', x: 0, y: 0, w: 2, h: 3 },
    { i: 'about', x: 2, y: 0, w: 4, h: 3 },
    { i: 'ytl', x: 0, y: 3, w: 4, h: 3 },
    { i: 'techsphere', x: 4, y: 3, w: 2, h: 3 },
    { i: 'ai-chat', x: 0, y: 6, w: 2, h: 6 },
    { i: 'gem', x: 2, y: 6, w: 4, h: 3 },
    { i: 'allInOne', x: 2, y: 9, w: 2, h: 3 },
    { i: 'menswear', x: 4, y: 9, w: 2, h: 3 },
    { i: 'spotify', x: 0, y: 12, w: 4, h: 3 },
    { i: 'tracker', x: 4, y: 12, w: 2, h: 3 },
    { i: 'rag', x: 0, y: 15, w: 2, h: 3 },
    { i: 'volunteering', x: 2, y: 15, w: 2, h: 3 },
    { i: 'cat', x: 4, y: 15, w: 2, h: 3 },
  ];

  const [layout, setLayout] = useState<any>({ lg: initialLg });
  const [isInitializing, setIsInitializing] = useState(true);
  const draggingRef = useRef(false);
  const [justDragged, setJustDragged] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsInitializing(false), 500);
  }, []);

  const onLayoutChange = (currentLayout: any, allLayouts: any) => {
    setLayout(allLayouts);
  };

  const onDragStart = () => {
    draggingRef.current = true;
    setJustDragged(true);
  };

  const onDragStop = () => {
    // Small timeout to allow the browser's click event to fire (and be ignored)
    setTimeout(() => {
      draggingRef.current = false;
      setJustDragged(false);
    }, 100);
  };

  const handleCardClick = (action: () => void) => {
    if (!draggingRef.current && !justDragged) {
      action();
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  const projectData = {
    allInOne: {
      title: "All-In-One",
      subtitle: "Team Collaboration Tool",
      description: "Owned application deployment for a 6-person team project on AWS Amplify. Built GitHub Actions workflows for CI/CD and developed Terraform configurations for infrastructure provisioning.",
      tech: ['AWS Amplify', 'GitHub Actions', 'Terraform'],
      github: "https://github.com/spm-group5/spm-group5",
      architectureUrl: "/images/projects/all-in-one/architecture.png",
      workflowUrl: "/images/projects/all-in-one/preview.jpg"
    },
    rag: {
      title: "YilongMa RAG Chatbot",
      description: "RAG pipeline built with ChromaDB & Llama for transcripts.",
      tech: ['RAG', 'Llama', 'VectorDB'],
      github: "https://github.com/hjmook/yilongma",
      architectureUrl: "/images/projects/rag/telegram-interface.jpg",
      workflowUrl: "/images/projects/rag/preview.png"
    },
    menswear: {
      title: "Menswear",
      subtitle: "Microservices Web Application",
      description: "Led end-to-end deployment of an e-commerce platform on AWS (ECS/Fargate, ALB). Designed a multi-database backend: DynamoDB (sessions), DocumentDB (catalog), and RDS (transactions).",
      tech: ['AWS ECS/Fargate', 'DynamoDB', 'DocumentDB', 'RDS'],
      github: "https://github.com/JonOng2002/microservices-ecommerce",
      architectureUrl: "/images/projects/menswear/architecture.png",
      workflowUrl: "/images/projects/menswear/preview.jpg"
    },
    tracker: {
      title: "Internship Notion Tracker",
      subtitle: "Automation Tool",
      description: "Built a Python + Notion API workflow to auto-populate application data, eliminating 100% of manual entry via webhook automation on AWS (Lambda, Route 53, S3).",
      tech: ['Python', 'AWS Lambda', 'Notion API'],
      github: "https://github.com/JonOng2002/internship-notion-tracker",
      architectureUrl: "/images/projects/tracker/architecture.jpg",
      workflowUrl: "/images/projects/tracker/preview.png"
    }
  };

  const experienceData = {
    ytl: {
      company: "YTL PowerSeraya",
      role: "DevOps Engineer Intern",
      period: "Jan 2026 - Apr 2026",
      description: "During my time at YTL PowerSeraya, I worked closely with the infrastructure team to modernize deployment pipelines and establish robust CI/CD practices using Azure. Taking ownership of deployment procedures, I spearheaded initiatives to align our processes with modern DevOps standards.",
      skills: ["Azure App Service", "CI/CD", "Azure DevOps", "VM", "YAML", "Power BI"],
      achievements: [
        "Engineered CI/CD pipelines for PAAS & IAAS applications",
        "Standardised Azure App Service deployment patterns",
        "Proposed and implemented dedicated VM for Self-Hosted Agent to run pipelines",
        "PIC for Power BI KPI dashboard: Visualised cross-platform performance metrics/scorecards for department ops insights (ongoing)"
      ],
      logoUrl: "/images/company-logos/ytl-logo.jpeg",
      companyBgUrl: "/images/company-logos/ytl.jpg",
      galleryUrls: ["/images/company-logos/ytl.jpg", "/images/company-logos/ytl-logo.jpeg"]
    },
    gem: {
      company: "Global Enterprise Mobility",
      role: "Cloud Engineer Intern",
      period: "May 2025 - Aug 2025",
      description: "Designed and automated AWS infrastructure with Terraform IaC across dev/staging/prod environments, optimized CI/CD pipelines, and resolved production bugs—reducing manual overhead and deployment times across engineering teams.",
      skills: ["Amazon Web Services", "Terraform", "Jenkins", "Google Cloud Platform"],
      achievements: [
        "Built Terraform IaC for VPC/EC2/RDS/S3, improving environment parity and repeatability",
        "Automated CI/CD for 2 apps via GitHub Actions, cutting release time 70% (2h → 30min)",
        "Eliminated 100% webhook duplicates with DynamoDB idempotency layer (fixed bug impacting 12-15% transactions)",
        "Implemented CloudWatch monitoring/alerting, reducing incident response by 50%"
      ],
      logoUrl: "/images/company-logos/gem.png",
      companyBgUrl: "/images/company-logos/gem-main.png",
      galleryUrls: ["/images/company-logos/gem-main.png", "/images/company-logos/gem.png"]
    }
  };

  const CARDS: Card[] = [
    {
      id: 'hero',
      category: 'all',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: () => <HeroCard />
    },
    {
      id: 'about',
      category: 'work',
      colSpan: 'md:col-span-4 lg:col-span-4',
      rowSpan: 'lg:row-span-3',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><AboutCard onClick={() => handleCardClick(() => setIsAboutOpen(true))} /></div>
    },
    {
      id: 'ytl',
      category: 'work',
      colSpan: 'md:col-span-4 lg:col-span-4',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ExperienceCard
            company="YTL PowerSeraya"
            role="DevOps Engineer Intern"
            period="Jan 2026 - Apr 2026"
            achievements={["Implemented automated testing and approval gates", "Standardised Azure App Service deployment patterns"]}
            imageUrl="/images/company-logos/ytl.jpg"
            logoUrl="/images/company-logos/ytl-logo.jpeg"
            onClick={() => handleCardClick(() => setSelectedExperience(experienceData.ytl))}
          />
        </div>
      )
    },
    {
      id: 'techsphere',
      category: 'life',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><TechSphere /></div>
    },
    {
      id: 'ai-chat',
      category: 'project',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-6',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><AiChatCard /></div>
    },
    {
      id: 'gem',
      category: 'work',
      colSpan: 'md:col-span-4 lg:col-span-4',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ExperienceCard
            company="Global Enterprise Mobility"
            role="Cloud Engineer Intern"
            period="May 2025 - Aug 2025"
            achievements={["Reduced release time by 70% with GitHub Actions", "Eliminated webhook duplicates via DynamoDB idempotency layer"]}
            imageUrl="/images/company-logos/gem-main.png"
            logoUrl="/images/company-logos/gem.png"
            onClick={() => handleCardClick(() => setSelectedExperience(experienceData.gem))}
          />
        </div>
      )
    },
    {
      id: 'allInOne',
      category: 'project',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ProjectMiniCard
            title="All-In-One"
            subtitle="DevOps / Team Collaboration"
            description="Owned deployment for a 6-person team project. Managed environments and releases on AWS Amplify."
            tags={['AWS Amplify', 'GitHub Actions', 'Terraform']}
            workflowUrl={projectData.allInOne.workflowUrl}
            onClick={() => handleCardClick(() => setSelectedProject(projectData.allInOne))}
          />
        </div>
      )
    },
    {
      id: 'menswear',
      category: 'project',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ProjectMiniCard
            title="Menswear"
            subtitle="Microservices Web App"
            description="E-commerce microservices on AWS Fargate."
            tags={['AWS ECS/Fargate', 'DynamoDB', 'RDS']}
            workflowUrl={projectData.menswear.workflowUrl}
            onClick={() => handleCardClick(() => setSelectedProject(projectData.menswear))}
          />
        </div>
      )
    },
    {
      id: 'spotify',
      category: 'life',
      colSpan: 'md:col-span-4 lg:col-span-4',
      rowSpan: 'lg:row-span-3',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><SpotifyWidget /></div>
    },
    {
      id: 'tracker',
      category: 'project',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ProjectMiniCard
            title="Internship Tracker"
            description="Python automation for Notion-powered internship sync."
            tags={['FastAPI', 'Notion', 'Python']}
            workflowUrl={projectData.tracker.workflowUrl}
            onClick={() => handleCardClick(() => setSelectedProject(projectData.tracker))}
          />
        </div>
      )
    },
    {
      id: 'rag',
      category: 'project',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ProjectMiniCard
            title="YilongMa RAG"
            description="RAG pipeline with ChromaDB & Llama for Elon transcripts."
            tags={['RAG', 'Llama', 'VectorDB']}
            workflowUrl={projectData.rag.workflowUrl}
            onClick={() => handleCardClick(() => setSelectedProject(projectData.rag))}
          />
        </div>
      )
    },
    {
      id: 'volunteering',
      category: 'life',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><VolunteeringCard imageUrl="/images/life/trtl/preview.jpeg" /></div>
    },
    {
      id: 'cat',
      category: 'life',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><CatsCard /></div>
    },
  ];

  const sortedCards = useMemo(() => {
    return CARDS.map((card) => {
      let score = 0;
      const catMap: Record<FilterType, CardCategory | 'none'> = {
        'all': 'all',
        'projects': 'project',
        'work experiences': 'work',
        'life': 'life',
        'blog': 'none'
      };

      if (selectedFilter === 'all') {
        score = 1000;
      } else {
        const targetCategory = catMap[selectedFilter];
        if (card.category === targetCategory) {
          score = 5000;
        } else {
          score = 5;
        }
      }
      return { card, score };
    });
  }, [selectedFilter]);

  const constraintsRef = useRef(null);

  return (
    <div className={`min-h-screen p-4 md:p-8 lg:p-12 selection:bg-forest-accent/30 font-sans relative z-0 overflow-x-hidden ${isInitializing ? 'layout-initializing' : ''}`}>
      <BackgroundParticles />
      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
      <ExperienceModal isOpen={!!selectedExperience} onClose={() => setSelectedExperience(null)} experience={selectedExperience} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <BlogModal isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} />

      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex bg-white/40 dark:bg-[#0d1f14]/80 backdrop-blur-md p-1.5 rounded-2xl border border-forest/10 dark:border-emerald-500/10 shadow-lg">
            {(['all', 'projects', 'work experiences', 'life', 'blog'] as FilterType[]).map((filter) => (
              <button
                key={filter}
                onClick={() => filter === 'blog' ? setIsBlogOpen(true) : setSelectedFilter(filter)}
                className={`px-6 py-2.5 rounded-xl text-[11px] font-semibold tracking-wide uppercase transition-all duration-300 relative ${selectedFilter === filter
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40'
                  : 'text-forest/60 dark:text-emerald-700/60 hover:text-emerald-400'
                  }`}
              >
                {filter}
                {filter === 'blog' && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                )}
              </button>
            ))}
          </div>
          <p className="text-[9px] text-emerald-700/30 dark:text-emerald-500/20 font-mono uppercase tracking-[0.2em] animate-pulse">
            Interactive Grid • Drag to rearrange
          </p>
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 bg-white dark:bg-[#0d1f14] border border-forest/10 dark:border-emerald-500/20 rounded-2xl text-forest dark:text-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>
      </div>

      <div ref={constraintsRef} className="max-w-7xl mx-auto relative z-10">
        <ResponsiveGridLayout
          className="layout"
          layouts={layout}
          breakpoints={{ lg: 1024, md: 768, sm: 640 }}
          cols={{ lg: 6, md: 4, sm: 1 }}
          rowHeight={100}
          draggableHandle=".drag-handle"
          onLayoutChange={onLayoutChange}
          onDragStart={onDragStart}
          onDragStop={onDragStop}
          margin={[16, 16]}
          isResizable={false}
          draggableCancel=".no-drag"
        >
          {sortedCards.map(({ card, score }) => (
            <div key={card.id} className="drag-handle h-full">
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full w-full"
              >
                {card.render(score)}
              </motion.div>
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default App;