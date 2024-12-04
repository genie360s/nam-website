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

      <div className="mx-auto mt-[10vh] w-[60vw] grid grid grid-rows-2 grid-flow-col grid-cols-3 gap-4  ">
        <LegalCard
          imageUrl="/images/legal/corporate.jpg"
          buttonText="Corporate & Commercial Law"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Corporate & Commercial Law
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-justify w-[20vw] mt-[10vh] mb-8">
                  <li>
                    Process tailored Business Licenses with the local
                    Municipality.
                  </li>
                  <li>
                    Obtain Tax Identification Numbers (TIN) from the Tax
                    Authority.
                  </li>
                  <li>
                    Facilitate opening bank accounts with local or international
                    banks.
                  </li>
                  <li>Acquire additional licenses or approvals as required.</li>
                  <li>Draft Shareholder Agreements (SHAs).</li>
                  <li>
                    Develop office policies, procedures, and codes of conduct.
                  </li>
                  <li>
                    Handle immigration and relocation matters, including passes,
                    work, and resident permits for foreign individuals.
                  </li>
                  <li>
                    Provide company secretarial services, including advice on
                    corporate governance, employment, intellectual property,
                    contract reviews, taxation, and insolvency/bankruptcy.
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <LegalCard
          imageUrl="/images/legal/labour.jpg"
          buttonText="Labour & Employment"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Labour & Employment
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-justify w-[20vw] mt-[10vh] mb-8">
                  <li>Draft and screen employment contracts.</li>
                  <li>Acquire work permits for foreign employees.</li>
                  <li>
                    Register employees and employers with the National Social
                    Security Fund (NSSF).
                  </li>
                  <li>
                    Register employers with the Workers’ Compensation Fund
                    (WCF).
                  </li>
                  <li>
                    Provide dispute resolution methods for unfair dismissal.
                  </li>
                  <li>Advise on compliance with statutory requirements.</li>
                </ul>
              </div>
            </div>
          }
        />
        <LegalCard
          imageUrl="/images/legal/real-estate.jpg"
          buttonText="Property  & Real Estate"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Property ,Conveyancing & Real Estate
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-justify w-[20vw] mt-[10vh] mb-8">
                  <li>
                    Purchase, sale, lease, and registration of lands, complexes,
                    offices, and residences.
                  </li>
                  <li>
                    Recover property fraudulently acquired by a third party.
                  </li>
                  <li>Draft purchase and sale agreements.</li>
                  <li>Transfer ownership of property.</li>
                  <li>Register and cancel mortgage deeds or bonds.</li>
                </ul>
              </div>
            </div>
          }
        />
        <LegalCard
          imageUrl="/images/legal/intellectual.jpg"
          buttonText="Intellectual Property"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Intellectual Property
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-justify w-[20vw] mt-[10vh] mb-8">
                  <li>
                    Register trademark rights with the Business Registration and
                    Licensing Authority (BRELA), including renewal and
                    cancellation.
                  </li>
                  <li>
                    Register and maintain entertainment and media-related
                    copyrights with the Copyright Office of Tanzania (COSOTA),
                    including infringement proceedings.
                  </li>
                  <li>Register patents with BRELA.</li>
                </ul>
              </div>
            </div>
          }
        />
        <LegalCard
          imageUrl="/images/legal/taxes.jpg"
          buttonText="Taxation"
          modalContent={
            <div className="text-center text-brand-blue flex items-center justify-center ">
              <div className="font-bold text-center text-xl mb-4 absolute top-[5vh] flex items-center justify-center">
                Taxation
              </div>
              <div className="top-10">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-justify w-[20vw] mt-[10vh] mb-8">
                  <li>
                    Provide domestic and international/cross-border tax
                    advisory, planning, and strategy.
                  </li>
                  <li>
                    Handle negotiations, discussions, and representation before
                    tax authorities, including the national Revenue Authority
                    (TRA), tax, and appeal Boards and Tribunals.
                  </li>
                  <li>Apply for a Tax Identification Number (TIN).</li>
                  <li>Process amendments to a TIN certificate.</li>
                  <li>Prepare and handle tax assessment disputes.</li>
                  <li>Prepare consolidated annual tax reports.</li>
                  <li>Conduct tax audits and draft associated reports.</li>
                  <li>
                    Consult on tax matters, including tax structure, taxes,
                    duties, levies, returns, and associated penalties.
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
