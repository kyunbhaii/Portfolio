"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const CURRENT_PATH_KEY = "portfolio-current-path";
const PREVIOUS_PATH_KEY = "portfolio-previous-path";

export default function NavigationTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentPath = sessionStorage.getItem(CURRENT_PATH_KEY);

    if (currentPath && currentPath !== pathname) {
      sessionStorage.setItem(PREVIOUS_PATH_KEY, currentPath);
    }

    sessionStorage.setItem(CURRENT_PATH_KEY, pathname);
  }, [pathname]);

  return null;
}
