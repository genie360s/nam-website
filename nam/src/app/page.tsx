"use client";
import Image from "next/image";
import SearchBar from "./components/searchBar";
import { NavBar } from "./components/navBar";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between mx-auto mt-20 size-16 w-[90vw]">
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

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
