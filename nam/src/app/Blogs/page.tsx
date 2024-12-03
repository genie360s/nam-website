//Blogs
"use client";
import Image from "next/image";
import SearchBar from "../components/searchBar";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import BlogCard from "../components/blogCard";
export default function Blogs() {
  return (
    <div>
      <div className="flex justify-between mx-auto mt-20 size-16 w-[80vw]">
        <div className="h-96 flex-none">
          <Image
            src="/images/nam-logo.png"
            alt="Nam & Associates"
            width={200}
            height={200}
          />
        </div>
        <div className=" flex-auto order-last">
          <div className="grid justify-items-end mt-3">
            <SearchBar
              searchHandler={(query: string) => console.log(query)}
            ></SearchBar>
          </div>
        </div>
      </div>
      <NavBar />
      <div className="mx-auto w-[60vw] mt-[10vh]">
        <div className=" mx-auto border-b-4 font-bold  text-2xl w-[2.6em] py-2">
          Blogs
        </div>
        <div className="mt-8">
          <p className="text-lg text-justify">
            Our blog serves as a trusted resource for navigating the
            complexities of legal and administrative matters. Whether you&apos;re
            seeking clarity on legal procedures or looking for tips to
            streamline administrative processes, our articles are designed to
            inform and empower you. Stay updated with expert insights and
            practical advice to make informed decisions and safeguard your
            interests.
          </p>
        </div>
      </div>
      {/* the services */}

      <div className="mx-auto mt-[10vh] w-[60vw] grid grid grid-rows-3 grid-flow-col grid-cols-3 gap-4  ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />

      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
