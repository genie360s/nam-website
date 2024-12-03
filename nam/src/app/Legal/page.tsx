//Legal Page
"use client";
import Image from "next/image";
import SearchBar from "../components/searchBar";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import LegalCard from "../components/legalCard";
export default function Legal() {
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
        <div className=" mx-auto border-b-4 font-bold  text-2xl w-[6.8em] py-2">
          Legal Practice
        </div>
        <div className="mt-8">
          <p className="text-lg text-justify">
            Our legal practice team offers a wide range of legal and
            administrative services, including the drafting and translation of
            both legal and non-legal documents, as well as their registration
            and witnessing. Please take a moment to review our areas of practice
            and consider how we can best serve your needs.
          </p>
        </div>
      </div>
      {/* the services */}

      <div className="mx-auto mt-[10vh] w-[60vw] grid grid grid-rows-3 grid-flow-col grid-cols-3 gap-4  ">
        <LegalCard />
        <LegalCard />
        <LegalCard />
        <LegalCard />
        <LegalCard />
        <LegalCard />
        <LegalCard />
        <LegalCard />
        <LegalCard />

      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
