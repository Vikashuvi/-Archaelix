"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TextMask({ children }) {
    const { ref, inView } = useInView({ threshold: 0.75, triggerOnce: true });

    const animation = {
        initial: { y: "100%" },
        visible: (i) => ({
            y: "0",
            transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.05 * i }
        })
    };

    return (
        <div ref={ref}>
            {children.map((phrase, index) => (
                <div key={index} className="overflow-hidden">
                    <motion.p
                        custom={index}
                        variants={animation}
                        initial="initial"
                        animate={inView ? "visible" : ""}>
                        {phrase}
                    </motion.p>
                </div>
            ))}
        </div>
    );
}
