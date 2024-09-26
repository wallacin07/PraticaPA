"use client"

import { useState, useEffect, useRef } from "react";

export default function Nav() {
    const [open, setOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null); 

    const handleClickOutside = (event: MouseEvent) => {
      
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setOpen(false); 
        }
    };

    useEffect(() => {
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
           
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
    <div>
            <button onClick={() => setOpen(prev => !prev)}>
                {!open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                ) : (
                    <nav className="absolute flex flex-col w-4/5 bg-gray-600 z-10" ref={ref}>
                        <h1 className="absolute">x</h1>
                    </nav>
                    
                )}
            </button>
    </div>
    );
}
