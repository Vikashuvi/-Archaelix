"use client";
import Link from "next/link";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Components below
import { Eyes, RoundButton, Rounded, TextMask } from "./components";

export default function Ready() {
    const container = useRef(null);
    const phrase = ["Ready", "to start", "the project"];

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    // Parallax effect for the eyes
    const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);

    return (
        <section
            className="w-full relative z-30 min-h-screen bg-white py-20 rounded-t-[20px] mt-[-20px]"
            ref={container}>
            <div className="w-full h-full flex justify-center gap-[50px] items-center flex-col">
                <div className="flex flex-col gap-[10px]">
                    <h1
                        className="text-[17vw] leading-[0.85] tracking-tight text-center font-semibold uppercase pointer-events-none text-[#f73b20]"
                        style={{ fontFamily: "'FoundersGrotesk', sans-serif" }}
                    >
                        <TextMask>{phrase}</TextMask>
                    </h1>
                </div>
                <div className="flex flex-col items-center gap-[10px]">
                    <RoundButton
                        href="/contact"
                        title="start the project"
                        className="bg-[#0F172A] text-white"
                        bgcolor="#f73b20"
                    />
                    <p
                        className="text-[20px] text-[#f73b20] font-medium"
                        style={{ fontFamily: "'NeueMontreal', sans-serif" }}
                    >
                        OR
                    </p>
                    <div className="flex items-center justify-between bg-transparent cursor-pointer rounded-full group border border-[#f73b20]">
                        <Link
                            className="xl:text-[18px] uppercase font-normal"
                            href="/contact">
                            <Rounded className="py-[6px]" backgroundColor="#f73b20">
                                <p className="z-10 px-[15px] ml-[15px] py-[6px] group-hover:text-white text-[#f73b20] font-medium" style={{ fontFamily: "'NeueMontreal', sans-serif" }}>
                                    hello@archaelix.design
                                </p>
                                <div className="bg-[#f73b20] group-hover:bg-white text-white p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] flex items-center justify-center">
                                    <ArrowUpRight strokeWidth={1.5} size={30} className="scale-[0] group-hover:scale-[1] group-hover:text-[#f73b20]" />
                                </div>
                            </Rounded>
                        </Link>
                    </div>
                </div>
            </div>


            {/* The Eyes */}
            <motion.div
                className="w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center pointer-events-none"
                style={{ y: mq }}>
                <Eyes className="w-[200px] h-[200px] md:w-[170px] md:h-[170px] sm:w-[150px] sm:h-[150px]" />
            </motion.div>
        </section>
    );
}
