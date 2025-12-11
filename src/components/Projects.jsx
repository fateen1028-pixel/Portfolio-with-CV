import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "EcoSmart AI",
        description: "An intelligent energy management system powered by reinforcement learning to optimize household consumption.",
        tags: ["Python", "TensorFlow", "React", "IoT"],
        image: "/assets/project1.png",
        demo: "#",
        github: "#",
        color: "from-emerald-500 to-teal-700"
    },
    {
        title: "Nexus Stream",
        description: "High-concurrency video streaming platform with real-time chat and AI-driven content moderation.",
        tags: ["Go", "WebRTC", "Next.js", "Redis"],
        image: "/assets/project2.png",
        demo: "#",
        github: "#",
        color: "from-blue-600 to-indigo-800"
    },
    {
        title: "DevForge CLI",
        description: "A Rust-based command line tool for scaffolding production-ready microservices architecture in seconds.",
        tags: ["Rust", "Docker", "Kubernetes"],
        image: "/assets/project3.png",
        demo: "#",
        github: "#",
        color: "from-orange-500 to-red-700"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-primary-bg relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-8xl font-bold text-text-light mb-8 tracking-tighter">
                        Selected <span className="text-gray-600">Works</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative rounded-[2rem] bg-secondary-bg/20 border border-white/5 overflow-hidden"
        >
            {/* Spotlight */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-soft-light"
                style={{
                    background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
                }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div className={`h-[400px] lg:h-[500px] relative overflow-hidden bg-gradient-to-br ${project.color} p-10 flex items-center justify-center group-hover:p-6 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]`}>
                    <div className="absolute inset-0 bg-[url('/assets/cubes.png')] opacity-30 mix-blend-overlay"></div>

                    {/* Mockup Card */}
                    <div className="w-full h-full bg-[#0d1b2a] rounded-xl shadow-2xl transform rotate-3 scale-100 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 border border-white/10 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-8 bg-[#1b263b] flex items-center gap-2 px-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="p-8 flex items-center justify-center h-full text-gray-500 font-mono">
                            Project Screenshot / Demo
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                    <h3 className="text-4xl font-bold text-text-light mb-6 group-hover:text-primary-accent transition-colors">{project.title}</h3>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed font-light">{project.description}</p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 bg-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <a href={project.demo} className="flex items-center gap-2 text-white font-bold hover:text-primary-accent transition-colors">
                            Live Demo <ArrowUpRight />
                        </a>
                        <a href={project.github} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <Github /> Source Code
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
