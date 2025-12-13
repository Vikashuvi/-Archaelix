'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const HomeStacking = () => {
    const containerRef = useRef(null);
    const waveRef = useRef(null);
    const waveSvgRef = useRef(null);

    // Colors from the design - updated to match the site theme
    const colors = {
        indigo: '#6366F1',
        cyan: '#06B6D4',
        dark: '#0F172A',
        light: '#F8FAFC',
    };

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Squeeze/Wave Effect Animation at the TOP
            const wavePath = waveRef.current;
            if (wavePath) {
                // SVG paths for the squeeze effect (inverted - from top)
                const paths = {
                    // Starting state - wave covering the top
                    initial: "M 0 0 V 100 Q 50 100 100 100 V 0 z",
                    // Mid state - curved squeeze wave
                    step1: "M 0 0 V 50 Q 50 100 100 50 V 0 z",
                    // Final state - fully retracted to top
                    final: "M 0 0 V 0 Q 50 0 100 0 V 0 z",
                };

                // Set initial state
                gsap.set(wavePath, { attr: { d: paths.initial } });

                // Create scroll-triggered animation
                gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,
                    }
                })
                    .to(wavePath, {
                        attr: { d: paths.step1 },
                        duration: 0.5,
                        ease: "power2.inOut",
                    })
                    .to(wavePath, {
                        attr: { d: paths.final },
                        duration: 0.5,
                        ease: "power2.out",
                    });
            }

            // Existing section animations
            const createSectionAnim = (triggerSelector, prevTextSelector, nextTextSelector) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerSelector,
                        start: "top 90%",
                        end: "top 10%",
                        scrub: true,
                    }
                });

                tl.to(prevTextSelector, { opacity: 0, y: "30%" }, "s")
                    .from(nextTextSelector, { opacity: 0, y: "-30%" }, "s");
            };

            // Section 2 Trigger
            createSectionAnim('.main-part-2', '.text-container-1', '.text-container-2');

            // Section 3 Trigger
            createSectionAnim('.main-part-3', '.text-container-2', '.text-container-3');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const sections = [
        {
            id: 1,
            heading: 'Strategy & Planning',
            description: 'We craft data-driven digital strategies that align with your business goals and drive measurable results.',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
            bgColor: 'linear-gradient(135deg, #f73b20 0%, #d63118 100%)',
            mainClass: 'main-part-1',
            textClass: 'text-container-1',
        },
        {
            id: 2,
            heading: 'Creative Design',
            description: 'Our creative team transforms ideas into stunning visuals that captivate your audience and elevate your brand.',
            img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop',
            bgColor: 'linear-gradient(135deg, #d63118 0%, #b52914 100%)',
            mainClass: 'main-part-2',
            textClass: 'text-container-2',
        },
        {
            id: 3,
            heading: 'Growth & Analytics',
            description: 'We scale your digital presence with performance marketing and in-depth analytics to maximize your ROI.',
            img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
            bgColor: 'linear-gradient(135deg, #ff6347 0%, #f73b20 50%, #d63118 100%)',
            mainClass: 'main-part-3',
            textClass: 'text-container-3',
        },
    ];

    return (
        <section ref={containerRef} className="w-full relative z-10 font-sans">

            {/* Squeeze Wave Effect SVG - Fixed at top of section */}
            <div className="absolute top-0 left-0 w-full h-[150px] z-20 pointer-events-none overflow-hidden">
                <svg
                    ref={waveSvgRef}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                >
                    <defs>
                        <linearGradient
                            id="wave-gradient-top"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="50%" stopColor="#F8FAFC" />
                            <stop offset="100%" stopColor="#F1F5F9" />
                        </linearGradient>
                    </defs>
                    <path
                        ref={waveRef}
                        fill="url(#wave-gradient-top)"
                        d="M 0 0 V 100 Q 50 100 100 100 V 0 z"
                    />
                </svg>
            </div>

            <div className="relative z-10">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className={`${section.mainClass} min-h-screen flex items-center justify-center sticky top-0`}
                        style={{ background: section.bgColor }}
                    >
                        <div className="container mx-auto px-6 py-16 md:py-20">
                            {/* Center-aligned content container */}
                            <div className={`${section.textClass} flex flex-col items-center text-center max-w-4xl mx-auto`}>
                                {/* Big Heading */}
                                <h2
                                    className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight"
                                    style={{ fontFamily: "'FoundersGrotesk', sans-serif" }}
                                >
                                    {section.heading}
                                </h2>

                                {/* Small Paragraph */}
                                <p
                                    className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed"
                                    style={{ fontFamily: "'NeueMontreal', sans-serif" }}
                                >
                                    {section.description}
                                </p>

                                {/* Image below text */}
                                <div className="w-full max-w-3xl">
                                    <div className="relative group">
                                        {/* Glowing border effect */}
                                        <div
                                            className="absolute -inset-1 rounded-2xl opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)' }}
                                        />
                                        <img
                                            src={section.img}
                                            alt={section.heading}
                                            className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                                            style={{
                                                boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.4)',
                                            }}
                                        />
                                        {/* Subtle overlay gradient */}
                                        <div
                                            className="absolute inset-0 rounded-2xl opacity-20"
                                            style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.3) 100%)' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeStacking;
