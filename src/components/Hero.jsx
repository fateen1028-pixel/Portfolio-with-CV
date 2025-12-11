import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

    // Config for letter animation
    const name = "Mohamed Fateen F";
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    };
    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section
            ref={ref}
            id="home"
            className="min-h-screen flex items-center justify-center relative bg-primary-bg overflow-hidden pt-16"
        >
            {/* Dynamic Aurora Background Layer */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 w-full h-full z-0 overflow-hidden"
            >
                <div className="absolute inset-0 bg-primary-bg"></div>

                {/* Animated Gradient Orbs - More Vibrant Colors */}
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/30 rounded-full blur-[120px] mix-blend-screen opacity-60"
                ></motion.div>

                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.5, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-fuchsia-500/30 rounded-full blur-[100px] mix-blend-screen opacity-50"
                ></motion.div>

                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    style={{ originX: 0.5, originY: 0.5 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] left-[30%] w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[120px] mix-blend-screen opacity-40"
                ></motion.div>

                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-bg/80 via-transparent to-primary-bg"></div>
            </motion.div>

            {/* Cinematic Spotlight/Glow Effect */}
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-accent/20 rounded-full blur-[100px] pointer-events-none z-0"
            ></motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center pt-10"> {/* Reduced padding */}
                {/* Visual Anchor - subtle geometric blur behind title */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-primary-accent/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

                <motion.div
                    style={{ y: textY }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-5 py-2 mb-6 rounded-full border border-primary-accent/30 bg-primary-accent/10 text-primary-accent text-xs md:text-sm font-bold tracking-widest backdrop-blur-md uppercase shadow-[0_0_15px_rgba(255,77,0,0.15)] flex items-center gap-2"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary-accent animate-pulse"></span>
                        Available for Hire
                    </motion.div>

                    <div className="mb-2">
                        <span className="text-gray-400 font-medium tracking-[0.3em] text-sm md:text-base uppercase block text-center">Hello, I'm</span>
                    </div>

                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 leading-[1.1] tracking-tight drop-shadow-2xl text-center z-10"
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                    >
                        {name.split("").map((char, index) => {
                            return (
                                <motion.span key={char + "-" + index} variants={letter} className="inline-block relative">
                                    {char === " " ? "\u00A0" : char}
                                    {/* Micro-interaction on hover could go here */}
                                </motion.span>
                            )
                        })}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
                    >
                        Building Web + <span className="text-primary-accent relative inline-block">
                            AI Applications
                            {/* Subtle underline SVG */}
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-accent opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </motion.h2>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light text-center">
                        Building AI-powered applications and modern full-stack systems.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.02, translateY: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-8 py-4 bg-primary-accent text-white rounded-full font-bold text-lg transition-all shadow-[0_10px_30px_rgba(255,77,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,77,0,0.5)] flex items-center justify-center gap-2 z-20"
                        >
                            View My Work <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02, translateY: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 z-20 backdrop-blur-sm"
                        >
                            Download CV <Download size={20} />
                        </motion.a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-8">
                        <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300 z-20 p-2"><Github size={32} /></a>
                        <a href="#" className="text-gray-400 hover:text-[#0077b5] transition-all transform hover:scale-110 hover:-translate-y-1 duration-300 z-20 p-2"><Linkedin size={32} /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
