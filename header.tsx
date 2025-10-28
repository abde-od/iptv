"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, Search } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-sm" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white">NYLO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-white hover:text-red-500 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
              Subscription
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
              Channel List
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
              FAQ
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
              About Us
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
              Pages
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-red-500 transition-colors hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-red-500 transition-colors relative hidden md:block">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <Button className="bg-red-600 hover:bg-red-700 text-white hidden md:flex">Get Started</Button>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                Subscription
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                Channel List
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                FAQ
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                About Us
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                Pages
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                Contact
              </a>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full">Get Started</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
