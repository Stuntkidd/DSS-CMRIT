import Image from 'next/image';

const AboutUs = () => {
    return (
        <section className="py-16 bg-black overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* --- Left Column: Image --- */}
                    <div className="mb-10 lg:mb-0 relative">
                        {/* Simple decorative border */}
                        <div className="absolute -inset-4 border border-green-900/30 rounded-2xl z-0"></div>

                        {/* Image Container */}
                        <div className="relative rounded-xl overflow-hidden shadow-2xl z-10 aspect-video lg:aspect-[4/3] group">
                            <div className="absolute inset-0 bg-green-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />

                            {/* Replace src with your actual image path */}
                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                                alt="DSS Team Collaboration"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* --- Right Column: Text Content --- */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-px w-8 bg-green-500"></span>
                            <span className="text-green-500 font-mono text-xs font-bold uppercase tracking-widest">
                                Who We Are
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                            Bridging Theory & Practice
                        </h3>

                        <p className="text-base text-gray-400 mb-6 leading-relaxed">
                            The Data Science Society at CMRIT is more than just a club; we are a community of innovators. We organize workshops, hackathons, and guest lectures to bridge the gap between academic learning and industry requirements.
                        </p>

                        <p className="text-base text-gray-400 mb-8 leading-relaxed">
                            Our mission is to empower students with the real-world skills needed to thrive in the era of AI and Big Data.
                        </p>

                        {/* Simplified Stats */}
                        <div className="flex items-center gap-10 border-t border-gray-800 pt-6">
                            <div>
                                <h4 className="text-3xl font-bold text-white">500+</h4>
                                <p className="text-xs text-green-500/80 font-mono uppercase mt-1">Active Members</p>
                            </div>
                            <div className="w-px h-10 bg-gray-800"></div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">50+</h4>
                                <p className="text-xs text-green-500/80 font-mono uppercase mt-1">Events Hosted</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;