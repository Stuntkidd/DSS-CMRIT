import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative bg-black pt-28 pb-16 lg:pt-44 lg:pb-28 overflow-hidden flex flex-col justify-center">

            {/* --- SLANTED VISUAL BACKGROUND (RIGHT SIDE) --- */}
            <div
                className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 overflow-hidden bg-[#050505] border-l border-green-900/30"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
                }}
            >
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810a_1px,transparent_1px),linear-gradient(to_bottom,#10b9810a_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Dynamic Floor Effect */}
                <div className="absolute bottom-0 right-0 w-full h-[60%] bg-[linear-gradient(to_right,#22c55e15_1px,transparent_1px),linear-gradient(to_bottom,#22c55e15_1px,transparent_1px)] bg-[size:60px_60px] [transform:perspective(500px)_rotateX(60deg)_scale(2)] origin-bottom opacity-40" />

                {/* Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-green-500/5 rounded-full blur-[80px]" />
            </div>

            {/* --- MAIN CONTENT (LEFT SIDE) --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-3xl text-left">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2.5 py-1 px-3 rounded-md bg-gray-900/80 border border-green-900/50 backdrop-blur-md mb-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                        <span className="text-green-400 text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">
                            CMR Institute of Technology
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 leading-tight">
                        Data Science Society
                    </h1>

                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-xl font-normal border-l-2 border-green-800 pl-5">
                        Innovating at the intersection of <span className="text-green-400 font-medium">Code</span> and <span className="text-green-400 font-medium">Data</span>. We are the architects of the future, turning raw information into intelligent action.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <Link
                            href="/join"
                            className="group relative px-6 py-3 rounded-full bg-white text-black font-bold text-sm md:text-base overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                        >
                            <span className="relative z-10">Join Community</span>
                            <div className="absolute inset-0 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out -z-0 opacity-20"></div>
                        </Link>

                        <Link
                            href="/about"
                            className="flex items-center gap-2 px-6 py-3 rounded-full text-gray-300 hover:text-white font-medium text-sm md:text-base transition-colors hover:bg-white/5 border border-transparent hover:border-white/10"
                        >
                            <span>Explore Projects</span>
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Stats Row */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-800/50 pt-8 max-w-xl">
                        <StatItem label="Active Members" value="500+" />
                        <StatItem label="Workshops" value="50+" />
                        <StatItem label="Projects" value="25+" />
                        <StatItem label="Hackathons" value="10+" />
                    </div>

                </div>
            </div>
        </section>
    );
};

// Helper for Stats
const StatItem = ({ label, value }: { label: string, value: string }) => (
    <div className="flex flex-col">
        <span className="text-2xl font-bold text-white mb-0.5">{value}</span>
        <span className="text-[10px] text-green-500/80 uppercase tracking-widest font-medium">{label}</span>
    </div>
);

export default Hero;