'use client'

import Link from 'next/link';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaArrowRight 
} from 'react-icons/fa6';
import { HiOutlineHome } from 'react-icons/hi2';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm font-nunito">
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl hover:text-white transition-colors">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-700 bg-slate-900">
                <HiOutlineHome className="w-5 h-5 text-white" />
              </div>
              <span>EstateHub</span>
            </Link>
            <p className="text-md text-slate-400 leading-relaxed">
              We help you find the perfect property to call home. Your trusted real estate partner.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <nav className="grid grid-cols-3 lg:col-span-3 gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/properties" className="hover:text-white transition-colors">Properties</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Properties */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Properties</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition-colors">For Rent</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Sale</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Luxury Homes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apartments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Villas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
              </ul>
            </div>
          </nav>

          {/* Newsletter Form */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-white font-semibold text-lg">Newsletter</h3>
            <p className="text-md text-slate-400 leading-relaxed">
              Subscribe to get updates on new properties and offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-brand-darkGold hover:bg-brand-gold/90 text-slate-950 p-2.5 rounded-lg font-semibold transition-colors shrink-0"
              >
                <FaArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 text-center text-md text-slate-500">
          <p>© {currentYear} EstateHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;