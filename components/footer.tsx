import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <Image src="/images/acac-logo.png" alt="American Cricket Academy Logo" width={60} height={60} />
              <div>
                <h3 className="text-xl font-bold text-white">American Cricket Academy</h3>
                <p className="text-slate-300 text-sm">A Non-Profit Organization</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Cricket is our passion. Our goal is your dream. Join us in promoting cricket excellence in St. Louis and
              beyond.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-red-400 transition-colors">
                <Youtube size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-slate-300 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-slate-300 hover:text-white transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-slate-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-slate-300 hover:text-white transition-colors">
                  Coaches
                </Link>
              </li>
              <li>
                <Link href="/emerging-players" className="text-slate-300 hover:text-white transition-colors">
                  Emerging Players
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-slate-300 hover:text-white transition-colors">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-slate-300 text-sm">St. Louis, Missouri</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-slate-300 text-sm">(314) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-slate-300 text-sm">info@americancricketacademy.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">© 2024 American Cricket Academy & Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
