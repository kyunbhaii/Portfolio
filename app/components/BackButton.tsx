"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <button 
            type="button" 
            onClick={() => router.back()} 
            className="text-sm text-gray-400 hover:text-[#00e5bf] transition"
        >
            ← Back
        </button>
    );
}
