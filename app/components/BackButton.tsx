"use client";

import { usePathname, useRouter } from "next/navigation";
import UtilityTextButton from "./UtilityTextButton";

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

    return <UtilityTextButton onClick={handleBack}>← Back</UtilityTextButton>;
}
