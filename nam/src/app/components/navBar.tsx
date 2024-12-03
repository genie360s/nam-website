//components/NavBar.tsx
import Link from "next/link";
export function NavBar() {
  return (
    <div className="mx-auto flex justify-center gap-x-4 w-[80vw] py-2 ">
      <Link href="/">
        <div className="bg-transparent border border-brand-copper rounded-full py-1 text-center  text-brand-copper w-48">
          Home
        </div>
      </Link>
      <Link href="/Expertise">
        <div className="bg-transparent border border-brand-copper rounded-full py-1 text-center  text-off-white hover:text-brand-copper w-48">
          Our Expertise
        </div>
      </Link>
      <Link href="/Legal">
        <div className="bg-transparent border border-brand-copper rounded-full py-1 text-center text-off-white hover:text-brand-copper  w-48">
          Legal Practice
        </div>
      </Link>
      <Link href="/Legal">
        <div className="bg-transparent border border-brand-copper rounded-full py-1 text-center text-off-white hover:text-brand-copper  w-48">
          Blogs
        </div>
      </Link>
    </div>
  );
}
