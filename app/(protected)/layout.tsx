'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Spinner } from "@/components/ui/spinner"

export default function ProtectedLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('token');

            if (!token) {
                router.push('/login');
                return;
            }

            setIsAuthenticated(true);
            setLoading(false);
        };

        checkAuth();
    }, [router]);

    if (loading) {
        return <Spinner />;
    }

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
}