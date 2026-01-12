"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

// Integrated your images with relevant categories and titles
const galleryImages = [
    {
        id: 1,
        src: "https://i.postimg.cc/RZW8NgvR/Whats_App_Image_2026_01_12_at_1_04_09_PM.jpg",
        category: "Community",
        title: "DSS Gathering & Networking"
    },
    {
        id: 2,
        src: "https://i.postimg.cc/dtHpsbc1/Whats_App_Image_2026_01_12_at_1_11_03_PM.jpg",
        category: "Workshops",
        title: "Hands-on Tech Session"
    },
    {
        id: 3,
        src: "https://i.postimg.cc/CLPXh3ph/Whats_App_Image_2026_01_12_at_1_11_03_PM_(2).jpg",
        category: "Events",
        title: "Student Interactions"
    },
    {
        id: 4,
        src: "https://i.postimg.cc/8PK9p2gs/Whats_App_Image_2026_01_12_at_1_11_04_PM_(2).jpg",
        category: "Seminars",
        title: "Expert Insights"
    },
    {
        id: 5,
        src: "https://i.postimg.cc/kg2ZBT76/Whats_App_Image_2026_01_12_at_1_11_05_PM.jpg",
        category: "Hackathons",
        title: "Innovation & Code"
    },
    {
        id: 6,
        src: "https://i.postimg.cc/DyjHv930/Whats_App_Image_2026_01_12_at_1_11_04_PM_(1).jpg",
        category: "Team",
        title: "Collaborative Projects"
    },
    {
        id: 7,
        src: "https://i.postimg.cc/d1JckGHP/Whats_App_Image_2026_01_12_at_1_14_59_PM.jpg",
        category: "Campus",
        title: "DSS Outreach"
    },
    {
        id: 8,
        src: "https://i.postimg.cc/RFvx6wPb/Whats_App_Image_2026_01_12_at_1_15_15_PM.jpg",
        category: "Celebration",
        title: "Milestone Moments"
    },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,black)] z-10" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e10_1px,transparent_1px),linear-gradient(to_bottom,#22c55e10_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                {/* Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-green-900/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-green-900/20 border border-green-800 text-green-400 text-xs font-mono font-bold tracking-widest uppercase mb-6">
                            // Visual Archive
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                            Moments in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Motion</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Capturing the energy, innovation, and collaboration that defines our community.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid (Masonry Layout) */}
            <section className="pb-32 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Columns layout handles images of different heights perfectly */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative break-inside-avoid bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-500 shadow-lg hover:shadow-green-900/20"
                            >
                                {/* Image */}
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                                />

                                {/* Dark Gradient Overlay (Visible on Hover) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="h-px w-6 bg-green-500"></div>
                                            <span className="text-green-400 font-mono text-xs uppercase tracking-wider font-bold">{image.category}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white leading-tight">{image.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}