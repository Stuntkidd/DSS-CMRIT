"use client";

const ContactUs = () => {
    return (
        <section className="relative py-24 bg-black overflow-hidden" id="contact">

            {/* --- Background Effects --- */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                {/* Tech Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e10_1px,transparent_1px),linear-gradient(to_bottom,#22c55e10_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Side Glows */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">

                    {/* --- Left Column: Info & Context --- */}
                    <div className="mb-16 lg:mb-0">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-green-900/20 border border-green-800/50 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-green-400 text-xs font-mono font-bold uppercase tracking-widest">
                                Transmission Open
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Establish <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                                Connection
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-10 leading-relaxed border-l-2 border-green-900 pl-6">
                            Have queries regarding protocols, membership access, or collaborative projects?
                            Initiate a data packet transfer below.
                        </p>

                        <div className="space-y-8">
                            {/* Email Item */}
                            <div className="group flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-green-500/50 transition-all duration-300">
                                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg border border-gray-700 flex items-center justify-center text-green-500 group-hover:text-green-400 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-green-500/70 uppercase tracking-wider mb-1">Target Address</p>
                                    <p className="text-white font-medium text-lg">cmritdatasciencesociety@gmail.com</p>
                                </div>
                            </div>

                            {/* Location Item */}
                            <div className="group flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-green-500/50 transition-all duration-300">
                                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg border border-gray-700 flex items-center justify-center text-green-500 group-hover:text-green-400 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-green-500/70 uppercase tracking-wider mb-1">Coordinates</p>
                                    <p className="text-white font-medium">CMR Institute of Technology,<br />Kandlakoya, Hyderabad</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column: The Form Terminal --- */}
                    <div className="relative bg-black/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl shadow-green-900/10">
                        {/* Decorative top bar of terminal */}
                        <div className="flex items-center gap-2 mb-8 border-b border-gray-800 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                            <span className="ml-auto text-xs font-mono text-gray-500">secure_form.exe</span>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-mono text-green-500 uppercase tracking-wider">User ID / Name</label>
                                    <input type="text" id="name" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-mono text-green-500 uppercase tracking-wider">Return Address / Email</label>
                                    <input type="email" id="email" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-mono text-green-500 uppercase tracking-wider">Subject Header</label>
                                <input type="text" id="subject" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all" placeholder="Inquiry about..." />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-mono text-green-500 uppercase tracking-wider">Data Payload / Message</label>
                                <textarea id="message" rows={4} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all" placeholder="Enter your message sequence here..."></textarea>
                            </div>

                            <button type="submit" className="w-full group relative flex items-center justify-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                                <span>INITIALIZE TRANSMISSION</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;