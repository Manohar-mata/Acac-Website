"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Facebook, Twitter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Registration", href: "/registration" },
  { name: "Events", href: "/events" },
  { name: "Coaches", href: "/coaches" },
  { name: "Contact", href: "/contact" },
  { name: "Media", href: "/media" },
  { name: "Emerging Players", href: "/emerging-players" },
  { name: "ACAC Achievements", href: "/achievements" },
  {
    name: "Leagues",
    href: "/leagues",
    subItems: [
      { name: "All Teams", href: "/leagues" },
      { name: "St. Louis Thunder", href: "/leagues/st-louis-thunder" },
      { name: "Gateway Warriors", href: "/leagues/gateway-warriors" },
      { name: "Arch City Eagles", href: "/leagues/arch-city-eagles" },
      { name: "Missouri Mavericks", href: "/leagues/missouri-mavericks" },
      { name: "River City Royals", href: "/leagues/river-city-royals" },
      { name: "Heartland Hawks", href: "/leagues/heartland-hawks" },
      { name: "Prairie Storm", href: "/leagues/prairie-storm" },
    ],
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Banner */}
      <div className="bg-slate-700 text-white py-2 px-4 text-center text-sm">
        <span className="font-medium">REGISTRATION OPEN - </span>
        <Link href="/registration" className="text-blue-300 hover:text-blue-200 underline transition-colors">
          Register now!
        </Link>
        <div className="float-right hidden sm:flex space-x-2">
          <Link href="#" className="text-white hover:text-blue-300 transition-colors">
            <Facebook size={16} />
          </Link>
          <Link href="#" className="text-white hover:text-blue-300 transition-colors">
            <Twitter size={16} />
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Title */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <Image
                  src="/images/acac-logo.png"
                  alt="American Cricket Academy Logo"
                  width={80}
                  height={80}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl lg:text-3xl font-bold">
                  <span className="text-red-600">A</span>
                  <span className="text-blue-600">MERICAN </span>
                  <span className="text-red-600">C</span>
                  <span className="text-blue-600">RICKET </span>
                  <span className="text-red-600">A</span>
                  <span className="text-blue-600">CADEMY</span>
                </h1>
                <p className="text-slate-600 italic text-sm lg:text-base">A Non-Profit Organization</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navigation.map((item) =>
                item.subItems ? (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Link>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </nav>

            {/* Mobile menu button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
