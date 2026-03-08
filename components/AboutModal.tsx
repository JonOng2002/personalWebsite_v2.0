import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[150] bg-black/95 flex flex-col items-center overflow-y-auto px-4 py-12 md:py-20"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="fixed top-8 right-8 z-[160] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all transform active:scale-90 border border-white/10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <header className="text-center mb-16 space-y-4 max-w-2xl px-6">
                        <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl">👋</span>
                        </div>
                        <h2 className="text-4xl font-extrabold text-white font-display tracking-tight">Hello! I'm Jonathan</h2>
                        <p className="text-emerald-400/60 text-[11px] font-bold uppercase tracking-widest leading-loose">
                            SMU Information Systems Student • Cloud Infrastructure & DevOps Enthusiast
                        </p>
                    </header>

                    <div className="max-w-2xl w-full space-y-12">
                        {/* Summary Section */}
                        <section className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                            <p>
                                I'm passionate about <span className="text-white font-semibold underline decoration-emerald-500/30 decoration-2 underline-offset-4">cloud infrastructure</span> and <span className="text-white font-semibold underline decoration-emerald-500/30 decoration-2 underline-offset-4">DevOps automation</span>. Currently, I'm at <span className="text-emerald-400">YTL PowerSeraya</span>, where I focus on engineering and implementing CI/CD pipelines for IaaS/PaaS applications, aiming to improve deployment efficiency and system reliability.
                            </p>
                        </section>

                        {/* Professional Timeline */}
                        <section className="space-y-8">
                            <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-6">Experience Highlights</h3>

                            <div className="space-y-8 border-l border-white/10 ml-4 pl-8 pt-2">
                                {/* YTL */}
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] border-4 border-black"></div>
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-mono text-emerald-400/60 uppercase">Jan 2026 — Present</span>
                                        <h4 className="text-xl font-bold text-white">YTL PowerSeraya</h4>
                                        <p className="text-zinc-400">Engineering CI/CD pipelines for IaaS/PaaS applications across 11 Azure apps. Standardizing App Service patterns and implementing self-hosted VM agents.</p>
                                    </div>
                                </div>

                                {/* GEM */}
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-emerald-500/30 border-4 border-black"></div>
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-mono text-emerald-400/60 uppercase">May 2025 — Aug 2025</span>
                                        <h4 className="text-xl font-bold text-white">Global Enterprise Mobility</h4>
                                        <p className="text-zinc-400">Designed AWS infrastructure (VPC/EC2/RDS/S3) using Terraform. Automated GitHub Actions pipelines, achieving 70% faster deployments.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Tech Stack Grid */}
                        <section className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 space-y-8">
                            <h3 className="text-[11px] font-bold text-emerald-400 uppercase tracking-[0.2em]">Core Specialties</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="space-y-1">
                                    <p className="text-white font-bold text-xs uppercase">Cloud</p>
                                    <p className="text-zinc-500 text-[10px] leading-tight">AWS, Azure, Terraform</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white font-bold text-xs uppercase">CI/CD</p>
                                    <p className="text-zinc-500 text-[10px] leading-tight">GH Actions, Jenkins, YAML</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white font-bold text-xs uppercase">Data</p>
                                    <p className="text-zinc-500 text-[10px] leading-tight">DynamoDB, Power BI, Python</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white font-bold text-xs uppercase">Monitoring</p>
                                    <p className="text-zinc-500 text-[10px] leading-tight">CloudWatch, Alerting</p>
                                </div>
                            </div>
                        </section>

                        {/* Personal Section */}
                        <section className="p-8 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/10 flex flex-col md:flex-row gap-8 items-center justify-between">
                            <div className="space-y-2">
                                <h4 className="text-white font-bold text-lg">Beyond the Terminal</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    In my free time, I'm an avid gamer. You'll likely find me in the convergence, strategically building teams in <span className="text-white font-semibold">TFT (Teamfight Tactics)</span> — my favorite game!
                                </p>
                            </div>
                            <div className="shrink-0 w-24 h-24 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-3xl">
                                🎮
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="flex flex-wrap justify-center gap-4 py-8">
                            <a href="#" className="px-8 py-3 rounded-2xl bg-emerald-500 text-white font-bold text-sm hover:scale-105 transition-all">Resume PDF</a>
                            <a href="https://github.com/JonOng2002" target="_blank" className="px-8 py-3 rounded-2xl bg-white/5 text-white font-bold text-sm border border-white/10 hover:bg-white/10 transition-all">GitHub</a>
                            <a href="https://linkedin.com" target="_blank" className="px-8 py-3 rounded-2xl bg-white/5 text-white font-bold text-sm border border-white/10 hover:bg-white/10 transition-all">LinkedIn</a>
                        </div>
                    </div>

                    <footer className="mt-12 text-center pb-20">
                        <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">
                            Stay Hungry, Stay Humble
                        </p>
                    </footer>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
