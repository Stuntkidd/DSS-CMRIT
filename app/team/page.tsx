"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

// --- DATA ---

const facultyMembers = [
    {
        id: 1,
        name: 'Ms Samala Bhavana',
        title: 'Faculty Coordinator (CSE-DS)',
        // Using a null or placeholder here since you mentioned there is no image
        imageUrl: null,
        socials: { linkedin: '#', email: 'samala.bhavana@cmrit.ac.in' },
    },
];

const coreTeam = [
    {
        id: 1,
        name: 'Ch Pradeeptha',
        title: 'President',
        imageUrl: 'https://i.postimg.cc/Nj3r1KvD/Whats-App-Image-2025-10-21-at-22-08-26.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/pradeeptha-ch-943450335/', email: 'ch.pradeeptha@dss.in' },
    },
    {
        id: 2,
        name: 'P V Yashwanth',
        title: 'President, Projects Lead',
        imageUrl: 'https://i.postimg.cc/NFSt9bg8/Whats-App-Image-2025-10-24-at-12-22-39-4681aee4.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/yashwanth-paleti', email: 'yashwanthpaleti2006@gmail.com' },
    },
    {
        id: 3,
        name: 'Sri Nag Charan',
        title: 'Treasurer',
        imageUrl: 'https://i.postimg.cc/cH5S3pym/Whats-App-Image-2026-01-12-at-12-05-43-PM.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/nammina-sri-nag-charan-6b928732b', email: 'srinagcharanyadav@gmail.com' },
    },
    {
        id: 4,
        name: 'D Abhishek',
        title: 'Secretary',
        imageUrl: 'https://i.postimg.cc/0QYpjHPm/IMG-20251024-120055.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/abhishek-danuka-580145368', email: 'd.abhishek@dss.in' },
    },
    {
        id: 5,
        name: 'S Jahnavi',
        title: 'Outreach Coordinator',
        imageUrl: 'https://i.postimg.cc/wj0pD6Tv/Whats-App-Image-2025-10-24-at-12-24-34-caf387e2.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/jahnavi-sagaboina-53657a380', email: 's.jahnavi@dss.in' },
    },
    {
        id: 6,
        name: 'E Sandeep',
        title: 'Technical Lead',
        imageUrl: 'https://i.postimg.cc/pdk8z531/Whats-App-Image-2025-10-24-at-11-43-02-d4a2764e.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/eppakayala-sandeep-62146932a', email: 'e.sandeep@dss.in' },
    },
    {
        id: 7,
        name: 'M Tejeswini',
        title: 'Content Lead',
        imageUrl: 'https://i.postimg.cc/sghMD3GM/Whats-App-Image-2025-10-21-at-22-09-11.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/tejaswini-m-449042292/', email: 'm.tejeswini@dss.in' },
    },
    {
        id: 8,
        name: 'U Sanjay',
        title: 'Digital Lead',
        imageUrl: 'https://i.postimg.cc/N0bTm2ZV/Whats-App-Image-2025-10-24-at-11-43-03-a2576d4a.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/uyyala-sanjay', email: 'u.sanjay@dss.in' },
    },
    {
        id: 9,
        name: 'Satnam',
        title: 'Event Coordinator',
        imageUrl: 'https://i.postimg.cc/xCGsDHgf/Whats_App_Image_2026_01_11_at_7_32_34_PM.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/juni-sathnam-258b053a4', email: '#' },
    },
    {
        id: 10,
        name: 'Sai Sreshta',
        title: 'Event Coordinator',
        imageUrl: 'https://i.postimg.cc/rsQQzkvZ/Whats_App_Image_2026_01_11_at_10_16_40_PM.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/sai-sreshta-332876367', email: '#' },
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-36 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,black)] z-10" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e10_1px,transparent_1px),linear-gradient(to_bottom,#22c55e10_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-green-900/20 border border-green-800 text-green-400 text-xs font-mono font-bold tracking-widest uppercase mb-6">
                            // The Squad
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Visionaries</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            The passionate individuals driving our vision forward and executing the DSS mission at CMRIT.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Faculty Section - NEW COMPACT DESIGN */}
            <section className="pb-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px bg-green-900 flex-grow"></div>
                        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Faculty Coordinators</h2>
                        <div className="h-px bg-green-900 flex-grow"></div>
                    </div>

                    <div className="flex justify-center">
                        {facultyMembers.map((member) => (
                            <div
                                key={member.id}
                                className="group relative bg-gray-900/30 border border-green-900/30 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center max-w-sm w-full hover:border-green-500/50 hover:bg-gray-900/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-green-900/20"
                            >
                                {/* Small Circular Avatar */}
                                <div className="relative w-24 h-24 mb-6 rounded-full bg-black border-2 border-green-800 flex items-center justify-center overflow-hidden group-hover:border-green-400 transition-colors duration-300">
                                    {member.imageUrl ? (
                                        <Image src={member.imageUrl} alt={member.name} fill className="object-cover" />
                                    ) : (
                                        <svg className="w-12 h-12 text-green-600 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-xs font-mono text-green-500/80 uppercase tracking-widest mb-6">
                                    {member.title}
                                </p>

                                {/* Contact Link */}
                                <a
                                    href={`mailto:${member.socials.email}`}
                                    className="px-6 py-2 rounded-full bg-green-900/20 text-green-400 text-sm font-medium border border-green-900/50 hover:bg-green-600 hover:text-white hover:border-green-500 transition-all"
                                >
                                    Contact Faculty
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Team Grid - STANDARD CARDS */}
            <section className="pb-32 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px bg-green-900 flex-grow"></div>
                        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Core Team</h2>
                        <div className="h-px bg-green-900 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreTeam.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <TeamCard member={member} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Reusable Core Team Card Component
const TeamCard = ({ member }: { member: any }) => (
    <div className="group relative bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]">

        {/* Image Area */}
        <div className="aspect-[4/5] overflow-hidden relative">
            <div className="absolute inset-0 bg-green-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />

            <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
            />

            {/* Social Links Overlay */}
            <div className="absolute bottom-4 right-4 z-30 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {member.socials.linkedin && member.socials.linkedin !== '#' && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-green-600 border border-white/10 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                )}
                {member.socials.email && member.socials.email !== '#' && (
                    <a href={`mailto:${member.socials.email}`} className="p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-green-600 border border-white/10 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </a>
                )}
            </div>
        </div>

        {/* Info Area */}
        <div className="p-5 relative flex-grow flex flex-col justify-end border-t border-gray-800 bg-black">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">{member.name}</h3>
            <p className="text-xs font-mono text-green-500 uppercase tracking-widest">{member.title}</p>
        </div>
    </div>
);