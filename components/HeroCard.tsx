import React from 'react';

export const HeroCard: React.FC = () => {
  return (
    <div className="glass rounded-3xl p-8 md:p-14 h-full flex flex-col overflow-hidden relative group">
      {/* Decorative Glow - Only visible/relevant in dark mode */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500 opacity-0 dark:opacity-[0.08] blur-[120px] rounded-full group-hover:dark:opacity-[0.12] transition-opacity"></div>
      
      <div className="relative z-10 flex-grow">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest/5 dark:bg-emerald-500/10 border border-forest/10 dark:border-emerald-500/20 rounded-full">
            <span className="flex h-1.5 w-1.5 rounded-full bg-forest dark:bg-emerald-400 animate-pulse"></span>
            <p className="text-forest dark:text-emerald-400 font-bold text-[10px] tracking-widest uppercase font-display">Available Summer 2026</p>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-forest dark:text-slate-100 leading-[1.1] font-display">
          Jonathan <span className="text-forest-accent dark:text-emerald-400">Ong</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-forest/70 dark:text-emerald-100/70 font-medium max-w-2xl leading-relaxed mb-10">
          <span className="text-forest dark:text-white font-bold">Aspiring DevOps & AI Engineer.</span> Building my foundation in cloud infrastructure and learning to automate intelligence through scalable systems.
        </p>
        
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 rounded-xl bg-forest-muted dark:bg-slate-850/50 text-forest dark:text-emerald-200/60 text-[10px] font-bold tracking-wider uppercase border border-forest/10 dark:border-emerald-500/10 font-mono">SMU IS (AI)</span>
          <span className="px-3 py-1.5 rounded-xl bg-forest-muted dark:bg-slate-850/50 text-forest dark:text-emerald-200/60 text-[10px] font-bold tracking-wider uppercase border border-forest/10 dark:border-emerald-500/10 font-mono">Singapore</span>
        </div>
      </div>

      <div className="relative z-10 mt-12 flex flex-wrap gap-4 pt-8 border-t border-forest/10 dark:border-emerald-500/10">
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="flex items-center gap-2 bg-forest dark:bg-emerald-600 hover:bg-forest-accent dark:hover:bg-emerald-500 text-ivory dark:text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg active:scale-95 font-display"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          View CV
        </a>
        <div className="flex gap-2">
           <a href="https://github.com/JonOng2002" target="_blank" className="p-4 border border-forest/10 dark:border-emerald-500/10 bg-forest-muted/50 dark:bg-slate-850/50 hover:bg-forest/10 dark:hover:bg-emerald-500/10 text-forest dark:text-emerald-300 rounded-2xl transition-all" title="GitHub">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
           </a>
           <a href="https://linkedin.com/in/jonathan-ong-66502a2b8" target="_blank" className="p-4 border border-forest/10 dark:border-emerald-500/10 bg-forest-muted/50 dark:bg-slate-850/50 hover:bg-forest/10 dark:hover:bg-emerald-500/10 text-forest dark:text-emerald-300 rounded-2xl transition-all" title="LinkedIn">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
           </a>
        </div>
      </div>
    </div>
  );
};