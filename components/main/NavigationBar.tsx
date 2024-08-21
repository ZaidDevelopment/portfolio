"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    // { href: "/", link: "Home" },
    { href: "/about", link: "About" },
    { href: "/#skills", link: "Skills" },
    { href: "/#projects", link: "Portfolio" },
    { href: "/contact", link: "Contact" },
  ];

  // change navigation style depending on page open
  const pathname = usePathname();
  const [bgColor, setbgColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const [textHoverColor, setTextHoverColor] = useState("text-gray-200");
  useEffect(() => {
    // dark theme
    if (pathname === "/" || pathname === "/contact" || pathname === "/about") {
      setbgColor("bg-transparent");
      setTextColor("text-white");
      setTextHoverColor("hover:text-gray-200");
    } else {
      // light theme for other pages
      setbgColor("bg-white");
      setTextColor("text-black");
      setTextHoverColor("hover:text-gray-500");
    }
  }, [pathname]);

  return (
    <nav className={`w-full ${bgColor}`}>
      <div className="mx-auto max-w-5xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <Image
                src="/images/logos/logo.png"
                alt="logo"
                width={110}
                height={110}
              />
            </a>
          </div>
          <div className="block md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={`${textColor} ${textHoverColor} focus:outline-none`}
            >
              {/* Hamburger Icon */}
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:block">
            {/* Navbar Links */}
            <div className="flex items-baseline space-x-4">
              {links.map((link) => (
                <Link key={link.link} href={link.href}>
                  <span
                    className={`rounded-2xl px-3 py-2 text-sm font-medium ${textColor} hover:bg-red-700 hover:bg-opacity-60`}
                  >
                    {link.link}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fade-in px-4 py-2 sm:px-6 md:hidden">
          <div className="space-y-6 pb-3 pt-2">
            {/* Navbar Links */}
            {links.map((link) => (
              <Link className="block" key={link.link} href={link.href}>
                <span
                  className={`text-2xl font-semibold ${textColor} ${textHoverColor}`}
                >
                  {link.link}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
