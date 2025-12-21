'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authApi } from '@/lib/api';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Loader2, LogOut, User, Mail, Phone, ShoppingCart, CheckCircle, XCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserData {
    id: number;
    type: string;
    name: string;
    email: string;
    mobile_country_code: string;
    mobile: string;
    image: string;
    email_verified_at: boolean;
    count_items_cart: number;
    token: string;
}

export default function DashboardPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<UserData | null>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                router.push('/login');
                return;
            }

            try {
                const response = await authApi.getUserData();

                if (response.data.status || response.data.status_code === 200) {
                    const userData = response.data.data;
                    setUser(userData);
                    localStorage.setItem('user', JSON.stringify(userData));
                } else {
                    const storedUser = localStorage.getItem('user');
                    if (storedUser) {
                        setUser(JSON.parse(storedUser));
                    } else {
                        setError('Failed to load user data');
                    }
                }
            } catch (err: any) {
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                } else {
                    setError('Failed to load user data. Please login again.');
                }
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [router]);

    const handleLogout = async () => {
        try {
            await authApi.logout();
        } catch (error) {
            // Ignore logout errors
        }

        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('emailForVerification');
        router.push('/login');
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const formatPhoneNumber = (countryCode: string, mobile: string) => {
        return `${countryCode} ${mobile}`;
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
                    <p className="mt-2 text-gray-600">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 p-4 bg-white rounded-xl shadow-sm">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-600">Welcome to your account dashboard</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                            onClick={() => router.push('/product-details')}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Go to Product Details
                        </Button>
                        <Button onClick={handleLogout} variant="outline">
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </header>

                {error && (
                    <Alert variant="destructive" className="mb-6">
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* User Profile Card */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>User Profile</CardTitle>
                                    <CardDescription>Your personal information</CardDescription>
                                </div>
                                <Badge variant={user?.type === 'client' ? 'default' : 'secondary'}>
                                    {user?.type?.toUpperCase() || 'USER'}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                                    <AvatarImage src={user?.image} alt={user?.name} />
                                    <AvatarFallback className="text-xl bg-gradient-to-br from-blue-500 to-purple-500">
                                        {user?.name ? getInitials(user.name) : 'U'}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="flex-1 text-center md:text-left">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        {user?.name || 'User Name'}
                                    </h2>
                                    <p className="text-gray-600 mb-4">User ID: #{user?.id}</p>

                                    <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                                        {user?.email_verified_at ? (
                                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">
                                                <CheckCircle className="h-3 w-3 mr-1" />
                                                Email Verified
                                            </Badge>
                                        ) : (
                                            <Badge variant="outline" className="text-amber-600 border-amber-200">
                                                <XCircle className="h-3 w-3 mr-1" />
                                                Email Not Verified
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <Separator />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Mail className="h-4 w-4" />
                                        <span className="text-sm font-medium">Email Address</span>
                                    </div>
                                    <p className="text-lg font-semibold">{user?.email || 'Not available'}</p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Phone className="h-4 w-4" />
                                        <span className="text-sm font-medium">Phone Number</span>
                                    </div>
                                    <p className="text-lg font-semibold">
                                        {user?.mobile_country_code && user?.mobile
                                            ? formatPhoneNumber(user.mobile_country_code, user.mobile)
                                            : 'Not available'}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Welcome & Stats Card */}
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                        <CardHeader>
                            <CardTitle className="text-blue-800">Welcome Message</CardTitle>
                            <CardDescription className="text-blue-600">
                                From your API response
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center py-6">
                                <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
                                    <User className="h-8 w-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-blue-900 mb-4">
                                    Welcome, {user?.name || 'User'}!
                                </div>
                                <p className="text-blue-700 mb-6">
                                    You have successfully logged in. Your session token is securely stored.
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
                                        <div className="text-sm text-blue-600 mb-1">Cart Items</div>
                                        <div className="text-2xl font-bold text-blue-900">
                                            {user?.count_items_cart || 0}
                                        </div>
                                        <div className="text-xs text-blue-500">Items in your cart</div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}