import Link from 'next/link';

const teamMembers = [
    {
        id: 1,
        name: 'Ch Pradeeptha',
        title: 'President',
        imageUrl: 'https://i.postimg.cc/Nj3r1KvD/Whats-App-Image-2025-10-21-at-22-08-26.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/pradeeptha-ch-943450335/', twitter: '#', email: 'mailto:ch.pradeeptha@dss.in' },
    },
    {
        id: 2,
        name: 'P V Yashwanth',
        title: 'Projects Lead',
        imageUrl: 'https://i.postimg.cc/W3ZnDjDQ/Whats-App-Image-2025-10-21-at-19-44-03-b253a3ed.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/yashwanth-paleti', twitter: '#', email: 'mailto:pv.yashwanth@dss.in' },
    },
    {
        id: 3,
        name: 'Sri Nag Charan',
        title: 'Treasurer',
        imageUrl: 'https://i.postimg.cc/cH5S3pym/Whats-App-Image-2026-01-12-at-12-05-43-PM.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/nammina-sri-nag-charan-6b928732b', twitter: '#', email: 'mailto:srinagcharanyadav@gmail.com' },
    },
    {
        id: 4,
        name: 'S Jahnavi',
        title: 'Outreach Coordinator',
        imageUrl: 'https://i.postimg.cc/wj0pD6Tv/Whats-App-Image-2025-10-24-at-12-24-34-caf387e2.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/jahnavi-sagaboina-53657a380', twitter: '#', email: 'mailto:s.jahnavi@dss.in' },
    }
];

const Team = () => {
    return (
        <section className="relative py-24 bg-black overflow-hidden" id="team">

            {/* --- Background Effects --- */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                {/* Tech Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e10_1px,transparent_1px),linear-gradient(to_bottom,#22c55e10_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Side Glows */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-green-900/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold tracking-widest text-green-400 uppercase bg-green-900/10 border border-green-800 rounded-full">
                        // The Squad
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Leads</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        The passionate individuals driving our vision forward and executing the DSS mission.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-green-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:-translate-y-2">

                            {/* Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden">
                                {/* Overlay Gradient (Makes text readable) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 group-hover:opacity-80 transition-opacity duration-300" />

                                {/* Image (Grayscale to Color on hover) */}
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                />

                                {/* Social Links (Slide up on hover) */}
                                <div className="absolute top-4 right-4 z-20 flex flex-col gap-3 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-green-600 hover:text-white transition-colors border border-white/10">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>
                                    <a href={member.socials.email} className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-green-600 hover:text-white transition-colors border border-white/10 delay-75">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </a>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="h-0.5 w-12 bg-green-500 mb-3 group-hover:w-full transition-all duration-500 ease-out" />
                                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-mono text-gray-400 uppercase tracking-wider mt-1">
                                    {member.title}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;