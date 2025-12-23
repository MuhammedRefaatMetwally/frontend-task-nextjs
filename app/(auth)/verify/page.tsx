'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authApi } from '@/lib/api';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Mail, ShieldCheck, RefreshCw, ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function VerifyPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        // Get email from localStorage
        const storedEmail = localStorage.getItem('emailForVerification');
        if (!storedEmail) {
            router.push('/register');
        } else {
            setEmail(storedEmail);
        }

        // Countdown timer
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [router, timer]);

    const handleInputChange = (index: number, value: string) => {
        if (value.length > 1) {
            value = value[value.length - 1];
        }

        if (/^\d*$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Auto-focus next input
            if (value && index < 5) {
                const nextInput = document.getElementById(`code-input-${index + 1}`);
                if (nextInput) {
                    (nextInput as HTMLInputElement).focus();
                }
            }

            if (index === 5 && value && !newCode.includes('')) {
                handleVerify(newCode.join(''));
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            const newCode = [...code];
            newCode[index - 1] = '';
            setCode(newCode);
            const prevInput = document.getElementById(`code-input-${index - 1}`);
            if (prevInput) {
                (prevInput as HTMLInputElement).focus();
            }
        }
    };

    const handleVerify = async (verificationCode?: string) => {
        const finalCode = verificationCode || code.join('');
        if (finalCode.length !== 6) {
            setError('Please enter the complete 6-digit code');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await authApi.verifyEmail({
                email,
                code: finalCode,
            });

            if (response.data.success || response.status === 200) {
                setSuccess('Email verified successfully! Redirecting to login...');
                localStorage.removeItem('emailForVerification');
                setTimeout(() => {
                    router.push('/login');
                }, 2000);
            } else {
                setError(response.data.message || response.data.error || 'Verification failed');
            }
        } catch (err: any) {
            const errorMessage = err.response?.data?.message ||
                err.response?.data?.error ||
                'An error occurred during verification';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleResendCode = async () => {
        setResending(true);
        setError('');
        setTimer(60);

        try {
            const response = await authApi.resendVerificationCode({ email });

            if (response.data.success || response.status === 200) {
                setSuccess('Verification code resent successfully! Check your email.');
            } else {
                setError(response.data.message || response.data.error || 'Failed to resend code');
            }
        } catch (err: any) {
            const errorMessage = err.response?.data?.message ||
                err.response?.data?.error ||
                'An error occurred';
            setError(errorMessage);
        } finally {
            setResending(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
            <div className="w-full max-w-md">
                <Card className="border-none shadow-xl">
                    <CardHeader className="space-y-1 text-center">
                        <div className="flex justify-center mb-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-bold">Verify Your Email</CardTitle>
                        <CardDescription className="text-center">
                            <Mail className="w-4 h-4 inline mr-1" />
                            Verification code sent to <span className="font-semibold">{email}</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {error && (
                            <Alert variant="destructive" className="mb-4">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        {success && (
                            <Alert className="mb-4 bg-green-50 border-green-200">
                                <AlertDescription className="text-green-800">
                                    {success}
                                </AlertDescription>
                            </Alert>
                        )}

                        <div className="mb-8 text-center">
                            <p className="text-gray-600 mb-2">Enter the 6-digit verification code</p>
                            <p className="text-sm text-gray-500 mb-6">
                                Test code: <span className="font-mono font-bold text-blue-600">123456</span>
                            </p>

                            <div className="flex justify-center gap-2 mb-8">
                                {code.map((digit, index) => (
                                    <Input
                                        key={index}
                                        id={`code-input-${index}`}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        className="w-12 h-14 text-center text-2xl font-bold"
                                        autoFocus={index === 0}
                                    />
                                ))}
                            </div>

                            <Button
                                onClick={() => handleVerify()}
                                className="w-full"
                                size="lg"
                                disabled={loading || code.includes('')}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Verifying...
                                    </>
                                ) : (
                                    'Verify Email'
                                )}
                            </Button>
                        </div>

                        <Separator className="my-6" />

                        <div className="text-center">
                            <p className="text-gray-600 mb-4">
                                Didn&apos;t receive the code?
                            </p>

                            <Button
                                variant="outline"
                                onClick={handleResendCode}
                                disabled={resending || timer > 0}
                                className="w-full"
                            >
                                {resending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <RefreshCw className="mr-2 h-4 w-4" />
                                        {timer > 0 ? `Resend in ${timer}s` : 'Resend Code'}
                                    </>
                                )}
                            </Button>

                            <p className="text-sm text-gray-500 mt-4">
                                Check your spam folder if you don&apos;t see the email
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter className="justify-center border-t pt-6">
                        <Link href="/login" className="w-full">
                            <Button variant="ghost" className="w-full">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Login
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}