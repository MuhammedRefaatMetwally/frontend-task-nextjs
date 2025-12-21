import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Send } from "lucide-react"

export function Footer() {
  return (
      <footer className="relative mt-16 overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <img src="/images/fotter_img_kids_bg.svg" alt="fotter-bg" className="w-full"/>
          <div className="absolute inset-0 bg-[#020202]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/image.png" alt="TingTales" className="h-10 w-auto object-contain brightness-0 invert" />
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Ipsum in eos qui consequatur ab cum maxime.Soluta dolor quae ipsum in eos qui consequatur ab .Soluta dolor
                quae ipsum in eos quconsequatur ab cum maxime.Soluta dolor quae
              </p>
            </div>

            {/* Let Us Help */}
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Let Us Help</h3>
              <ul className="space-y-2.5 text-sm text-gray-300">
                <li>
                  <Link href="/account" className="hover:text-white transition">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-white transition">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition">
                    All Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Policies</h3>
              <ul className="space-y-2.5 text-sm text-gray-300">
                <li>
                  <Link href="/refund" className="hover:text-white transition">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation" className="hover:text-white transition">
                    Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Send Email */}
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Send Email</h3>
              <div className="relative mb-6">
                <input
                    type="email"
                    placeholder="Email address"
                    className="w-full pl-4 pr-28 py-3 bg-white text-gray-900 rounded-full text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BE968E]"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 px-8 py-2 bg-[#BE968E] hover:bg-[#A87F77] text-white rounded-full font-medium transition text-sm">
                  Send
                </button>
              </div>

              <div>
                <h4 className="font-bold text-white mb-3">Follow Us</h4>
                <div className="flex items-center gap-3">
                  <Link href="#" className="text-white hover:text-[#BE968E] transition">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-white hover:text-[#BE968E] transition">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-white hover:text-[#BE968E] transition">
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-white hover:text-[#BE968E] transition">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-white hover:text-[#BE968E] transition">
                    <MessageCircle className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-white hover:text-[#BE968E] transition">
                    <Send className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
