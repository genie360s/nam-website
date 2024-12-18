// components/navBar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/Expertise", label: "Our Expertise" },
    { href: "/Legal", label: "Legal Practice" },
    { href: "/Blogs", label: "Blogs" },
  ];

  return (
    <nav className="mx-auto flex justify-between items-center w-[80vw] py-4 relative">
     

      {/* Hamburger Icon */}
      <button
        className="block lg:hidden cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div
          className={`h-0.5 w-8 bg-brand-copper transition-transform duration-300 rounded-lg ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`h-0.5 w-8 bg-brand-copper my-1 transition-opacity duration-300 rounded-lg ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-0.5 w-8 bg-brand-copper transition-transform duration-300 rounded-lg ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-center gap-x-4 mx-auto">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <div
              className={`border border-brand-copper rounded-full py-1 text-center w-48 
                ${
                  pathname === item.href
                    ? "bg-brand-copper text-brand-blue"
                    : "bg-transparent text-off-white hover:text-brand-copper"
                }
              `}
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`absolute top-16 right-0 w-full bg-brand-copper z-40 lg:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            <div
              className={`w-full py-4 text-center border-b border-off-white 
                ${
                  pathname === item.href
                    ? "bg-brand-blue text-brand-copper"
                    : "text-off-white hover:bg-brand-blue hover:text-brand-copper"
                }
              `}
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
