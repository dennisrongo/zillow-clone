'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Helper component for social media icons (replace with actual icons/SVG later)
const SocialIconPlaceholder = ({ platform }: { platform: string }) => (
    <a href="#" aria-label={`Zillow on ${platform}`} className="text-gray-500 hover:text-gray-700">
        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs">{platform.substring(0, 1)}</div>
    </a>
);

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Initial state for SSR

  useEffect(() => {
    // Update the year on the client side after hydration
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Mock data for footer links
  const mainLinkSections = [
    { name: "Real Estate", href: "#" }, // These could be dropdowns later
    { name: "Rentals", href: "#" },
    { name: "Mortgage Rates", href: "#" },
    { name: "Browse Homes", href: "#" },
  ];

  const secondaryLinks = [
    "About", "Zestimates", "Research", "Careers", "Help", "Advertise",
    "Fair Housing Guide", "Terms of use", "Privacy Portal", "Cookie Preference",
    "Learn", "AI", "Mobile Apps"
  ];

  const partnerLinks = ["Trulia", "StreetEasy", "HotPads", "Out East", "ShowingTime+"];

  const legalLinks = [
      { name: "licenses", href: "#" },
      { name: "§ 442-H New York Standard Operating Procedures", href: "#" },
      { name: "New York Fair Housing Notice", href: "#" },
      { name: "TREC: Information about brokerage services", href: "#" },
      { name: "Consumer protection notice", href: "#" },
      { name: "California DRE #1522444", href: "#" },
      { name: "Contact Zillow, Inc. Brokerage", href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-16 pt-8 pb-12 text-gray-600">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Link Sections with Dividers */}
        <div className="flex justify-around mb-8 border-b pb-8">
          {mainLinkSections.map((section, index) => (
            <div key={section.name} className={`flex-1 text-center px-2 ${index > 0 ? 'border-l border-gray-200' : ''}`}>
              {/* Make these actual links or interactive dropdown triggers later */}
              <Link href={section.href} className="text-sm font-semibold text-gray-800 hover:text-blue-600">
                {section.name} 
                {/* Placeholder for dropdown arrow */}
                <span className="inline-block ml-1">▼</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Secondary Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs mb-4">
          {secondaryLinks.map((link) => (
            <Link key={link} href="#" className="hover:underline">{link}</Link>
          ))}
        </div>
         <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs mb-8">
          {partnerLinks.map((link) => (
            <Link key={link} href="#" className="hover:underline">{link}</Link>
          ))}
        </div>

         {/* Do Not Sell Link */}
         <div className="text-center text-sm mb-8">
           <Link href="#" className="text-blue-600 hover:underline font-semibold">
               Do Not Sell or Share My Personal Information →
             </Link>
         </div>

         {/* Accessibility & Legal Info */}
         <div className="text-center text-xs text-gray-500 space-y-3 mb-8">
            <p>
                Zillow Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please <a href="#" className="text-blue-600 underline">let us know</a>.
            </p>
            <p>
                Zillow, Inc. holds real estate brokerage <a href="#" className="text-blue-600 underline">licenses</a> in multiple states. Zillow (Canada), Inc. holds real estate brokerage <a href="#" className="text-blue-600 underline">licenses</a> in multiple provinces.
            </p>
             <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                {legalLinks.map((link) => (
                    <a key={link.name} href={link.href} className="hover:underline">{link.name}</a>
                ))}
            </div>
            <p>
                For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.
            </p>
         </div>

         {/* App Buttons, Social, Logo, Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
            {/* App Store Buttons (Placeholders) */}
            <div className="flex gap-4 order-3 md:order-1">
                 <a href="#" aria-label="Download on the App Store"><div className="h-8 w-24 bg-gray-300 rounded flex items-center justify-center text-gray-500">App Store</div></a>
                 <a href="#" aria-label="Get it on Google Play"><div className="h-8 w-24 bg-gray-300 rounded flex items-center justify-center text-gray-500">Google Play</div></a>
            </div>

            {/* Logo, Social, Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 order-1 md:order-2 text-center sm:text-left">
                {/* Zillow Logo Placeholder */}
                <Link href="/" className="text-blue-600 font-bold text-lg">Zillow</Link>
                <span>Follow us:</span>
                <div className="flex gap-3">
                   <SocialIconPlaceholder platform="Facebook" />
                   <SocialIconPlaceholder platform="Instagram" />
                   <SocialIconPlaceholder platform="TikTok" /> 
                </div>
                 <span>© 2006-{currentYear} Zillow</span>
            </div>

             {/* Equal Housing Logo Placeholder */}
             <div className="order-2 md:order-3">
                 <div className="h-6 w-6 bg-gray-300 rounded flex items-center justify-center text-xs">EHL</div>
             </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 