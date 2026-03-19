"use client";

import { useState, useEffect } from "react";

export default function Typewriter({ 
    text, 
    speed = 50,
    delay = 0 
}: { 
    text: string, 
    speed?: number,
    delay?: number 
}) {
    const [displayedText, setDisplayedText] = useState("");
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setHasStarted(true);
        }, delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!hasStarted) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, hasStarted]);

    return (
        <span className="inline-block relative">
            {displayedText}
            <span className="animate-pulse font-bold text-current inline-block w-[0.6em] ml-1 opacity-80">
                _
            </span>
        </span>
    );
}
