"use client";

import { useEffect } from "react";
import { scrollToElement } from "@/lib/scroll";

const STORAGE_KEY = "portfolio-scroll-target";

export function ScrollToTarget() {
  useEffect(() => {
    const target = window.sessionStorage.getItem(STORAGE_KEY);

    if (!target) {
      return;
    }

    window.sessionStorage.removeItem(STORAGE_KEY);
    window.setTimeout(() => scrollToElement(target), 0);
  }, []);

  return null;
}

export function setScrollTarget(target: string) {
  window.sessionStorage.setItem(STORAGE_KEY, target);
}