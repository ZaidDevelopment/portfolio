"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classNames from "classnames";

interface LinkItem {
  href: string;
  link: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const links: LinkItem[] = useMemo(
    () => [
      { href: "/about", link: "About" },
      { href: "/#skills", link: "Skills" },
      { href: "/#projects", link: "Portfolio" },
      { href: "/contact", link: "Contact" },
    ],
    [],
  );

  const [bgColor, setBgColor] = useState<string>("bg-transparent");
  const [textColor, setTextColor] = useState<string>("text-white");
  const [textHoverColor, setTextHoverColor] = useState<string>(
    "hover:text-gray-200",
  );

  //CSS theme
  useEffect(() => {
    if (pathname === "/" || pathname === "/contact" || pathname === "/about") {
      setBgColor("bg-transparent");
      setTextColor("text-white");
      setTextHoverColor("hover:text-gray-200");
    } else {
      setBgColor("bg-white");
      setTextColor("text-black");
      setTextHoverColor("hover:text-gray-500");
    }
  }, [pathname]);

  return (
    <nav className={classNames("w-full", bgColor)}>
      <div className="mx-auto max-w-5xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" aria-label="Home">
              <Image
                src="/images/logos/logo.png"
                alt="Zaid Development logo"
                width={110}
                height={110}
                priority={true}
                className="transition-opacity hover:opacity-80"
              />
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={classNames(
                textColor,
                textHoverColor,
                "focus:outline-none",
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
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

          {/* Large device menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {links.map(({ href, link }) => (
                <Link key={link} href={href}>
                  <span
                    className={classNames(
                      "rounded-2xl px-3 py-2 text-sm font-medium",
                      textColor,
                      "hover:bg-red-700 hover:bg-opacity-60",
                    )}
                  >
                    {link}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fade-in px-4 py-2 sm:px-6 md:hidden">
          <div className="space-y-6 pb-3 pt-2">
            {links.map(({ href, link }) => (
              <Link className="block" key={link} href={href}>
                <span
                  className={classNames(
                    "text-2xl font-semibold",
                    textColor,
                    textHoverColor,
                  )}
                >
                  {link}
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
