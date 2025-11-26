import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export const GlobalBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize coordinates to be centered (0,0 is center of screen)
            const { innerWidth, innerHeight } = window;
            const x = e.clientX - innerWidth / 2;
            const y = e.clientY - innerHeight / 2;

            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
            {/* Base subtle grid */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] bg-center [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

            {/* Moving Orbs */}
            <motion.div
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-primary/10 rounded-full blur-[120px] mix-blend-screen"
                style={{
                    x: useSpring(useMotionValue(0), { damping: 50, stiffness: 50 }), // Slow drift could be added here
                    translateX: useMotionTemplate`calc(${springX}px * -0.1)`,
                    translateY: useMotionTemplate`calc(${springY}px * -0.1)`
                }}
            />

            <motion.div
                className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen"
                style={{
                    translateX: useMotionTemplate`calc(${springX}px * 0.15)`,
                    translateY: useMotionTemplate`calc(${springY}px * 0.15)`
                }}
            />

            {/* Mouse Follower Highlight - Smaller and more subtle */}
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    background: useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(168, 85, 247, 0.10), transparent 40%)`,
                }}
            />
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    background: useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, rgba(99, 102, 241, 0.10), transparent 40%)`,
                }}
            />
        </div>
    );
};
