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
      <div className="mx-auto w-[60vw] mt-[6vh]">
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

      <div className="mx-auto mt-[10vh] w-[60vw] grid sm:grid-flow-row sm:grid-auto-rows lg:grid-rows-3 lg:grid-flow-col lg:grid-cols-3 md:grid-cols-2 gap-4  ">
        <ExpertiseCard
          imageUrl="/images/expertise/orientation_tour.jpeg"
          buttonText="Orientation Tour"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Orientation Tour
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-justify w-[20vw] text-gray-700 mt-[10vh] mb-8">
                  <li>Create excitement and manage relocation expectations.</li>
                  <li>
                    Identify key costs early to save on relocation expenses.
                  </li>
                  <li>
                    Enable informed decisions for a smooth transition and family
                    well-being.
                  </li>
                  <li>Provide insights into the local housing market.</li>
                  <li>
                    Facilitate cultural adaptation through early exposure to
                    local culture.
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/expertise/concierge_services.jpeg"
          buttonText="Concierge Services"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Concierge Services
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-justify w-[20vw] mt-[10vh] mb-8 text-gray-700">
                  <li>Plan and book flights for employees and families.</li>
                  <li>Share updated travel restrictions information.</li>
                  <li>
                    Offer a warm welcome upon arrival with meet-and-greet
                    services.
                  </li>
                  <li>Arrange airport transfers to the destination.</li>
                  <li>
                    Provide guided tours of living areas and local amenities.
                  </li>
                  <li>
                    Assist with rental car bookings and daily living tips.
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/expertise/temporary.jpeg"
          buttonText="Temporary Housing"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Temporary Housing
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-justify w-[20vw] mt-[10vh] mb-8">
                  <li>
                    Secure temporary accommodations like serviced apartments or
                    short-term rentals.
                  </li>
                  <li>
                    Arrange leases, furnishings, utilities, and housekeeping.
                  </li>
                  <li>Manage maintenance and security services.</li>
                  <li>
                    Provide additional concierge support for specific tasks.
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/expertise/house.jpeg"
          buttonText="Home Search"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Home Search
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-justify w-[20vw] mt-[10vh] mb-8">
                  <li>Assess client preferences and budget for housing.</li>
                  <li>Research and shortlist suitable properties.</li>
                  <li>
                    Offer property tours and assist with rental/purchase
                    negotiations.
                  </li>
                  <li>
                    Ensure legal compliance and provide local area information.
                  </li>
                  <li>Provide post-move support for a smooth transition.</li>
                </ul>
              </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/expertise/education.jpeg"
          buttonText="Education"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Education
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-justify w-[20vw] mt-[10vh] mb-8">
                  <li>Research and recommend suitable schools.</li>
                  <li>
                    Assist with application, enrollment, and admissions
                    processes.
                  </li>
                  <li>Guide families with special education needs.</li>
                  <li>Provide ongoing school support throughout the year.</li>
                </ul>
              </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/expertise/settling_in.jpeg"
          buttonText="Settling In"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Settling In
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-justify w-[20vw] mt-[10vh] mb-8">
                  <li>
                    Offer insights into healthcare access and insurance needs.
                  </li>
                  <li>
                    Introduce local culture, customs, and Swahili language
                    basics.
                  </li>
                  <li>Explain transport options and safety considerations.</li>
                  <li>
                    Share employment opportunities and assist in hiring domestic
                    workers.
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/expertise/maintainance_and_upkeep.jpeg"
          buttonText="Maintenance & Upkeep"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Maintenance & Upkeep
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-justify w-[20vw] mt-[10vh] mb-8">
                  <li>
                    Manage work and residence permit applications and renewals.
                  </li>
                  <li>
                    Provide guidance on visa and immigration requirements.
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/expertise/departure.jpeg"
          buttonText="Departure Services"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Departure Services
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-justify w-[20vw] mt-[10vh] mb-8">
                  <li>
                    Support lease termination and deregistration processes.
                  </li>
                  <li>
                    Arrange utility disconnections and end-of-tenancy cleaning.
                  </li>
                  <li>Handle security deposit claims and returns.</li>
                </ul>
              </div>
            </div>
          }
        />
        <ExpertiseCard
          imageUrl="/images/expertise/tourism.jpeg"
          buttonText="Tourism"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Tourism
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-justify w-[20vw] mt-[10vh] mb-8">
                  <li>
                    Relax on Zanzibar’s beaches and explore its rich heritage.
                  </li>
                  <li>
                    Experience guided safaris in Serengeti, Ngorongoro, and
                    Tarangire National Parks.
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
