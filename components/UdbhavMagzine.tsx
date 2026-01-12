import Link from 'next/link';

const topics = [
    "College Overview", "About College", "Director’s Message",
    "Principal’s Message", "HOD & Department", "Faculty Research & Insights",
    "Student Research & Insights", "Department Ascend", "Faculty Laurels",
    "Student Laurels", "Motivation", "Legendary",
    "Faculty Viewpoints", "Student Viewpoints", "Alumni Voices",
    "Academic Highlights", "Projects & Expert Opinions", "Recent Trends in Data Science",
    "Placements & Career Insights", "Cultural & Arts", "Sports & NSS"
];

const UdbhavMagzine = () => {
    return (
        <section className="relative py-24 bg-black overflow-hidden" id="magazine">

            {/* --- Background Effects --- */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e10_1px,transparent_1px),linear-gradient(to_bottom,#22c55e10_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Ambient Lighting */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40rem] h-[40rem] bg-green-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">

                    {/* --- Left Column: 3D Magazine Cover --- */}
                    <div className="order-2 lg:order-1 flex justify-center perspective-1000 group">
                        <div className="relative w-[300px] md:w-[360px] aspect-[3/4] transition-all duration-700 transform rotate-y-12 rotate-x-6 group-hover:rotate-y-0 group-hover:rotate-x-0 preserve-3d">

                            {/* The Book Spine Effect */}
                            <div className="absolute top-0 left-0 w-full h-full bg-white rounded-r-md transform -translate-x-4 translate-z-[-20px] scale-[0.98] shadow-xl"></div>
                            <div className="absolute top-1 left-0 w-8 h-[98%] bg-gray-300 transform rotate-y-90 origin-left"></div>

                            {/* Front Cover Design */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-br from-green-900 to-black border border-green-500/30 rounded-r-lg shadow-[20px_20px_60px_rgba(0,0,0,0.5)] flex flex-col p-8 overflow-hidden">

                                {/* Cover Background Pattern */}
                                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,#22c55e_25%,#22c55e_50%,transparent_50%,transparent_75%,#22c55e_75%,#22c55e_100%)] bg-[size:20px_20px]"></div>

                                {/* Cover Content */}
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <span className="text-green-500 font-mono text-xs tracking-widest uppercase">Vol 3.0</span>
                                            <div className="w-8 h-8 rounded-full border border-green-500/50 flex items-center justify-center">
                                                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                            </div>
                                        </div>
                                        <h3 className="mt-8 text-5xl font-black text-white tracking-tighter uppercase leading-none">
                                            Ud<span className="text-green-500">bhav</span>
                                        </h3>
                                        <p className="text-white/60 tracking-[0.2em] text-sm mt-1">2025 EDITION</p>
                                    </div>

                                    <div className="border-t border-green-500/30 pt-4">
                                        <p className="text-green-400 font-mono text-[10px] uppercase">
                                            Data Science Society <br />
                                            CMR Institute of Technology
                                        </p>
                                    </div>
                                </div>

                                {/* Holographic Sheen on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column: Details & Table of Contents --- */}
                    <div className="mb-16 lg:mb-0 order-1 lg:order-2">

                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-green-900/20 border border-green-800 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-green-400 text-xs font-bold uppercase tracking-widest">
                                New Release
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            Udbhav <span className="text-green-500">2025</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 font-light border-l-2 border-green-800 pl-4">
                            The official publication of the Data Science Society. A comprehensive collection of insights, research, and highlights.
                        </p>

                        {/* Scrollable "Table of Contents" Terminal */}
                        <div className="mb-8">
                            <p className="text-xs font-mono text-green-500 mb-2 uppercase tracking-wider">// Inside this Issue</p>
                            <div className="h-48 overflow-y-auto pr-2 custom-scrollbar bg-gray-900/30 border border-green-900/30 rounded-lg p-4">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                                    {topics.map((topic, index) => (
                                        <li key={index} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                                            <span className="text-green-500/50">›</span>
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transform hover:-translate-y-1">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                Read Online
                            </button>
                            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-gray-600 text-white font-bold rounded-full hover:border-green-500 hover:text-green-400 transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                Download PDF
                            </button>
                        </div>

                        <p className="text-xs font-mono text-gray-500">
                            Contributors: <span className="text-green-500">DSS Editorial Team</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UdbhavMagzine;