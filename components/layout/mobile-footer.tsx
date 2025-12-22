import Link from "next/link"
import Image from "next/image";

export function MobileFooter() {
    return (
        <footer className="relative mt-16 overflow-hidden w-full md:hidden">
            <div className="absolute inset-0 z-0">
                <Image fill src="/images/fotter_img_kids_bg.svg" alt="fotter-bg" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#020202]/75" />
            </div>

            <div className="relative z-10 px-6 py-12 pb-12">
                <div className="space-y-12">
                    <div className="text-left space-y-3">
                        <div className="flex justify-start">
                            <img
                                src="/icons/tiny_tales_logo.svg"
                                alt="TinyTales"
                                className="h-16 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed mt-6">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit, sed diam nonummy dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy
                        </p>
                    </div>

                    <div className="flex justify-between gap-6 mt-6">
                        <div>
                            <h3 className="font-bold text-white mb-4 text-base">Contact Us</h3>
                            <ul className="space-y-4 text-sm text-gray-300">
                                <li className="flex items-start gap-2.5">
                                    <img src="icons/footer/phone_icon.svg" alt="phone"/>
                                    <span className="leading-relaxed">+87 01928491</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <img src="icons/footer/gmail_icon.svg" alt="gmail"/>
                                    <span className="break-all leading-relaxed">Named@gmail.com</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <img src="icons/footer/location_icon.svg" alt="location"/>
                                    <span className="leading-relaxed">381, cairo, egypt</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-white mb-4 text-base">Let Us Help</h3>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li>
                                    <Link href="/account" className="hover:text-white transition" onClick={(e) => e.preventDefault()}>
                                        My Account
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="hover:text-white transition" onClick={(e) => e.preventDefault()}>
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-white transition" onClick={(e) => e.preventDefault()}>
                                        Contact & Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/categories" className="hover:text-white transition" onClick={(e) => e.preventDefault()}>
                                        Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products" className="hover:text-white transition" onClick={(e) => e.preventDefault()}>
                                        All Products
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4 text-base">Send Email</h3>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full pl-4 pr-24 py-3.5 bg-white text-gray-900 rounded-2xl text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BE968E] border border-gray-200"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[#BE968E] hover:bg-[#A87F77] text-white rounded-xl font-medium transition-colors text-sm">
                                Send
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4 text-base mt-6">Follow Us</h3>
                        <div className="flex items-center justify-start gap-4">
                            <Link href="#" className="text-white hover:text-[#BE968E] transition" onClick={(e) => e.preventDefault()}>
                                <img src="icons/socials/eva_facebook-fill.svg" alt="facebook" className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-white hover:text-[#BE968E] transition" onClick={(e) => e.preventDefault()}>
                                <img src="icons/socials/mdi_twitter.svg" alt="twitter" className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-white hover:text-[#BE968E] transition" onClick={(e) => e.preventDefault()}>
                                <img src="icons/socials/ri_instagram-fill.svg" alt="instagram" className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-white hover:text-[#BE968E] transition" onClick={(e) => e.preventDefault()}>
                                <img src="icons/socials/linkedin-fill.svg" alt="linkedin" className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-white hover:text-[#BE968E] transition" onClick={(e) => e.preventDefault()}>
                                <img src="icons/socials/whatsapp.svg" alt="whatsapp" className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-white hover:text-[#BE968E] transition" onClick={(e) => e.preventDefault()}>
                                <img src="icons/socials/telegram.svg" alt="telegram" className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}