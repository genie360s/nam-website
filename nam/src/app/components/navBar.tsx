export function NavBar() {
  return (
    
      <div className="mx-auto flex justify-center gap-x-4 w-[80vw] py-2 ">
        <div className="bg-transparent border border-brand-copper rounded-full py-1 text-center  text-brand-copper w-48">
          Home
        </div>
        <div className="bg-transparent border border-brand-copper rounded-full py-1 text-center  text-off-white hover:text-brand-copper w-48">
          Our Expertise
        </div>
        <div className="bg-transparent border border-brand-copper rounded-full py-1 text-center text-off-white hover:text-brand-copper  w-48">
          Legal Practice
        </div>
        <div className="bg-transparent border border-brand-copper rounded-full py-1 text-center text-off-white hover:text-brand-copper  w-48">
          Blogs
        </div>
      </div>
 
  );
}
