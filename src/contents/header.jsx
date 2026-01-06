import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-white font-medium"
      : "text-gray-300 hover:text-white transition";

  return (
    <header className="w-full bg-gradient-to-r from-[#0a0f1f] via-[#0b1226] to-[#0a0f1f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">
            &lt;/&gt;
          </div>
          <span className="text-lg font-semibold tracking-wide">
            Nexora Infotech
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
          <NavLink to="/events" className={navLinkClass}>Events</NavLink>
          <NavLink to="/internships" className={navLinkClass}>Internships</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/careers" className={navLinkClass}>Careers</NavLink>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/join"
            className="hidden sm:block px-5 py-2 text-sm rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
          >
            Join Us
          </Link>

          <Link
            to="/contact"
            className="px-5 py-2 text-sm rounded-full bg-blue-500 hover:bg-blue-600 transition"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </header>
  );
}
