"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function DesktopHeader() {
    const [activeNav, setActiveNav] = useState("Home")

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
    }

    return (
        <header className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/#" className="flex items-center mr-7" onClick={(e) => e.preventDefault()}>
                            <div className="w-18 h-18 rounded-lg flex items-center justify-center relative">
                                <Image src="/icons/tiny_tales_logo.svg" alt="TinyTales Logo" fill className="object-contain p-2" />
                            </div>
                        </Link>

                        <nav className="flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`flex items-center space-x-2 text-sm transition-colors cursor-pointer ${
                                        activeNav === item.label ? "text-gray-900 font-medium" : "text-gray-500 hover:text-gray-900"
                                    }`}
                                    onClick={(e) => handleNavClick(e, item.label)}
                                >
                                    <div className="w-[18px] h-[18px] relative flex-shrink-0">
                                        <Image src={item.icon || "/placeholder.svg"} alt="" fill className="object-contain" />
                                    </div>
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center space-x-4">
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
                            className="text-gray-600 hover:text-gray-900 relative w-10 h-8"
                            onClick={(e) => e.preventDefault()}
                        >
                            <Image src="/icons/language_icon.svg" alt="Language Selector" fill className="object-contain" />
                        </Link>

                        <Link
                            href="/#"
                            className="text-gray-600 hover:text-gray-900 relative w-10 h-8"
                            onClick={(e) => e.preventDefault()}
                        >
                            <Image src="/icons/account_icon.svg" alt="User Account" fill className="object-contain" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}