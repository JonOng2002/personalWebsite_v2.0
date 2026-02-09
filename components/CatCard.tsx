import React from 'react';

export const CatCard: React.FC = () => {
  return (
    <div className="glass rounded-3xl h-full flex flex-col lg:flex-row overflow-hidden group relative border border-emerald-500/10 dark:border-emerald-500/20">
      {/* Narrative Section (60%) */}
      <div className="w-full lg:w-[60%] p-8 flex flex-col justify-center bg-gradient-to-br from-emerald-50/30 to-slate-50/30 dark:from-emerald-950/20 dark:to-slate-900/40">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl font-bold text-emerald-950 dark:text-white">Beyond the Code</h3>
          <div className="h-px flex-grow bg-emerald-200/50 dark:bg-emerald-800/30"></div>
        </div>
        
        <div className="space-y-4">
          <p className="text-emerald-900/70 dark:text-emerald-100/60 text-sm leading-relaxed">
            Outside of tech, I compete in <span className="text-emerald-600 dark:text-emerald-400 font-bold">Teamfight Tactics</span>. It keeps me sharp on systems thinking, trade-offs, and making good decisions under pressure.
          </p>
          <p className="text-emerald-900/70 dark:text-emerald-100/60 text-sm leading-relaxed">
            I am also a proud cat dad to two rescues: <span className="text-emerald-600 dark:text-emerald-400 font-bold">Yuumi</span>, a tripod cat, and <span className="text-emerald-600 dark:text-emerald-400 font-bold">Timmy</span>, my playful companion. They keep me grounded and remind me to slow down.
          </p>
        </div>
      </div>

      {/* Visual Section (40%) */}
      <div className="hidden lg:flex w-[40%] gap-3 p-4 bg-emerald-50/50 dark:bg-slate-950/30 items-center justify-center">
        <div className="w-1/2 aspect-[4/5] bg-emerald-100 dark:bg-slate-800 rounded-2xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 flex items-end p-3 shadow-inner border border-emerald-500/10">
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
          <p className="relative z-10 text-[10px] font-bold text-white uppercase tracking-widest">Yuumi</p>
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
             <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
        </div>
        <div className="w-1/2 aspect-[4/5] bg-emerald-100 dark:bg-slate-800 rounded-2xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 delay-75 flex items-end p-3 shadow-inner border border-emerald-500/10">
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
          <p className="relative z-10 text-[10px] font-bold text-white uppercase tracking-widest">Timmy</p>
           <div className="absolute inset-0 flex items-center justify-center opacity-10">
             <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
};