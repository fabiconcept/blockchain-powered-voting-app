"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AuthCarousel({data}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000);

        return () => clearInterval(interval);
    });

    return (
        <section className={`min-h-full bg-black sm:no relative hidden md:block rounded-bl-full overflow-hidden`}>
            {
                data.map((cell, idx) => (
                    <section key={idx} className={`absolute inset-0 ${currentIndex === (cell.id-1) ? "enter z-[8]" : "leave z-[7]"} origin-top-right`}>
                        <Image width={3000} height={2000}  src={cell.img} alt="Nigeria" className="min-h-full object-cover w-full" loading="lazy" />
                    </section>
                ))
            }

            <div className="absolute z-10 w-full justify-center flex gap-2 items-center p-4 mix-blend-difference">
                {data.map((i, idx)=>(
                    <div key={idx} className={`w-2 aspect-square rounded-full bg-slate-200 transition ease-in-out duration-[.75s] delay-[1s] ${currentIndex === (i.id-1) ? "w-4 bg-white" : ""}`}></div>
                ))}
            </div>
        </section>
    );
}