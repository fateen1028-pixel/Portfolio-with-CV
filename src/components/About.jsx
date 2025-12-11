import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
                        <div className="w-24 h-1 bg-primary-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="relative group">
                        {/* Gradient Border Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent rounded-3xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>

                        <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="text-primary-accent">01.</span> Who I Am
                                    </h3>
                                    <p className="text-lg text-gray-400 leading-relaxed mb-6 font-light">
                                        Hi, I'm <span className="text-white font-medium">Mohamed Fateen F</span>. I'm not just a developer; I'm a system architect passionate about crafting resilient, scalable, and intelligent software solutions.
                                    </p>
                                    <p className="text-lg text-gray-400 leading-relaxed font-light">
                                        My expertise lies at the intersection of <strong className="text-white font-medium">Full Stack Engineering</strong> and <strong className="text-white font-medium">Generative AI</strong>. I build systems that don't just function—they anticipate, adapt, and perform.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        { title: "Clean Architecture", desc: "Building scalable, maintainable systems.", icon: "🏛️" },
                                        { title: "AI Integration", desc: "Leveraging LLMs for intelligent workflows.", icon: "🤖" },
                                        { title: "Performance First", desc: "Optimizing for speed and efficiency.", icon: "⚡" },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                            <span className="text-2xl">{item.icon}</span>
                                            <div>
                                                <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                                                <p className="text-sm text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
