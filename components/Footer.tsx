import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="relative bg-black border-t border-green-900/30 pt-20 pb-10 text-gray-400 overflow-hidden font-sans">

            {/* --- Background Effects --- */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e10_1px,transparent_1px),linear-gradient(to_bottom,#22c55e10_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">DSS - CMRIT</h3>
                            <p className="text-xs text-green-500 font-mono uppercase tracking-widest mt-1">// Data Science Society</p>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-500">
                            A community driven by passion for data, innovation, and technology. Bridging the gap between academic theory and industry reality.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            {[
                                { name: 'Instagram', path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                                { name: 'Twitter', path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all duration-300"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={social.path} /></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-green-500 rounded-sm"></span>
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Events', 'Team'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="group flex items-center gap-2 text-sm hover:text-green-400 transition-colors">
                                        <span className="text-green-500/0 group-hover:text-green-500 transition-all duration-300">&gt;</span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-green-500 rounded-sm"></span>
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {['Udbhav Magazine', 'Projects', 'Gallery', 'Hackathons', 'Alumni'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().split(' ')[0]}`} className="group flex items-center gap-2 text-sm hover:text-green-400 transition-colors">
                                        <span className="text-green-500/0 group-hover:text-green-500 transition-all duration-300">&gt;</span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-green-500 rounded-sm"></span>
                            Stay Updated
                        </h4>
                        <p className="text-sm text-gray-500 mb-4">Subscribe to our secure feed for the latest updates.</p>
                        <form className="flex flex-col gap-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter email address"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-white text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all placeholder-gray-600"
                                />
                                <div className="absolute right-3 top-3.5 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            </div>
                            <button type="submit" className="w-full px-4 py-3 bg-green-600 text-white text-sm font-bold rounded-lg hover:bg-green-500 transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                Initiate Subscription
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
                    <p className="text-gray-600">
                        &copy; {new Date().getFullYear()} Data Science Society - CMRIT.
                    </p>

                    {/* Redlix Credit */}
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6">
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900 border border-gray-800">
                            <span className="text-xs text-gray-500">Developed & Maintained by</span>
                            <span className="text-green-400 font-bold tracking-wide">Redlix</span>
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <Link href="/privacy" className="text-gray-600 hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-gray-600 hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;