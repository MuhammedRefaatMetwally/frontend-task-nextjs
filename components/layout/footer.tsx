'use client'

import {DesktopFooter} from "@/components/layout/desktop-footer";
import {MobileFooter} from "@/components/layout/mobile-footer";
import { useState, useEffect } from "react";

export function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    setIsLoaded(true);

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
      <>
        {isMobile ? <MobileFooter /> : <DesktopFooter/>}
      </>
  )
}