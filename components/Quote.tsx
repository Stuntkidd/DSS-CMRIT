const Quote = () => {
    return (
        <section className="relative w-full py-12 lg:py-16 bg-black border-y border-green-900/30 overflow-hidden">

            {/* --- BACKGROUND EFFECTS (Full Width) --- */}

            {/* 1. Cyber Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e15_1px,transparent_1px),linear-gradient(to_bottom,#22c55e15_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* 2. Side Glows for Full Width feel */}
            <div className="absolute top-0 left-0 w-[20vw] h-full bg-green-900/10 blur-[50px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[20vw] h-full bg-green-900/10 blur-[50px] pointer-events-none" />


            {/* --- CONTENT --- */}
            <div className="relative w-full px-4 md:px-8 z-10 flex flex-col items-center justify-center text-center">

                {/* Huge Background Quote Mark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] leading-none font-serif text-green-500/5 select-none pointer-events-none font-black">
                    &ldquo;
                </div>

                {/* The Quote Text */}
                <div className="max-w-6xl mx-auto">
                    <p className="text-xl md:text-3xl font-light text-gray-200 leading-relaxed tracking-wide italic font-serif">
                        <span className="text-green-400 not-italic font-mono text-sm md:text-base align-top mr-2">&lt;quote&gt;</span>
                        Data is the new oil. It's valuable, but if unrefined it cannot really be used.
                        It has to be changed into gas, plastic, chemicals, etc. to create a valuable entity
                        that drives profitable activity; so must data be <span className="text-white font-medium border-b border-green-500/50">broken down</span> and <span className="text-white font-medium border-b border-green-500/50">analyzed</span> for it to have value.
                        <span className="text-green-400 not-italic font-mono text-sm md:text-base align-bottom ml-2">&lt;/quote&gt;</span>
                    </p>
                </div>

                {/* The Author (Horizontal Layout for reduced height) */}
                <div className="flex items-center gap-4 mt-6 md:mt-8">
                    <div className="h-px w-12 bg-green-800"></div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-white uppercase tracking-widest">
                            Clive Humby
                        </span>
                        <span className="hidden md:inline-block text-xs font-mono text-green-500/70">
                            // Mathematician
                        </span>
                    </div>
                    <div className="h-px w-12 bg-green-800"></div>
                </div>

            </div>
        </section>
    );
};

export default Quote;