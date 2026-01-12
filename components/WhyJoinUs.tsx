const features = [
    {
        title: "Networking",
        description: "Connect with like-minded individuals, alumni, and industry experts to build your professional circle.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        title: "Skill Development",
        description: "Hands-on workshops, seminars, and real-world projects to boost your technical portfolio.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: "Leadership",
        description: "Opportunities to lead teams, organize hackathons, and manage society projects from day one.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    }
];

const WhyJoinUs = () => {
    return (
        <section className="relative py-20 bg-black overflow-hidden" id="why-join">

            {/* --- Background Grid --- */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e10_1px,transparent_1px),linear-gradient(to_bottom,#22c55e10_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* --- Ambient Glows --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[20rem] bg-green-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center px-3 py-1 mb-4 rounded-full bg-green-900/20 border border-green-800 backdrop-blur-sm">
                        <span className="text-green-400 text-xs font-mono font-bold uppercase tracking-widest">
                            // Benefits
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Why Join <span className="text-green-500">DSS-CMRIT</span>?
                    </h2>
                    <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
                        Be part of a thriving ecosystem that nurtures talent, fosters innovation, and bridges the gap between curriculum and industry.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                            {/* Icon Box */}
                            <div className="relative w-14 h-14 mb-6 rounded-xl bg-gray-800/50 border border-gray-700 flex items-center justify-center text-green-400 group-hover:text-white group-hover:bg-green-600 group-hover:border-green-500 transition-all duration-300 shadow-lg group-hover:shadow-green-500/40">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gray-800 group-hover:bg-green-500 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoinUs;