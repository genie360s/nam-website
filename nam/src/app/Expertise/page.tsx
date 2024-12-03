"use client";
import Image from "next/image";
import SearchBar from "../components/searchBar";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import ExpertiseCard from "../components/expertiseCard";

export default function Expertise() {
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
        <div className=" mx-auto border-b-4 font-bold  text-2xl w-[6.5em] py-2">
          Our Expertise
        </div>
        <div className="mt-8">
          <p className="text-lg text-justify">
            Our expertise is based on comprehensive relocation services designed
            to ensure a smooth and seamless transition for individuals and
            families moving to a new location. We provide a range of tailored
            services, including pre-assignment orientation, concierge services,
            temporary housing, home search assistance, education support,
            settling-in services, maintenance and upkeep, departure services,
            and exclusive tourist packages. Our goal is to facilitate every
            aspect of the relocation process, from initial planning to settling
            in and beyond, ensuring a comfortable and stress-free experience.
          </p>
        </div>
      </div>
      {/* the services */}

      <div className="mx-auto mt-[10vh] w-[60vw] grid grid grid-rows-3 grid-flow-col grid-cols-3 gap-4  ">
        <ExpertiseCard
          imageUrl="/images/why/nam-06.png"
          buttonText="View More"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[6vh] flex items-center justify-center">
                Explore Dar es Salaam
              </div>
              <div className="top-10">Well let&apos;s know where you can get good local food </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/why/nam-06.png"
          buttonText="View More"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[6vh] flex items-center justify-center">
                Explore Dar es Salaam
              </div>
              <div className="top-10">Well let&apos;s know where you can get good local food </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/why/nam-06.png"
          buttonText="View More"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[6vh] flex items-center justify-center">
                Explore Dar es Salaam
              </div>
              <div className="top-10">Well let&apos;s know where you can get good local food </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/why/nam-06.png"
          buttonText="View More"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[6vh] flex items-center justify-center">
                Explore Dar es Salaam
              </div>
              <div className="top-10">Well let&apos;s know where you can get good local food </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/why/nam-06.png"
          buttonText="View More"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[6vh] flex items-center justify-center">
                Explore Dar es Salaam
              </div>
              <div className="top-10">Well let&apos;s know where you can get good local food </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/why/nam-06.png"
          buttonText="View More"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[6vh] flex items-center justify-center">
                Explore Dar es Salaam
              </div>
              <div className="top-10">Well let&apos;s know where you can get good local food </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/why/nam-06.png"
          buttonText="View More"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[6vh] flex items-center justify-center">
                Explore Dar es Salaam
              </div>
              <div className="top-10">Well let&apos;s know where you can get good local food </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/why/nam-06.png"
          buttonText="View More"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[6vh] flex items-center justify-center">
                Explore Dar es Salaam
              </div>
              <div className="top-10">Well let&apos;s know where you can get good local food </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/why/nam-06.png"
          buttonText="View More"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[6vh] flex items-center justify-center">
                Explore Dar es Salaam
              </div>
              <div className="top-10">Well let&apos;s know where you can get good local food </div>
            </div>
          }
        />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
