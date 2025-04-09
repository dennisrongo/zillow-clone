'use client'; // Required for useState

import { useState } from 'react'; // Import useState
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define links for reusability
  const mainNavLinks = [
    { href: "/buy", label: "Buy" },
    { href: "/rent", label: "Rent" },
    { href: "/sell", label: "Sell" },
    { href: "/home-loans", label: "Home Loans" },
    { href: "/agent-finder", label: "Find an Agent" },
  ];

  const secondaryNavLinks = [
    { href: "/manage-rentals", label: "Manage Rentals" },
    { href: "/advertise", label: "Advertise" },
    { href: "/help", label: "Help" },
    { href: "/signin", label: "Sign in" },
  ];

  return (
    // Added relative positioning for the absolute mobile menu
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 relative">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left side: Logo and Main Nav */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ZillowClone
          </Link>
          {/* Desktop Main Nav */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
            {mainNavLinks.map(link => (
               <Link key={link.href} href={link.href} className="hover:text-blue-600">{link.label}</Link>
            ))}
          </div>
        </div>

        {/* Right side: Secondary Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
           {secondaryNavLinks.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-blue-600">{link.label}</Link>
           ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-1 rounded"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              // X Icon
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              // Hamburger Icon
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay/Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-40">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {/* Main Nav Links */}
            <div className="space-y-2 border-b pb-4 mb-4">
              {mainNavLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={toggleMobileMenu} // Close menu on link click
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Secondary Nav Links */}
            <div className="space-y-2">
              {secondaryNavLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={toggleMobileMenu} // Close menu on link click
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 