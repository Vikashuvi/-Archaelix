"use client";
import Link from "next/link";
import Rounded from "./Rounded";
import { ArrowUpRight } from "lucide-react";

export default function RoundButton({ href, title, className, bgcolor, style }) {
    return (
        <div className="flex items-center justify-center">
            <Link href={href}>
                <Rounded
                    backgroundColor={bgcolor}
                    className={`group flex items-center justify-between gap-[40px] pl-[35px] pr-[8px] py-[8px] rounded-full uppercase font-medium transition-all duration-300 ${className}`}
                    style={{ ...style, fontFamily: "'NeueMontreal', sans-serif" }}
                >
                    <span className="relative z-10 text-[15px] tracking-wide font-semibold transition-colors duration-300">
                        {title}
                    </span>
                    <div className="w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110">
                        <ArrowUpRight
                            size={24}
                            className="text-[#0F172A] transition-transform duration-500 group-hover:rotate-45"
                            strokeWidth={2.5}
                        />
                    </div>
                </Rounded>
            </Link>
        </div>
    );
}

