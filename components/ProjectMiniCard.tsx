import React from 'react';

interface ProjectMiniProps {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  onClick?: () => void;
  showProjectTag?: boolean;
  badgeText?: string;
}

export const ProjectMiniCard: React.FC<ProjectMiniProps> = ({ 
  title, 
  subtitle,
  description, 
  tags, 
  onClick,
  showProjectTag = true,
  badgeText = "Project"
}) => {
  const neutralBadge = "inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase border transition-all bg-forest/5 dark:bg-slate-900/30 border-forest/10 dark:border-emerald-500/10 text-forest/50 dark:text-emerald-100/40";

  return (
    <div 
      className="glass rounded-3xl p-8 flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden cursor-pointer bg-gradient-to-br from-white to-beige/30 dark:from-slate-900 dark:to-emerald-950/20"
      onClick={onClick}
    >
      {showProjectTag && (
        <div className="absolute top-0 right-4 z-20">
          <div className="bg-forest dark:bg-emerald-600 text-white text-[8px] font-black px-3 py-1 rounded-b-md tracking-[0.2em] uppercase shadow-sm font-display">
            {badgeText}
          </div>
        </div>
      )}

      <div className="mb-3 pr-8">
        <h4 className="font-bold text-forest dark:text-white text-md group-hover:text-forest-accent dark:group-hover:text-emerald-400 transition-colors font-display">
          {title}
        </h4>
        {subtitle && (
          <p className="text-[10px] text-forest-accent/70 dark:text-emerald-400/70 font-bold uppercase tracking-wider font-display">
            {subtitle}
          </p>
        )}
      </div>
      
      <p className="text-forest/60 dark:text-emerald-100/50 text-xs leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <div className="flex justify-between items-end">
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <span key={tag} className={neutralBadge}>
              {tag}
            </span>
          ))}
        </div>
        <div className="text-forest-accent dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </div>
      </div>
    </div>
  );
};