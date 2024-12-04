// components/navBar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/Expertise", label: "Our Expertise" },
    { href: "/Legal", label: "Legal Practice" },
    { href: "/Blogs", label: "Blogs" },
  ];

  return (
    <div className="mx-auto flex justify-center gap-x-4 w-[80vw] py-2">
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
  );
}
