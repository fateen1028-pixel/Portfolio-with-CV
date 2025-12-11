import React from 'react';
import { motion } from 'framer-motion';

const Background = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-text-light selection:bg-primary-accent selection:text-white">

            {/* Main Ambient Glow - Center/Right */}
            <div
                className="fixed top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full blur-[120px] pointer-events-none opacity-40"
                style={{
                    background: 'radial-gradient(circle, rgba(255,77,0,0.8) 0%, rgba(255,77,0,0) 70%)',
                    zIndex: 0
                }}
            />

            {/* Secondary Glow - Bottom/Left - Cooler tone for contrast */}
            <div
                className="fixed bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[100px] pointer-events-none opacity-30"
                style={{
                    background: 'radial-gradient(circle, rgba(65,90,119,0.5) 0%, rgba(65,90,119,0) 70%)',
                    zIndex: 0
                }}
            />

            {/* Animated Ribbon/Orb Overlay */}
            <div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-primary-accent/10 blur-[100px]"
                />
            </div>

            {/* Noise Overlay */}
            <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz48L2ZpbHRlcj48L3N2Zz4=')] mix-blend-overlay"></div>

            {/* Content wrapper */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default Background;
