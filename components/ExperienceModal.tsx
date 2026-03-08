import React, { useState } from 'react';

export interface ExperienceDetails {
    company: string;
    role: string;
    period: string;
    description: string;
    skills: string[];
    achievements: string[];
    logoUrl?: string;
    companyBgUrl?: string;
    galleryUrls?: string[];
}

interface ExperienceModalProps {
    isOpen: boolean;
    onClose: () => void;
    experience: ExperienceDetails | null;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, onClose, experience }) => {
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

    if (!isOpen || !experience) return null;

    return (
        <>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
                    onClick={onClose}
                ></div>

                {/* Modal Content */}
                <div className="relative bg-white dark:bg-[#0c1a10] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300 border border-forest/10 dark:border-emerald-500/20 flex flex-col">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    {/* Hero Header Section */}
                    <div className="relative h-48 md:h-64 rounded-t-3xl overflow-hidden shrink-0">
                        {experience.companyBgUrl ? (
                            <img src={experience.companyBgUrl} alt={`${experience.company} Office`} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-forest to-emerald-900"></div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end gap-6">
                            {experience.logoUrl && (
                                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl overflow-hidden border-4 border-white dark:border-[#0c1a10] bg-white shadow-xl translate-y-4 md:translate-y-6">
                                    <img src={experience.logoUrl} alt={`${experience.company} Logo`} className="w-full h-full object-cover" />
                                </div>
                            )}
                            <div className="pb-2 md:pb-0">
                                <h2 className="text-3xl md:text-4xl font-black text-white font-display drop-shadow-md">{experience.company}</h2>
                                <div className="text-emerald-300 font-bold uppercase tracking-wider text-sm mt-1 drop-shadow-md">{experience.role}</div>
                            </div>
                        </div>
                    </div>

                    {/* Body Section */}
                    <div className="p-6 md:p-8 pt-10 md:pt-12 flex-grow">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Description */}
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-emerald-500/50 mb-4 border-b border-forest/10 dark:border-emerald-500/10 pb-2">Overview</h3>
                                    <p className="text-forest/80 dark:text-emerald-100/70 leading-relaxed">
                                        {experience.description}
                                    </p>
                                </div>

                                {/* Key Achievements */}
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-emerald-500/50 mb-4 border-b border-forest/10 dark:border-emerald-500/10 pb-2">Key Contributions</h3>
                                    <div className="space-y-4">
                                        {experience.achievements.map((achievements, idx) => {
                                            const highlightTerms = /(70%|100%|67%|Jenkins|GCP|SME|Terraform|Azure DevOps|CI\/CD|YAML|15\+|80%|Azure App Service)/g;
                                            return (
                                                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-forest/5 dark:bg-emerald-900/10 border border-forest/10 dark:border-emerald-500/10 group hover:border-forest/20 dark:hover:border-emerald-500/30 transition-colors">
                                                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-forest/10 dark:bg-emerald-800/30 flex items-center justify-center text-forest dark:text-emerald-400 group-hover:scale-110 transition-transform">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    </div>
                                                    <p className="text-sm text-forest/70 dark:text-emerald-100/60 leading-relaxed font-medium">
                                                        {achievements.split(highlightTerms).map((part, i) =>
                                                            highlightTerms.test(part) ? (
                                                                <span key={i} className="font-bold text-forest dark:text-emerald-300">{part}</span>
                                                            ) : part
                                                        )}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Info */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-emerald-500/50 mb-4 border-b border-forest/10 dark:border-emerald-500/10 pb-2">Details</h3>

                                    <div className="flex items-center gap-3 mb-4 text-forest/70 dark:text-emerald-300">
                                        <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        <span className="text-sm font-mono font-bold">{experience.period}</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-emerald-500/50 mb-4 border-b border-forest/10 dark:border-emerald-500/10 pb-2">Expertise</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.skills.map(skill => (
                                            <span key={skill} className="px-3 py-1.5 bg-forest/5 dark:bg-emerald-500/10 text-forest dark:text-emerald-400 text-xs font-bold rounded-lg border border-forest/10 dark:border-emerald-500/20 backdrop-blur-sm shadow-sm">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Optional Gallery Column Section */}
                                {experience.galleryUrls && experience.galleryUrls.length > 0 && (
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-forest/40 dark:text-emerald-500/50 mb-4 border-b border-forest/10 dark:border-emerald-500/10 pb-2">Glimpses</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            {experience.galleryUrls.map((url, idx) => (
                                                <div key={idx} className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-forest/10 dark:border-emerald-500/20">
                                                    <img
                                                        src={url}
                                                        alt={`Gallery ${idx}`}
                                                        className="w-full h-full object-cover"
                                                        onClick={() => setFullscreenImage(url)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Image Modal */}
            {fullscreenImage && (
                <div
                    className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 md:p-8 cursor-zoom-out animate-in fade-in duration-200"
                    onClick={() => setFullscreenImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        onClick={() => setFullscreenImage(null)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <img
                        src={fullscreenImage}
                        alt="Fullscreen Preview"
                        className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                    />
                </div>
            )}
        </>
    );
};
