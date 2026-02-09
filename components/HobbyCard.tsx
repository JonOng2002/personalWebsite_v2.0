
import React from 'react';

export const HobbyCard: React.FC = () => {
  return (
    <div className="glass rounded-3xl p-6 flex flex-col h-full relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
         <svg className="w-20 h-20 text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Beyond the Code</h3>
      
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="mt-1 p-1 bg-indigo-500/10 rounded text-indigo-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-tighter">Teamfight Tactics</p>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Tactical gaming enthusiast. Love the strategic depth of unit positioning and economy management.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1 p-1 bg-rose-500/10 rounded text-rose-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-tighter">Passion Project: VodVoid</p>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Created to automate highlight clips for my gaming circle. Merging tech with my hobby.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
