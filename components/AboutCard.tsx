import React from 'react';

export const AboutCard: React.FC = () => {
  return (
    <div className="glass rounded-3xl p-8 flex flex-col h-full bg-gradient-to-br from-white to-beige/30 dark:from-slate-850 dark:to-emerald-950/20">
      <h3 className="text-sm font-bold text-forest dark:text-emerald-400 mb-6 uppercase tracking-widest font-display">About Me</h3>
      <div className="flex-grow space-y-6 text-forest/70 dark:text-emerald-100/60 text-sm leading-relaxed">
        <p>
          SMU Information Systems student with a core specialisation in <strong className="text-forest dark:text-white font-bold">Cloud Infrastructure</strong> and <strong className="text-forest dark:text-emerald-400 font-bold">AI Automation</strong>.
        </p>
        <p>
          From standardising environments at <span className="text-forest dark:text-emerald-300 font-bold">GEM</span> to leading CI/CD modernisation at <span className="text-forest dark:text-emerald-300 font-bold">YTL PowerSeraya</span>, I specialize in reducing deployment latency and operational friction.
        </p>
      </div>
      <div className="mt-auto pt-6 border-t border-forest/10 dark:border-emerald-500/10">
        <p className="font-mono text-[10px] text-forest/40 dark:text-emerald-500/50 uppercase tracking-tighter">
          Targeting: DevOps / MLOps Engineering Roles
        </p>
      </div>
    </div>
  );
};