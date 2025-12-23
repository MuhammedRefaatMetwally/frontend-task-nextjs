"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function MobileHeader() {
    const [activeNav, setActiveNav] = useState("Home")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = [
        { label: "Home", href: "/", icon: "/icons/home_icon.svg" },
        { label: "Our Category", href: "/#", icon: "/icons/category_icon.svg" },
        { label: "About Us", href: "/#", icon: "/icons/about_icon.svg" },
        { label: "Contact Us", href: "/#", icon: "/icons/contact_icon.svg" },
        { label: "FAQs", href: "/#", icon: "/icons/faq_icon.svg" },
    ]

    const handleNavClick = (e, label) => {
        e.preventDefault()
        setActiveNav(label)
        setIsMobileMenuOpen(false)
    }

    return (
        <header className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/#" className="flex items-center" onClick={(e) => e.preventDefault()}>
                        <div className="w-18 h-18 rounded-lg flex items-center justify-center relative">
                            <Image src="/icons/tiny_tales_logo.svg" alt="TinyTales Logo" fill className="object-contain p-2" />
                        </div>
                    </Link>

                    <button
                        className="text-gray-900 w-8 h-8 flex items-center justify-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="mt-4 pb-4">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`flex items-center space-x-3 text-base transition-colors cursor-pointer py-2 ${
                                        activeNav === item.label ? "text-gray-900 font-medium" : "text-gray-500 hover:text-gray-900"
                                    }`}
                                    onClick={(e) => handleNavClick(e, item.label)}
                                >
                                    <div className="w-[20px] h-[20px] relative flex-shrink-0">
                                        <Image src={item.icon || "/placeholder.svg"} alt="" fill className="object-contain" />
                                    </div>
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile action icons */}
                        <div className="flex items-center justify-start space-x-6 mt-6 pt-4 border-t">
                            <Link
                                href="/#"
                                className="text-gray-600 hover:text-gray-900 relative w-6 h-6"
                                onClick={(e) => e.preventDefault()}
                            >
                                <Image src="/icons/shopping_bag_icon.svg" alt="Shopping Cart" fill className="object-contain" />
                            </Link>

                            <button className="text-gray-600 hover:text-gray-900 relative w-6 h-6">
                                <Image src="/icons/notification_icon.svg" alt="Notifications" fill className="object-contain" />
                            </button>

                            <Link
                                href="/#"
                                className="text-gray-600 hover:text-gray-900 relative w-6 h-6"
                                onClick={(e) => e.preventDefault()}
                            >
                                <Image src="/icons/favorite_icon.svg" alt="Wishlist" fill className="object-contain" />
                            </Link>

                            <Link
                                href="/#"
                                className="text-gray-600 hover:text-gray-900 relative w-8 h-6"
                                onClick={(e) => e.preventDefault()}
                            >
                                <Image src="/icons/language_icon.svg" alt="Language Selector" fill className="object-contain" />
                            </Link>

                            <Link
                                href="/#"
                                className="text-gray-600 hover:text-gray-900 relative w-8 h-6"
                                onClick={(e) => e.preventDefault()}
                            >
                                <Image src="/icons/account_icon.svg" alt="User Account" fill className="object-contain" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}