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
            className="text-sm text-gray-400 hover:text-[#00e5bf] hover:scale-110 transform transition-all duration-200 ease-out relative group inline-block cursor-pointer"
        >
            ← Back
            <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#00e5bf] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </button>
    );
}
