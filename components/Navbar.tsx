"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled
                ? 'bg-black/80 backdrop-blur-xl border-green-900/30 shadow-lg shadow-green-900/10 py-2'
                : 'bg-black border-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14">

                    {/* Logo Text Section */}
                    <Link href="/" className="flex flex-col group select-none">
                        <span className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none group-hover:text-green-400 transition-colors">
                            Data Science Society
                        </span>
                        <span className="text-[10px] md:text-xs font-semibold text-green-500 uppercase tracking-widest mt-0.5 group-hover:text-white transition-colors">
                            CMR Institute of Technology
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLink href="/" active={pathname === "/"}>Home</NavLink>
                        <NavLink href="/about" active={pathname === "/about"}>About Us</NavLink>
                        <NavLink href="/events" active={pathname === "/events"}>Events</NavLink>
                        <NavLink href="/team" active={pathname === "/team"}>Team</NavLink>
                        <NavLink href="/magazine" active={pathname === "/magazine"}>Magazine</NavLink>
                        <NavLink href="/gallery" active={pathname === "/gallery"}>Gallery</NavLink>

                        <div className="ml-4 pl-4 border-l border-gray-800">
                            <Link
                                href="/contact"
                                className="px-5 py-2.5 rounded-full bg-green-600 text-white font-bold text-sm hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 transition-all duration-200 shadow-sm"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-300 hover:text-green-400 hover:bg-green-900/20 rounded-lg transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 py-6 space-y-3">
                    <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                    <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
                    <MobileNavLink href="/events" onClick={() => setIsOpen(false)}>Events</MobileNavLink>
                    <MobileNavLink href="/team" onClick={() => setIsOpen(false)}>Team</MobileNavLink>
                    <MobileNavLink href="/magazine" onClick={() => setIsOpen(false)}>Magazine</MobileNavLink>
                    <MobileNavLink href="/gallery" onClick={() => setIsOpen(false)}>Gallery</MobileNavLink>

                    <div className="pt-4 mt-4 border-t border-gray-800">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center px-4 py-3 rounded-xl bg-green-600 text-white font-bold text-lg hover:bg-green-500 transition-colors shadow-lg shadow-green-600/20"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Desktop Link Component
const NavLink = ({ href, children, active }: { href: string; children: React.ReactNode, active?: boolean }) => (
    <Link
        href={href}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${active
            ? 'bg-green-900/20 text-green-400 font-semibold'
            : 'text-gray-300 hover:text-green-400 hover:bg-green-900/10'
            }`}
    >
        {children}
    </Link>
);

// Mobile Link Component
const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode, onClick: () => void }) => (
    <Link
        href={href}
        onClick={onClick}
        className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-green-400 hover:bg-green-900/20 hover:pl-6 transition-all duration-200"
    >
        {children}
    </Link>
);

export default Navbar;