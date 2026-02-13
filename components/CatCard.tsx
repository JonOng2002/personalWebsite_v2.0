
import React from 'react';

export const CatsCard: React.FC = () => {
  return (
    <div className="glass rounded-3xl p-6 flex flex-col relative border-none h-full">
      <div className="flex items-center justify-between mb-4 z-10">
        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-gray-500">The Cats</h4>
        <div className="h-1 w-6 bg-emerald-500/20 rounded-full"></div>
      </div>
      
      <div className="flex flex-row gap-6 items-center flex-grow">
        <div className="w-1/2 relative aspect-square rounded-2xl overflow-hidden">
          <img 
            src="/cats/cats.jpg"
            alt="A photo of Yuumi and Timmy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 flex items-center">
          <p className="text-forest/60 dark:text-emerald-100/50 text-sm leading-relaxed">
          This is Timmy (left) and Yuumi (right). Timmy’s an American Curl tabby, and Yuumi is a mixed-breed tripod that I rescued. They have been with me through the highs and lows and are also my daily reminder to keep going.
          </p>
        </div>
      </div>
    </div>
  );
};
