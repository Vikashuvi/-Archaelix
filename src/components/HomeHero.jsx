"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import RoundButton from "./RoundButton";

const HomeHero = () => {
  const heroRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([line1Ref.current, line2Ref.current, line3Ref.current, bottomRef.current], {
        opacity: 0,
        y: 100,
      });

      // Entrance animation timeline
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(line1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(line2Ref.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }, "-=0.7")
        .to(line3Ref.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }, "-=0.7")
        .to(bottomRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.5");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col"
    >
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-8">
        {/* Hero Typography */}
        <div className="w-full">
          {/* Line 1 */}
          <div ref={line1Ref} className="overflow-hidden">
            <h1
              className="text-[12vw] md:text-[11vw] lg:text-[10vw] leading-[0.85] tracking-tight text-[#0F172A] uppercase"
              style={{ fontFamily: "'FoundersGrotesk', sans-serif", fontWeight: 600 }}
            >
              We Create
            </h1>
          </div>

          {/* Line 2 - with video/badge element */}
          <div ref={line2Ref} className="overflow-hidden flex items-center gap-2 md:gap-4">
            {/* Small video/image badge */}
            <div
              className="relative w-[18vw] sm:w-[16vw] md:w-[12vw] h-[9vw] sm:h-[8vw] md:h-[7vw] lg:h-[6.5vw] rounded-md overflow-hidden flex-shrink-0 mt-[1vw]"
              style={{ background: 'linear-gradient(135deg, #f73b20 0%, #d63118 100%)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-1 left-1 w-8 h-6 md:w-10 md:h-8 bg-[#f73b20] rounded-sm opacity-80" />
              <div className="absolute bottom-2 left-3 w-6 h-4 md:w-8 md:h-6 bg-white/90 rounded-sm" />
            </div>
            <h1
              className="text-[12vw] md:text-[11vw] lg:text-[10vw] leading-[0.85] tracking-tight text-[#0F172A] uppercase"
              style={{ fontFamily: "'FoundersGrotesk', sans-serif", fontWeight: 600 }}
            >
              Eye-Opening
            </h1>
          </div>

          {/* Line 3 */}
          <div ref={line3Ref} className="overflow-hidden">
            <h1
              className="text-[12vw] md:text-[11vw] lg:text-[10vw] leading-[0.85] tracking-tight text-[#0F172A] uppercase"
              style={{ fontFamily: "'FoundersGrotesk', sans-serif", fontWeight: 600 }}
            >
              Experiences
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        ref={bottomRef}
        className="w-full border-t border-gray-200 px-6 md:px-12 lg:px-20 py-4 md:py-6"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left tagline */}
          <p
            className="text-sm md:text-base text-[#475569]"
            style={{ fontFamily: "'NeueMontreal', sans-serif", fontWeight: 400 }}
          >
            For brands that want to stand out
          </p>

          {/* Center tagline */}
          <p
            className="text-sm md:text-base text-[#475569] hidden md:block"
            style={{ fontFamily: "'NeueMontreal', sans-serif", fontWeight: 400 }}
          >
            From concept to conversion
          </p>



          {/* CTA Button */}
          <RoundButton
            title="Start The Project"
            href="/contact"
            variant="primary"
          />
        </div>
      </div>

      {/* Scroll indicator line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gray-300" />
    </section>
  );
};

export default HomeHero;
