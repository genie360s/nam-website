//Library
"use client";
import Image from "next/image";
import SearchBar from "../components/searchBar";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";

export default function Library() {
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
        <div className=" flex-auto order-last hidden md:block">
          <div className="grid justify-items-end mt-3 mb-3">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="w-[80vw] md:hidden grid justify-items-end mx-auto ">
        <SearchBar />
      </div>
      <NavBar />
      <div className="mt-5 mx-auto w-[70vw] ">
        <div className=" h-96 bg-[url('/images/office.jpg')] bg-cover"></div>
        <div className=" w-[50vw] mx-auto mt-10">
            <h2 className="searchable text-5xl font-bold mb-5">Setting Up A Firm In Tanzania : A Step By Step Guide </h2>
          <p className="searchable text-justify text-lg mb-2">
            Tanzania is one of the fastest-growing economies in East Africa,
            offering vast opportunities for entrepreneurs. With its stable
            political environment, a growing middle class, and abundant natural
            resources, Tanzania provides a fertile ground for businesses in
            various sectors like agriculture, tourism, mining, and technology.
          </p>

          <p className="searchable text-justify text-lg mb-2">
            Before you start a business in Tanzania, it is essential to
            understand the legal requirements. Business registration is the
            first step. You need to choose a business structure such as sole
            proprietorship, partnership, or limited liability company. Register
            your business name with the Business Registrations and Licensing
            Agency (BRELA). Obtaining a Tax Identification Number (TIN) from the
            Tanzania Revenue Authority (TRA) and registering for Value-Added Tax
            (VAT), if applicable, are also crucial steps. Additionally, you must
            apply for sector-specific licenses and secure local government
            permits to operate within a specific region.
          </p>

          <p className="searchable text-justify text-lg mb-2">
            Conducting thorough market research is critical to understanding
            your target audience, competitors, and industry trends. A solid
            business plan should outline your goals, include a market analysis,
            and provide a financial plan that projects costs, revenue, and
            funding needs. This groundwork helps you navigate the market
            effectively and positions your business for success.
          </p>

          <p className="searchable text-justify text-lg mb-2">
            Financing is another key aspect of starting a business. Options
            include personal savings, loans from financial institutions,
            government grants, and partnerships. Understanding which financing
            option suits your business model is crucial for long-term
            sustainability.
          </p>

          <p className="searchable text-justify text-lg mb-2">
            To succeed, leverage local resources and networks to build
            partnerships. Stay compliant with Tanzanian laws and regulations,
            and invest in marketing and digital tools to reach a broader
            audience. Focus on providing quality products or services to build a
            loyal customer base. While Tanzania offers immense opportunities, it
            is essential to be aware of challenges such as infrastructure
            limitations, bureaucratic hurdles, and access to funding for small
            businesses.
          </p>

          <p className="searchable text-justify text-lg mb-2">
            Starting a business in Tanzania can be a rewarding journey with the
            right preparation and strategy. By understanding the legal
            requirements, conducting thorough market research, and leveraging
            available resources, you can position your business for success in
            this vibrant economy.
          </p>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
