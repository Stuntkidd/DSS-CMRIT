import Link from 'next/link';

const CTA = () => {
    return (
        <section className="relative py-16 bg-green-600 overflow-hidden">

            {/* --- Background Textures (Subtle Data Pattern) --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-900/10 rounded-full blur-[60px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                    Ready to Start Your Journey?
                </h2>

                <p className="text-green-50 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed opacity-90">
                    Join our ecosystem of innovators. Access exclusive workshops, projects, and a network that defines the future of Data Science.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

                    {/* Primary Button (White) */}
                    <Link
                        href="/join"
                        className="group relative px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full shadow-xl shadow-green-900/20 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="flex items-center gap-2">
                            Become a Member
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </Link>

                    {/* Secondary Button (Transparent White) */}
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-green-700/30 border border-white/30 text-white font-bold text-lg rounded-full hover:bg-green-700/50 hover:border-white transition-all duration-300 backdrop-blur-sm"
                    >
                        Talk to Us
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default CTA;