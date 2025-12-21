'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authApi } from '@/lib/api';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Mail, Lock, User, Phone, Eye, EyeOff, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import {toast} from "sonner";

const passwordSchema = z.string()
    .min(1, 'Password is required')
    .regex(/[a-z]/, 'Must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Must contain at least one special character');

const registerSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    mobile: z.string()
        .regex(/^[0-9]+$/, 'Mobile number must contain only digits')
        .min(10, 'Mobile number must be at least 10 digits')
        .max(15, 'Mobile number is too long'),
    mobile_country_code: z.string(),
    password: passwordSchema,
    password_confirmation: z.string(),
}).refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const countryCodes = [
    { value: '+1', label: '+1 (US/Canada)', flag: '🇺🇸' },
    { value: '+44', label: '+44 (UK)', flag: '🇬🇧' },
    { value: '+971', label: '+971 (UAE)', flag: '🇦🇪' },
    { value: '+966', label: '+966 (KSA)', flag: '🇸🇦' },
    { value: '+20', label: '+20 (Egypt)', flag: '🇪🇬' },
    { value: '+91', label: '+91 (India)', flag: '🇮🇳' },
];

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const form = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            mobile: '',
            mobile_country_code: '+971',
            password: '',
            password_confirmation: '',
        },
    });

    const password = form.watch('password');
    const confirmPassword = form.watch('password_confirmation');

    const passwordsMatch = password && confirmPassword && password === confirmPassword;
    const hasPassword = !!password;
    const hasConfirmPassword = !!confirmPassword;

    const onSubmit = async (data: RegisterFormData) => {
        setLoading(true);
        setError('');

        try {
            const response = await authApi.register({
                name: data.name,
                email: data.email,
                mobile: data.mobile,
                mobile_country_code: data.mobile_country_code,
                password: data.password,
                password_confirmation: data.password_confirmation,
            });

            if (response.data.success || response.status === 200 || response.status === 201) {
                localStorage.setItem('emailForVerification', data.email);
                localStorage.setItem('userName', data.name);

                toast("Registration successful!",{
                    description: "Please verify your email to continue.",
                    duration: 3000,
                });

                router.push('/verify');
            } else {
                setError(response.data.message || response.data.error || 'Registration failed');
            }
        } catch (err: any) {
            const errorMessage = err.response?.data?.message ||
                err.response?.data?.error ||
                err.response?.data?.errors?.join(', ') ||
                'An error occurred during registration';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
            <div className="w-full max-w-md">
                <Card className="border-none shadow-xl">
                    <CardHeader className="space-y-1 text-center">
                        <div className="flex justify-center mb-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
                        <CardDescription>
                            Enter your details to create a new account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {error && (
                            <Alert variant="destructive" className="mb-4">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name *</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                    <Input
                                                        placeholder="John Doe"
                                                        className="pl-10"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email *</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                    <Input
                                                        type="email"
                                                        placeholder="you@example.com"
                                                        className="pl-10"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="space-y-2">
                                    <FormLabel>Mobile Number *</FormLabel>
                                    <div className="grid grid-cols-4 gap-3">
                                        <FormField
                                            control={form.control}
                                            name="mobile_country_code"
                                            render={({ field }) => (
                                                <FormItem className="col-span-1">
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="h-10">
                                                                <SelectValue placeholder="+971" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {countryCodes.map((country) => (
                                                                <SelectItem key={country.value} value={country.value}>
                                  <span className="flex items-center gap-2">
                                    <span>{country.flag}</span>
                                    <span className="font-mono">{country.value}</span>
                                  </span>
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="mobile"
                                            render={({ field }) => (
                                                <FormItem className="col-span-3">
                                                    <FormControl>
                                                        <div className="relative">
                                                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                            <Input
                                                                placeholder="501234567"
                                                                className="pl-10"
                                                                {...field}
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password *</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                        <Input
                                                            type={showPassword ? "text" : "password"}
                                                            placeholder="Enter password"
                                                            className="pl-10 pr-10"
                                                            {...field}
                                                        />
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                                            onClick={() => setShowPassword(!showPassword)}
                                                        >
                                                            {showPassword ? (
                                                                <EyeOff className="h-4 w-4 text-gray-400" />
                                                            ) : (
                                                                <Eye className="h-4 w-4 text-gray-400" />
                                                            )}
                                                        </Button>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="password_confirmation"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Confirm Password *</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                        <Input
                                                            type={showConfirmPassword ? "text" : "password"}
                                                            placeholder="Confirm password"
                                                            className="pl-10 pr-10"
                                                            {...field}
                                                        />
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                        >
                                                            {showConfirmPassword ? (
                                                                <EyeOff className="h-4 w-4 text-gray-400" />
                                                            ) : (
                                                                <Eye className="h-4 w-4 text-gray-400" />
                                                            )}
                                                        </Button>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />

                                                {hasPassword && hasConfirmPassword && (
                                                    <div className={cn(
                                                        "flex items-center gap-2 mt-2 text-sm",
                                                        passwordsMatch ? "text-green-600" : "text-red-600"
                                                    )}>
                                                        {passwordsMatch ? (
                                                            <>
                                                                <CheckCircle2 className="h-4 w-4" />
                                                                <span>Passwords match</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <XCircle className="h-4 w-4" />
                                                                <span>Passwords do not match</span>
                                                            </>
                                                        )}
                                                    </div>
                                                )}
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {hasPassword && (
                                    <div className="bg-gray-50 p-4 rounded-md border">
                                        <h4 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h4>
                                        <ul className="space-y-1.5">
                                            <li className={cn(
                                                "flex items-center gap-2 text-sm",
                                                /[a-z]/.test(password) ? "text-green-600" : "text-gray-500"
                                            )}>
                                                {/[a-z]/.test(password) ? (
                                                    <CheckCircle2 className="h-4 w-4" />
                                                ) : (
                                                    <XCircle className="h-4 w-4" />
                                                )}
                                                At least one lowercase letter (a-z)
                                            </li>
                                            <li className={cn(
                                                "flex items-center gap-2 text-sm",
                                                /[A-Z]/.test(password) ? "text-green-600" : "text-gray-500"
                                            )}>
                                                {/[A-Z]/.test(password) ? (
                                                    <CheckCircle2 className="h-4 w-4" />
                                                ) : (
                                                    <XCircle className="h-4 w-4" />
                                                )}
                                                At least one uppercase letter (A-Z)
                                            </li>
                                            <li className={cn(
                                                "flex items-center gap-2 text-sm",
                                                /[0-9]/.test(password) ? "text-green-600" : "text-gray-500"
                                            )}>
                                                {/[0-9]/.test(password) ? (
                                                    <CheckCircle2 className="h-4 w-4" />
                                                ) : (
                                                    <XCircle className="h-4 w-4" />
                                                )}
                                                At least one number (0-9)
                                            </li>
                                            <li className={cn(
                                                "flex items-center gap-2 text-sm",
                                                /[^A-Za-z0-9]/.test(password) ? "text-green-600" : "text-gray-500"
                                            )}>
                                                {/[^A-Za-z0-9]/.test(password) ? (
                                                    <CheckCircle2 className="h-4 w-4" />
                                                ) : (
                                                    <XCircle className="h-4 w-4" />
                                                )}
                                                At least one special character (!@#$%^&*)
                                            </li>
                                        </ul>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full mt-2"
                                    disabled={loading || !passwordsMatch}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Creating Account...
                                        </>
                                    ) : (
                                        'Sign Up'
                                    )}
                                </Button>

                                <div className="text-center text-sm text-gray-600 mt-4">
                                    Already have an account?{' '}
                                    <Link
                                        href="/login"
                                        className="text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Sign In
                                    </Link>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}