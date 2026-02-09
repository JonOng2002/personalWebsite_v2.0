import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroCard } from './components/HeroCard';
import { VodVoidCard } from './components/VodVoidCard';
import { AboutCard } from './components/AboutCard';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectMiniCard } from './components/ProjectMiniCard';
import { QuickLinks } from './components/QuickLinks';
import { VolunteeringCard } from './components/VolunteeringCard';
import { CatCard } from './components/CatCard';
import { ProjectModal } from './components/ProjectModal';
import { TechCarousel } from './components/TechCarousel';
import { AiChatCard } from './components/AiChatCard';
import { BackgroundParticles } from './components/BackgroundParticles';
import { SpotifyWidget } from './components/SpotifyWidget';

type CardCategory = 'project' | 'work' | 'life' | 'all';
type FilterType = 'all' | 'projects' | 'work experiences' | 'life';

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
  const [isDark, setIsDark] = useState(true);

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
    vodvoid: {
      title: "VodVoid",
      description: "Automated video intelligence pipeline using OpenCV and YOLOv8.",
      tech: ['OpenCV', 'YOLOv8', 'Python'],
      github: "https://github.com/JonOng2002/VodVoid",
    },
    rag: {
      title: "YilongMa RAG Chatbot",
      description: "RAG pipeline built with ChromaDB & Llama for transcripts.",
      tech: ['RAG', 'Llama', 'VectorDB'],
      github: "https://github.com/hjmook/yilongma",
    },
    aws: {
      title: "Menswear",
      subtitle: "Cloud Engineering",
      description: "E-commerce microservices platform hosted on AWS Fargate.",
      tech: ['AWS Fargate', 'ECS', 'MongoDB'],
      github: "https://github.com/JonOng2002/microservices-ecommerce",
    },
    tracker: {
      title: "Internship Tracker",
      description: "Python automation syncing application lifecycles via FastAPI & Notion.",
      tech: ['Python', 'FastAPI', 'Notion'],
      github: "https://github.com/JonOng2002/internship-notion-tracker",
    }
  };

  const CARDS: Card[] = [
    {
      id: 'hero',
      category: 'all',
      colSpan: 'md:col-span-4 lg:col-span-4',
      rowSpan: 'lg:row-span-3',
      render: () => <HeroCard />
    },
    {
      id: 'about',
      category: 'work',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-3',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><AboutCard /></div>
    },
    {
      id: 'ytl',
      category: 'work',
      colSpan: 'md:col-span-3 lg:col-span-3',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ExperienceCard 
            company="YTL PowerSeraya" 
            role="Software Engineer Intern"
            impact="Leading enterprise-wide transition to multi-stage YAML pipelines."
            period="Jan 2026 - Apr 2026"
            achievements={["Standardising CI/CD for 11 applications"]}
          />
        </div>
      )
    },
    {
      id: 'gem',
      category: 'work',
      colSpan: 'md:col-span-3 lg:col-span-3',
      rowSpan: 'lg:row-span-3',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ExperienceCard 
            company="GEM" 
            role="DevOps Intern"
            impact="Standardised AWS environments for 15+ microservices."
            period="May 2025 - Aug 2025"
            achievements={["Terraform IaC modules optimization"]}
          />
        </div>
      )
    },
    {
      id: 'ai-chat',
      category: 'project',
      colSpan: 'md:col-span-4 lg:col-span-4',
      rowSpan: 'lg:row-span-4',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><AiChatCard /></div>
    },
    {
      id: 'vodvoid',
      category: 'project',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-4',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : 'cursor-pointer'}`} onClick={() => rel >= 10 && setSelectedProject(projectData.vodvoid)}>
          <VodVoidCard />
        </div>
      )
    },
    {
      id: 'menswear',
      category: 'project',
      colSpan: 'md:col-span-3 lg:col-span-3',
      rowSpan: 'lg:row-span-2',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ProjectMiniCard 
            title="Menswear"
            subtitle="Cloud Engineering"
            description="E-commerce microservices platform hosted on AWS Fargate."
            tags={['AWS', 'ECS', 'MongoDB']}
            onClick={() => rel >= 10 && setSelectedProject(projectData.aws)}
          />
        </div>
      )
    },
    {
      id: 'spotify',
      category: 'life',
      colSpan: 'md:col-span-3 lg:col-span-3',
      rowSpan: 'lg:row-span-2',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><SpotifyWidget /></div>
    },
    {
      id: 'rag',
      category: 'project',
      colSpan: 'md:col-span-4 lg:col-span-4',
      rowSpan: 'lg:row-span-2',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ProjectMiniCard 
            title="YilongMa RAG Chatbot"
            description="RAG pipeline built with ChromaDB & Llama for transcripts."
            tags={['RAG', 'Llama', 'VectorDB']}
            onClick={() => rel >= 10 && setSelectedProject(projectData.rag)}
          />
        </div>
      )
    },
    {
      id: 'tracker',
      category: 'project',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'lg:row-span-2',
      render: (rel) => (
        <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}>
          <ProjectMiniCard 
            title="Internship Tracker"
            description="Python automation for Notion sync."
            tags={['FastAPI', 'Notion']}
            onClick={() => rel >= 10 && setSelectedProject(projectData.tracker)}
          />
        </div>
      )
    },
    {
      id: 'volunteering',
      category: 'life',
      colSpan: 'md:col-span-6 lg:col-span-6',
      rowSpan: 'lg:row-span-2',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><VolunteeringCard /></div>
    },
    {
      id: 'cat',
      category: 'life',
      colSpan: 'md:col-span-6 lg:col-span-6',
      rowSpan: 'lg:row-span-3',
      render: (rel) => <div className={`h-full transition-all duration-500 ${rel < 10 ? 'opacity-30 blur-[1px]' : ''}`}><CatCard /></div>
    }
  ];

  const sortedCards = useMemo(() => {
    return CARDS.map((card, index) => {
      let score = 0;
      if (card.id === 'hero') return { card, score: 10000 };

      const catMap: Record<FilterType, CardCategory> = {
        'all': 'all',
        'projects': 'project',
        'work experiences': 'work',
        'life': 'life'
      };

      if (selectedFilter === 'all') {
        score = 100 - index;
      } else {
        const targetCategory = catMap[selectedFilter];
        if (card.category === targetCategory) score += 500;
        if (selectedFilter === 'work experiences' && card.category === 'project') score += 200;
        if (selectedFilter === 'projects' && card.category === 'work') score += 100;
        score += (CARDS.length - index);
      }
      return { card, score };
    }).sort((a, b) => b.score - a.score);
  }, [selectedFilter]);

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 selection:bg-forest-accent/30 font-sans relative z-0 overflow-x-hidden">
      <BackgroundParticles />
      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />

      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex bg-white/40 dark:bg-slate-850/80 backdrop-blur-md p-1.5 rounded-2xl border border-forest/10 dark:border-emerald-500/10 shadow-lg">
          {(['all', 'projects', 'work experiences', 'life'] as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                selectedFilter === filter 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40 scale-105' 
                  : 'text-forest/60 dark:text-slate-400 hover:text-emerald-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-3 bg-white dark:bg-slate-850 border border-forest/10 dark:border-emerald-500/20 rounded-2xl text-forest dark:text-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          layout
          transition={{ duration: 0.6, type: "spring", stiffness: 180, damping: 24 }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 grid-flow-row-dense"
        >
          <AnimatePresence mode="popLayout">
            {sortedCards.map(({ card, score }) => (
              <motion.div 
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, layout: { duration: 0.6 } }}
                className={`${card.colSpan} ${card.rowSpan}`}
              >
                {card.render(score)}
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.div layout className="lg:col-span-6"><TechCarousel /></motion.div>
          <motion.div layout className="lg:col-span-6"><QuickLinks /></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;