import Link from 'next/link';

const newsItems = [
    {
        id: 1,
        title: "Hackathon 2k25 Victory",
        date: "Feb 28, 2025",
        summary: "Our team secured the top rank in the National Data Science Hackathon 2k25, creating a predictive model for sustainable energy.",
        category: "Achievement"
    },
    {
        id: 2,
        title: "Udhbav Magazine Launch",
        date: "Jan 26, 2025",
        summary: "Unveiling 'Udhbav' – The official Data Science Society magazine featuring student research, AI trends, and alumni interviews.",
        category: "Publication"
    }
];

const LatestNews = () => {
    return (
        <section className="relative py-12 bg-green-950 overflow-hidden" id="news">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            {/* Subtle Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Compact Header */}
                <div className="flex justify-between items-end mb-8 border-b border-green-800/50 pb-4">
                    <div>
                        <span className="text-green-400 font-mono text-xs font-bold uppercase tracking-widest">
                            // Updates
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                            Latest Insights
                        </h2>
                    </div>

                    <Link href="/news" className="hidden md:flex items-center gap-2 text-sm text-green-200 font-medium hover:text-white transition-colors">
                        View Archive <span>→</span>
                    </Link>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {newsItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-black/20 backdrop-blur-md border border-green-800/40 rounded-xl p-6 hover:bg-black/30 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/40"
                        >
                            {/* Top Row: Category & Date */}
                            <div className="flex justify-between items-start mb-3">
                                <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-green-900/50 text-green-300 border border-green-700/50 group-hover:bg-green-500 group-hover:text-black group-hover:border-green-500 transition-colors">
                                    {item.category}
                                </span>
                                <span className="text-xs font-mono text-green-400/60 group-hover:text-green-300">
                                    {item.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                                {item.title}
                            </h3>

                            {/* Summary */}
                            <p className="text-green-100/70 text-sm mb-5 leading-relaxed">
                                {item.summary}
                            </p>

                            {/* Link */}
                            <Link href={`/news/${item.id}`} className="inline-flex items-center text-xs font-bold text-white uppercase tracking-wider group/link">
                                <span className="border-b border-green-600 pb-0.5 group-hover/link:border-green-400 group-hover/link:text-green-300 transition-colors">Read Full Story</span>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Mobile Link */}
                <div className="mt-6 text-center md:hidden">
                    <Link href="/news" className="text-xs text-green-200 font-bold uppercase tracking-widest hover:text-white">
                        View Archive →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;