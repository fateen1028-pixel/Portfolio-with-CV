import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Brain, Database, Shield, Smartphone, Terminal, Cpu, Globe } from 'lucide-react';

const bentoItems = [
    {
        title: "Full Stack Engineering",
        description: "End-to-end application development with React, Node.js, and modern frameworks.",
        icon: <Globe className="w-8 h-8 text-blue-400" />,
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-[#1b263b] to-[#0d1b2a]"
    },
    {
        title: "AI Integration",
        description: "LLMs, LangChain, & RAG.",
        icon: <Brain className="w-8 h-8 text-pink-400" />,
        colSpan: "md:col-span-1",
        bg: "bg-[#161f32]"
    },
    {
        title: "Backend Architecture",
        description: "Scalable microservices, Docker, Kubernetes, and Cloud infrastructure (AWS).",
        icon: <Server className="w-8 h-8 text-purple-400" />,
        colSpan: "md:col-span-1",
        bg: "bg-[#161f32]"
    },
    {
        title: "Data Engineering",
        description: "Complex pipelines with Python, Pandas, and Vector Databases (Pinecone).",
        icon: <Database className="w-8 h-8 text-emerald-400" />,
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-bl from-[#1b263b] to-[#0d1b2a]"
    },
    {
        title: "Security & DevOps",
        description: "CI/CD, OAuth, JWT.",
        icon: <Shield className="w-8 h-8 text-orange-400" />,
        colSpan: "md:col-span-1",
        bg: "bg-[#161f32]"
    },
    {
        title: "Mobile Dev",
        description: "React Native & Android.",
        icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
        colSpan: "md:col-span-1",
        bg: "bg-[#161f32]"
    },
    {
        title: "Algorithmic Mastery",
        description: "Deep understanding of DSA.",
        icon: <Cpu className="w-8 h-8 text-yellow-400" />,
        colSpan: "md:col-span-1",
        bg: "bg-[#161f32]"
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-primary-bg relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-text-light mb-6 tracking-tighter">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">Arsenal</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px]">
                    {bentoItems.map((item, index) => (
                        <BentoCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const BentoCard = ({ item, index }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`relative rounded-3xl overflow-hidden border border-white/5 ${item.colSpan} ${item.bg} group flex flex-col justify-between p-8`}
        >
            {/* Spotlight Overlay */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />

            <div className="relative z-10">
                <div className="mb-4 bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/5">
                    {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-light mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>

            {/* Decorative Grid inside card */}
            <div className="absolute right-0 bottom-0 opacity-10">
                <Code className="w-32 h-32 -mb-8 -mr-8 text-white rotate-12" />
            </div>
        </motion.div>
    );
};

export default Skills;
