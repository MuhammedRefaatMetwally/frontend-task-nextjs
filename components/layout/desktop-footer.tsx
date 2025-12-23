import Link from "next/link";

export function DesktopFooter() {
    return (
        <footer className="relative mt-16 overflow-hidden w-full hidden md:block">
            <div className="absolute inset-0 z-0">
                <img src="/images/fotter_img_kids_bg.svg" alt="fotter-bg" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-[#020202]/75" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/icons/tiny_tales_logo.svg" alt="TingTales" className="h-10 w-auto object-contain brightness-0 invert" />
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Ipsum in eos qui consequatur ab cum maxime.Soluta dolor quae ipsum in eos qui consequatur ab .Soluta dolor
                            quae ipsum in eos quconsequatur ab cum maxime.Soluta dolor quae
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4 text-lg">Let Us Help</h3>
                        <ul className="space-y-2.5 text-sm text-gray-300">
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

                    <div>
                        <h3 className="font-bold text-white mb-4 text-lg">Policies</h3>
                        <ul className="space-y-2.5 text-sm text-gray-300">
                            <li>
                                <Link href="/refund" className="hover:text-white transition" onClick={(e) => e.preventDefault()}>
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition" onClick={(e) => e.preventDefault()}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/cancellation" className="hover:text-white transition" onClick={(e) => e.preventDefault()}>
                                    Cancellation Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition" onClick={(e) => e.preventDefault()}>
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-white transition" onClick={(e) => e.preventDefault()}>
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4 text-lg">Send Email</h3>
                        <div className="relative mb-6 ">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full pl-4 pr-10 py-6 bg-white text-gray-900 rounded-2xl text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BE968E] border border-gray-200"
                            />
                            <button className="w-[135px] absolute right-1.5 top-1/2 -translate-y-1/2 px-6 py-4 bg-[#BE968E] hover:bg-[#A87F77] text-white rounded-xl font-medium transition-colors text-sm font-sans">
                                Send
                            </button>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-3">Follow Us</h4>
                            <div className="flex items-center gap-3">
                                <Link href="#" className="text-white hover:text-[#BE968E] transition" onClick={(e) => e.preventDefault()}>
                                    <img src="icons/socials/eva_facebook-fill.svg" alt="facebook" className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="text-white hover:text-[#BE968E] transition" onClick={(e) => e.preventDefault()}>
                                    <img src="icons/socials/mdi_twitter.svg" alt="twitter" className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="text-white hover:text-[#BE968E] transition" onClick={(e) => e.preventDefault()}>
                                    <img src="icons/socials/ri_instagram-fill.svg" alt="instagram" className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="text-white hover:text-[#BE968E] transition" onClick={(e) => e.preventDefault()}>
                                    <img src="icons/socials/linkedin-fill.svg" alt="linkedin" className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="text-white hover:text-[#BE968E] transition" onClick={(e) => e.preventDefault()}>
                                    <img src="icons/socials/whatsapp.svg" alt="whatsapp" className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="text-white hover:text-[#BE968E] transition" onClick={(e) => e.preventDefault()}>
                                    <img src="icons/socials/telegram.svg" alt="telegram" className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}