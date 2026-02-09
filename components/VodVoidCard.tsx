import React from 'react';

export const VodVoidCard: React.FC = () => {
  const neutralBadge = "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border transition-all bg-forest/5 dark:bg-slate-850/50 border-forest/10 dark:border-emerald-500/20 text-forest/60 dark:text-emerald-100/60";

  return (
    <div className="glass rounded-3xl p-6 flex flex-col h-full group relative overflow-hidden bg-gradient-to-br from-white to-beige/30 dark:from-slate-850 dark:to-emerald-950/40">
      <div className="absolute top-0 right-4 z-30">
        <div className="bg-forest dark:bg-emerald-600 text-white text-[8px] font-black px-3 py-1 rounded-b-lg tracking-[0.2em] uppercase shadow-sm font-display">AI Tool</div>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold text-forest dark:text-white mb-1 font-display">VodVoid</h3>
        <p className="text-forest-accent dark:text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase">Computer Vision Product</p>
      </div>

      <p className="text-forest/60 dark:text-emerald-100/50 text-xs mb-8 leading-relaxed">
        Automated video intelligence pipeline using OpenCV and YOLOv8. Detects and indexes key highlights from raw gaming footage.
      </p>

      <div className="bg-forest/5 dark:bg-slate-900/50 rounded-2xl p-5 mb-8 border border-forest/10 dark:border-emerald-500/10">
        <div className="flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-forest/10 dark:bg-emerald-500/10 -z-10"></div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-850 border border-forest/10 dark:border-emerald-500/20 flex items-center justify-center text-forest dark:text-emerald-400 shadow-inner group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </div>
            <span className="text-[8px] font-bold uppercase tracking-tighter text-forest/40 dark:text-emerald-500/60">Ingest</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-850 border border-forest/10 dark:border-emerald-500/20 flex items-center justify-center text-forest dark:text-emerald-400 shadow-inner group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <span className="text-[7px] font-bold uppercase tracking-tighter text-forest/40 dark:text-emerald-500/60 text-center">YOLOv8</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-forest dark:bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-forest/20 dark:shadow-emerald-500/20 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            </div>
            <span className="text-[8px] font-bold uppercase tracking-tighter text-forest dark:text-emerald-400">Highlights</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-8">
        {['OpenCV', 'YOLOv8', 'Python'].map(tech => (
          <span key={tech} className={neutralBadge}>{tech}</span>
        ))}
      </div>

      <div className="mt-auto">
        <a 
          href="https://github.com/JonOng2002/VodVoid" 
          target="_blank"
          className="w-full flex items-center justify-center gap-2 py-3 bg-forest dark:bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-forest-accent dark:hover:bg-emerald-500 transition-all shadow-md active:scale-[0.98]"
        >
          View Pipeline Source
        </a>
      </div>
    </div>
  );
};