'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="nav-bar-top flex items-center justify-between px-6 md:px-16 py-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">🥭</span>
        <span className="font-playfair font-black text-xl text-[#2D5016]">
          KK <span className="text-[#F5A623]">Mango</span> Farm
        </span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        <li><a href="#why" className="text-gray-700 font-medium text-sm hover:text-[#E8891A] transition-colors">Why Us</a></li>
        <li><a href="#shop" className="text-gray-700 font-medium text-sm hover:text-[#E8891A] transition-colors">Order</a></li>
        <li><a href="#about" className="text-gray-700 font-medium text-sm hover:text-[#E8891A] transition-colors">Our Farm</a></li>
        <li><a href="#reviews" className="text-gray-700 font-medium text-sm hover:text-[#E8891A] transition-colors">Reviews</a></li>
        <li>
          <a
            href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20order%20Kesar%20mangoes%20from%20KK%20Mango%20Farm"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2D5016] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#4A7C23] transition-colors"
          >
            Order Now
          </a>
        </li>
      </ul>

      {/* Mobile Order Button */}
      <a
        href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20order%20Kesar%20mangoes%20from%20KK%20Mango%20Farm"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden bg-[#F5A623] text-white text-sm font-semibold px-4 py-2 rounded-full"
      >
        Order 📦
      </a>
    </nav>
  )
}
