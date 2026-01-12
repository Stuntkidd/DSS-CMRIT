import Link from 'next/link';

const UpcomingEvents = () => {
    return (
        <section className="relative py-20 bg-black overflow-hidden" id="events">

            {/* --- Background Effects --- */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e10_1px,transparent_1px),linear-gradient(to_bottom,#22c55e10_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* --- Left Column: Status & Text --- */}
                    <div className="order-2 lg:order-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-green-500 font-mono text-xs font-bold uppercase tracking-widest">
                                Event Status
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-700">Standby</span>
                        </h2>

                        <div className="bg-gray-900/30 border border-green-900/30 backdrop-blur-sm rounded-2xl p-6 mb-8">
                            <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                Our team is currently compiling the next series of workshops, hackathons, and tech talks.
                            </p>

                            {/* FIXED: Using HTML entity &gt; instead of > to prevent build error */}
                            <p className="text-sm text-green-400/80 font-mono">
                                &gt; scanning_for_opportunities... <br />
                                &gt; status: planning_phase <br />
                                &gt; eta: coming_soon
                            </p>
                        </div>

                        {/* Notification Button */}
                        <button className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-green-400 transition-colors">
                            <span>Get Notified</span>
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                    </div>

                    {/* --- Right Column: Image --- */}
                    <div className="order-1 lg:order-2 relative">
                        {/* Decorative Border/Frame */}
                        <div className="absolute -inset-4 border border-green-900/30 rounded-2xl z-0 hidden lg:block"></div>

                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-green-900/20 group">
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-green-900/10 mix-blend-overlay z-10"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

                            {/* Image */}
                            <img
                                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Planning Future Events"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                            />

                            {/* Floating Badge on Image */}
                            <div className="absolute bottom-6 left-6 z-20">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black/80 border border-green-500/50 backdrop-blur-md">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    <span className="text-white text-xs font-bold uppercase tracking-wider">Loading Next Event...</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;