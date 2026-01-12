"use client";

import { useState, useEffect } from 'react';

const SecondaryNavbar = () => {
    const [activeSection, setActiveSection] = useState('');

    const links = [
        { name: 'Latest News', target: 'news' },
        { name: 'Why Join', target: 'why-join' },
        { name: 'Expertise', target: 'expertise' },
        { name: 'About', target: 'about' },
        { name: 'Events', target: 'events' },
        { name: 'Team', target: 'team' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            // Offset for fixed headers
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(targetId);
        }
    };

    return (
        <div className="sticky top-14 z-40 hidden md:block bg-green-600/95 backdrop-blur-md shadow-lg shadow-green-600/20 border-b border-green-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center h-12 space-x-10">
                    {links.map((link) => (
                        <a
                            key={link.target}
                            href={`#${link.target}`}
                            onClick={(e) => scrollToSection(e, link.target)}
                            className={`relative text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 ${activeSection === link.target
                                    ? 'text-white scale-105'
                                    : 'text-green-100 hover:text-white'
                                }`}
                        >
                            {/* Link Text */}
                            {link.name}

                            {/* Active Indicator (White Glow) */}
                            {activeSection === link.target && (
                                <span className="absolute -bottom-4 left-0 w-full h-1 bg-white rounded-t-sm shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecondaryNavbar;