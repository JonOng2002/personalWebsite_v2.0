import React from 'react';

interface ExperienceProps {
  company: string;
  role: string;
  impact: string;
  period: string;
  achievements?: string[];
  showBadge?: boolean;
  badgeText?: string;
}

export const ExperienceCard: React.FC<ExperienceProps> = ({ 
  company, 
  role, 
  impact, 
  period, 
  achievements,
  showBadge = true,
  badgeText = "Internship"
}) => {
  const highlightTerms = /(70%|100%|67%|Jenkins|GCP|SME|Terraform|Azure DevOps|CI\/CD|YAML|15\+|80%|Azure App Service)/g;

  return (
    <div className={`glass rounded-3xl p-8 flex flex-col h-full group relative overflow-hidden bg-gradient-to-br from-white to-beige/30 dark:from-slate-900/40 dark:to-emerald-950/20`}>
      {showBadge && (
        <div className="absolute top-0 right-4 z-20">
          <div className="bg-forest dark:bg-emerald-600 text-white text-[8px] font-black px-3 py-1 rounded-b-md tracking-[0.2em] uppercase shadow-md font-display">{badgeText}</div>
        </div>
      )}

      <div className="flex flex-col mb-8">
        <div className="flex items-center justify-between gap-4 mb-2">
          <h4 className="font-bold text-2xl tracking-tight text-forest dark:text-white font-display">{company}</h4>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-forest-accent dark:text-emerald-400 font-bold uppercase tracking-wider font-display">{role}</p>
          <span className="text-[9px] font-mono font-bold text-forest/40 dark:text-emerald-500/40 bg-forest/5 dark:bg-slate-900/30 px-3 py-1 rounded-full border border-forest/10 dark:border-emerald-500/10">
            {period}
          </span>
        </div>
      </div>
      
      <div className="space-y-6 flex-grow">
        <p className="text-forest/70 dark:text-emerald-100/60 text-sm leading-relaxed font-medium">
          {impact}
        </p>
        
        {achievements && (
          <div className="flex flex-col gap-4">
            {achievements.map((ach, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-2 h-1 w-1 rounded-full shrink-0 bg-forest dark:bg-emerald-500 shadow-[0_0_8px_currentColor]"></div>
                <p className="text-[11px] md:text-xs text-forest/60 dark:text-emerald-100/50 leading-relaxed">
                  {ach.split(highlightTerms).map((part, i) => 
                    highlightTerms.test(part) ? (
                      <span key={i} className="font-bold text-forest dark:text-emerald-300 border-b border-forest/20 dark:border-emerald-500/30">{part}</span>
                    ) : part
                  )}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};