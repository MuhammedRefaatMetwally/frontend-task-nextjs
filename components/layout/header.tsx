'use client'

import {DesktopHeader} from "@/components/layout/desktop-header";
import {MobileHeader} from "@/components/layout/mobile-header";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint
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
            {isMobile ? <MobileHeader /> : <DesktopHeader />}
        </>
    )
}