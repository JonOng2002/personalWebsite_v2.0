import React from 'react';

interface AboutCardProps {
  onClick?: () => void;
}

export const AboutCard: React.FC<AboutCardProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`glass rounded-[2rem] p-8 flex flex-col h-full bg-white dark:bg-[#0c1a10] shadow-sm hover:shadow-xl transition-all duration-300 ${onClick ? 'cursor-pointer group' : ''}`}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 mb-8 uppercase tracking-[0.2em]">About Me</h3>
        {onClick && (
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        )}
      </div>
      <div className="flex-grow space-y-6 text-zinc-600 dark:text-zinc-400 text-[16px] leading-[1.6] antialiased">
        <p>
          I'm Jonathan, a SMU Information Systems Undergraduate passionate about <strong className="text-zinc-900 dark:text-white font-semibold">Cloud Infrastructure</strong> and <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">DevOps</strong>.
        </p>
        <p>
          I focus on engineering scalable, secure architectural patterns and thrive in automating complex workflows.
        </p>
        <p>
          I'm currently working as a <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">DevOps Engineer Intern</strong> at <strong className="text-zinc-900 dark:text-white font-semibold">YTL PowerSeraya</strong>, where I'm responsible for automating and engineering scalable, secure architectural patterns.
        </p>
      </div>
    </div>
  );
};