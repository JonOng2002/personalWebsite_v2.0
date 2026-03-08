import React, { useRef, useEffect } from 'react';

// ── Tech list ─────────────────────────────────────────────────────────────────
// Use `slug` for SimpleIcons CDN:  https://simpleicons.org  (find the slug there)
// Use `imageUrl` for anything SimpleIcons doesn't have → drop file in /public/images/tech/
interface TechIcon {
    name: string;
    color: string;
    slug?: string;      // SimpleIcons → https://cdn.simpleicons.org/{slug}
    imageUrl?: string;  // local path or any external URL (takes priority over slug)
}

const ICONS: TechIcon[] = [
    // ── Cloud (local PNGs kept for reliability) ──────────────────────────────
    { name: 'AWS', color: '#FF9900', imageUrl: '/images/tech/aws.png' },
    { name: 'Azure', color: '#0078D4', imageUrl: '/images/tech/azure.png' },
    // ── DevOps / Infra ───────────────────────────────────────────────────────
    { name: 'Docker', color: '#2496ED', slug: 'docker' },
    { name: 'Terraform', color: '#844FBA', slug: 'terraform' },
    { name: 'GitHub Actions', color: '#2088FF', slug: 'githubactions' },
    { name: 'Kubernetes', color: '#326CE5', slug: 'kubernetes' },
    { name: 'Jenkins', color: '#D24939', slug: 'jenkins' },
    { name: 'Linux', color: '#FCC624', slug: 'linux' },
    // ── Languages / Frameworks ───────────────────────────────────────────────
    { name: 'Python', color: '#3776AB', slug: 'python' },
    { name: 'TypeScript', color: '#3178C6', slug: 'typescript' },
    { name: 'React', color: '#61DAFB', slug: 'react' },
    { name: 'Go', color: '#00ADD8', slug: 'go' },
    { name: 'Bash', color: '#4EAA25', slug: 'gnubash' },
    { name: 'Vue', color: '#4FC08D', slug: 'vue.js' },
    // ── Data ─────────────────────────────────────────────────────────────────
    { name: 'PostgreSQL', color: '#4169E1', slug: 'postgresql' },
    { name: 'Llama (Meta)', color: '#0082FB', slug: 'meta' },
];

// ── Fibonacci sphere distribution ────────────────────────────────────────────
function spherePoints(n: number) {
    const pts: [number, number, number][] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2;
        const r = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = phi * i;
        pts.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);
    }
    return pts;
}

function rotateY([x, y, z]: [number, number, number], a: number): [number, number, number] {
    return [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)];
}
function rotateX([x, y, z]: [number, number, number], a: number): [number, number, number] {
    return [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)];
}

export const TechSphere: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const anglesRef = useRef({ y: 0, x: 0.3 });
    const targetVelRef = useRef({ y: 0.004, x: 0 });
    const rafRef = useRef<number | null>(null);
    const radiusRef = useRef(100);

    const basePoints = spherePoints(ICONS.length);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const ro = new ResizeObserver(() => {
            const { width, height } = container.getBoundingClientRect();
            radiusRef.current = Math.min(width, height) * 0.38;
        });
        ro.observe(container);

        const items = Array.from(container.querySelectorAll<HTMLElement>('.sphere-item'));

        const render = () => {
            // Smoothly interpolate towards target velocity
            anglesRef.current.y += targetVelRef.current.y;
            anglesRef.current.x += targetVelRef.current.x;

            const { y: ay, x: ax } = anglesRef.current;
            const R = radiusRef.current;

            basePoints.forEach(([px, py, pz], i) => {
                let [rx, ry, rz] = rotateY([px, py, pz], ay);
                [rx, ry, rz] = rotateX([rx, ry, rz], ax);

                const depth = (rz + 2) / 3;
                const opacity = Math.max(0.12, depth);
                const el = items[i];
                if (!el) return;
                el.style.transform = `translate(-50%,-50%) translate(${rx * R}px,${ry * R}px) scale(${0.5 + depth * 0.65})`;
                el.style.opacity = opacity.toFixed(2);
                el.style.zIndex = String(Math.round(rz * 100 + 100));
                el.style.filter = rz < 0 ? `grayscale(${Math.min(1, (-rz) * 0.6)})` : 'none';
            });

            rafRef.current = requestAnimationFrame(render);
        };
        rafRef.current = requestAnimationFrame(render);

        const onMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate distance from center (-1 to 1)
            const dx = (e.clientX - centerX) / (rect.width / 2);
            const dy = (e.clientY - centerY) / (rect.height / 2);

            // Set target rotation speed based on position
            targetVelRef.current = {
                y: dx * 0.05 + 0.004, // Add base rotation
                x: -dy * 0.05
            };
        };

        const onMouseLeave = () => {
            targetVelRef.current = { y: 0.004, x: 0 };
        };

        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseLeave);

        return () => {
            ro.disconnect();
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <div className="glass rounded-[2rem] p-6 flex flex-col h-full relative overflow-hidden bg-white dark:bg-[#0c1a10] shadow-sm hover:shadow-xl transition-all duration-300">


            {/* Sphere stage — flex-1 so it fills the remaining card height */}
            <div
                ref={containerRef}
                className="flex-1 relative select-none cursor-grab active:cursor-grabbing no-drag"
            >
                {ICONS.map((icon) => (
                    <div
                        key={icon.name}
                        className="sphere-item absolute top-1/2 left-1/2 will-change-transform"
                        title={icon.name}
                    >
                        <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md border transition-all duration-150 hover:scale-125"
                            style={{
                                background: `${icon.color}15`,
                                borderColor: `${icon.color}35`,
                            }}
                        >
                            <img
                                src={icon.imageUrl ?? `https://cdn.simpleicons.org/${icon.slug}`}
                                alt={icon.name}
                                className="w-6 h-6 object-contain"
                                loading="lazy"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Hint */}
            <p className="text-center text-[9px] text-emerald-700/25 dark:text-emerald-600/25 font-mono uppercase tracking-widest shrink-0 relative z-30">
                hover to rotate
            </p>
        </div>
    );
};
