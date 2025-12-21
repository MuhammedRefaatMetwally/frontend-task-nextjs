'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
    const [activeNav, setActiveNav] = useState('Home');
    const [isLangOpen, setIsLangOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '/', icon: '/icons/home_icon.svg' },
        { label: 'Our Category', href: '/category', icon: '/icons/category_icon.svg' },
        { label: 'About Us', href: '/about', icon: '/icons/about_icon.svg' },
        { label: 'Contact Us', href: '/contact', icon: '/icons/contact_icon.svg' },
        { label: 'FAQs', href: '/faqs', icon: '/icons/faq_icon.svg' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <div className="w-18 h-18  rounded-lg flex items-center justify-center mr-7 relative">
                            <Image
                                src="/icons/tiny_tales_logo.svg"
                                alt="TinyTales Logo"
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`flex items-center space-x-2 text-sm transition-colors ${
                                        activeNav === item.label
                                            ? 'text-gray-900 font-medium'
                                            : 'text-gray-500 hover:text-gray-900'
                                    }`}
                                    onClick={() => setActiveNav(item.label)}
                                >
                                    <div className="w-[18px] h-[18px] relative flex-shrink-0">
                                        <Image
                                            src={item.icon}
                                            alt=""
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span>{item.label}</span>
                                </a>
                            ))}
                        </nav>

                    </a>


                    <div className="flex items-center space-x-4">
                        <a href="/cart" className="text-gray-600 hover:text-gray-900 relative w-6 h-6">
                            <Image
                                src="/icons/shopping_bag_icon.svg"
                                alt="Shopping Cart"
                                fill
                                className="object-contain"
                            />
                        </a>

                        <button className="text-gray-600 hover:text-gray-900 relative w-6 h-6">
                            <Image
                                src="/icons/notification_icon.svg"
                                alt="Notifications"
                                fill
                                className="object-contain"
                            />
                        </button>

                        <a href="/wishlist" className="text-gray-600 hover:text-gray-900 relative w-6 h-6">
                            <Image
                                src="/icons/favorite_icon.svg"
                                alt="Wishlist"
                                fill
                                className="object-contain"
                            />
                        </a>

                        <a href="/language-selector" className="text-gray-600 hover:text-gray-900 relative w-10 h-8">
                            <Image
                                src="/icons/language_icon.svg"
                                alt="Wishlist"
                                fill
                                className="object-contain"
                            />
                        </a>

                        <a href="/account" className="text-gray-600 hover:text-gray-900 relative w-10 h-8">
                            <Image
                                src="/icons/account_icon.svg"
                                alt="User Account"
                                fill
                                className="object-contain"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}