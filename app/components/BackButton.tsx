"use client";

import { usePathname, useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();
    const pathname = usePathname();

    const handleBack = () => {
        if (typeof window !== "undefined") {
            const previousPath = sessionStorage.getItem("portfolio-previous-path");

            if (previousPath && previousPath !== pathname) {
                router.push(previousPath);
                return;
            }
        }

        router.push("/projects");
    };

    return (
        <button 
            type="button" 
            onClick={handleBack} 
            className="text-sm text-gray-400 hover:text-[#00e5bf] transition"
        >
            ← Back
        </button>
    );
}
