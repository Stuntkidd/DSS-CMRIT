"use client";

import Link from 'next/link';

const domains = [
    "Machine Learning",
    "Artificial Intelligence",
    "Data Visualization",
    "Big Data Analytics",
    "Natural Language Processing",
    "Computer Vision"
];

const OurExpertise = () => {
    return (
        <section className="relative py-24 bg-black text-white overflow-hidden" id="expertise">

            {/* --- Background Effects --- */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                {/* Vertical Lines Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e10_1px,transparent_1px)] bg-[size:60px_100%]" />
            </div>

            {/* Side Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-green-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16">

                    {/* Left Side: Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-block px-3 py-1 mb-5 text-xs font-mono font-bold tracking-widest text-green-400 uppercase bg-green-900/10 border border-green-800 rounded-sm">
                            // Core Domains
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Mastering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-700">
                                Future of Data
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light border-l border-green-900/50 pl-6">
                            We focus on cutting-edge technologies that are shaping the algorithmic world.
                            Our members gain expertise in diverse fields, preparing them for
                            complex challenges in industry and research.
                        </p>

                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-green-600/30 bg-green-900/10 text-green-400 font-mono text-sm font-bold tracking-wide hover:bg-green-600 hover:text-white hover:border-green-500 transition-all duration-300"
                        >
                            <span>EXPLORE PROJECTS</span>
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Side: Tech Grid */}
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {domains.map((domain, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gray-900/40 backdrop-blur-sm p-5 rounded-xl border border-gray-800 hover:border-green-500/50 hover:bg-gray-800/60 transition-all duration-300 flex items-center gap-4 overflow-hidden"
                                >
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Status Dot */}
                                    <div className="relative flex h-3 w-3 flex-shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-600 group-hover:bg-green-500 transition-colors duration-300"></span>
                                    </div>

                                    {/* Text */}
                                    <p className="relative z-10 font-mono text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors">
                                        {domain}
                                    </p>

                                    {/* Tech Decoration (Corner) */}
                                    <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-gray-700 group-hover:border-green-500/50 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurExpertise;