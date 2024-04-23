"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Fan, Search } from "lucide-react";
import Profile from "@/components/Profile";

interface NavigationLink {
  label: string;
  route: string;
}

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  // State variables
  const [isOpen, setIsOpen] = useState(false);
  const [isAdditionalMenuOpen, setIsAdditionalMenuOpen] = useState(false);

  // Toggle handlers
  const handleToggle = () => setIsOpen(!isOpen);
  const handleAdditionalMenuToggle = () =>
    setIsAdditionalMenuOpen(!isAdditionalMenuOpen);

  // Select item and close menu
  const handleSelectItem = (itemName: string, route: string) => {
    router.push(route);
    setIsOpen(false);
    setIsAdditionalMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen || isAdditionalMenuOpen) {
        const dropdown = document.querySelector(".dropdown-menu");
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setIsOpen(false);
          setIsAdditionalMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isAdditionalMenuOpen]);

  // Navigation links
  const navigationLinks: NavigationLink[] = [
    { label: "Home", route: "/" },
    { label: "Roadmaps", route: "/roadmap" },
    { label: "Jobs", route: "/jobs" },
    { label: "Profile", route: "/profile" },
    { label: "Resume", route: "/resume" },
  ];

  return (
    <nav className="topbar">
      <div className="w-full border-b">
        <div className="wrapper flex items-center justify-between ">
          {/* Hamburger  */}
          <div className="mt-1 md:hidden">
            <Menu onClick={handleAdditionalMenuToggle} />
            {isAdditionalMenuOpen && (
              <div className="absolute left-0 mt-4 w-40 bg-slate-100 rounded-lg shadow-lg z-10 dropdown-menu">
                {navigationLinks.map((link) => (
                  <div
                    key={link.label}
                    className="block px-4 py-2 rounded-lg items-center hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleSelectItem(link.label, link.route)}
                  >
                    {link.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Logo */}
          <div className="hover:drop-shadow-xl">
            <Link href="/" className="flex items-center gap-4">
              <div className="rounded-full shadow-lg hover:drop-shadow-xl">
                <Fan className="m-3" />
              </div>
              <p className="hidden lg:flex text-xl font-bold text-blue-900">
                Job-Recomendation-App
              </p>
            </Link>
          </div>
          {/* Search */}
          <span className="ml-15 flex relative flex-row">
            <input
              type="text"
              className="w-40 lg:w-72 border-2 rounded-full py-1 my-1 px-2 focus:outline-none focus:ring-2 focus:ring-pblue-600"
            />
            <Search className="absolute top-2 right-1" />
          </span>
          {/* Navigation links */}
          <div className="hidden md:flex gap-2  mx-1 ">
            {navigationLinks.map((link) => (
              <Link
                href={link.route}
                key={link.label}
                className={`rounded-lg p-2 ${
                  pathname === link.route
                    ? "text-blue-800 bg-blue-100"
                    : "hover:bg-blue-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* SignOut buttons */}
          <button className="border p-1 rounded-lg hover:bg-slate-100 ">
            <Profile />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
