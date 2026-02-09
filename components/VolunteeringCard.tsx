import React from 'react';

export const VolunteeringCard: React.FC = () => {
  return (
    <div className="group relative rounded-3xl p-8 h-full overflow-hidden transition-all hover:scale-[1.02] border border-emerald-500/10 dark:border-emerald-500/20 glass">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-emerald-500/5 -z-10 opacity-50"></div>
      
      <div className="flex flex-col md:flex-row h-full relative z-10 gap-8">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-600 dark:text-orange-400 group-hover:rotate-12 transition-transform shadow-inner">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Active Partner</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-emerald-950 dark:text-white mb-1 font-display">Giving Back</h3>
          <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-[0.2em] mb-4 font-mono">The Right To Live SG</p>

          <p className="text-emerald-900/70 dark:text-emerald-100/60 text-sm leading-relaxed max-w-xl">
            Volunteering at TRTL SG to alleviate weekend manpower shortages. I focus on animal enrichment and rehabilitation, directly improving quality of life for <span className="font-bold text-emerald-950 dark:text-white underline decoration-orange-500/30">15-20 rescue dogs</span> each week.
          </p>
        </div>

        <div className="flex flex-col justify-end items-end shrink-0 border-t md:border-t-0 md:border-l border-emerald-500/10 pt-6 md:pt-0 md:pl-8">
           <div className="text-right">
             <p className="text-[10px] font-mono text-emerald-500/50 uppercase tracking-widest mb-1">Duration</p>
             <p className="text-sm font-bold text-emerald-950 dark:text-emerald-100">June 2024 - Present</p>
           </div>
           <div className="text-right mt-4">
             <p className="text-[10px] font-mono text-emerald-500/50 uppercase tracking-widest mb-1">Impact Area</p>
             <p className="text-sm font-bold text-orange-500 uppercase tracking-tight">Animal Welfare</p>
           </div>
        </div>
      </div>
    </div>
  );
};