"use client";
import React, { useEffect, useState } from "react";

export default function Eyes({ className }) {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 280); // Adjusted for SVG initial orientation
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const EyeImage = () => (
        <div className={`bg-white rounded-full flex items-center justify-center overflow-hidden border border-[#21212122] ${className}`}>
            <div
                style={{ transform: `rotate(${rotate}deg)` }}
                className="w-full h-full transition-transform duration-75"
            >
                {/* Inline SVG Asset */}
                <svg viewBox="0 0 200 201" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="100" cy="100" r="100" fill="#F4F4F4" />
                    <g>
                        <circle cx="100" cy="100" r="60" fill="#212121" />
                        <circle cx="100" cy="50" r="8" fill="#F4F4F4" />
                    </g>
                </svg>
            </div>
        </div>
    );

    return (
        <div className="w-full gap-[30px] flex items-center justify-center">
            <EyeImage />
            <EyeImage />
        </div>
    );
}
