"use client";
import Image from "next/image";
import SearchBar from "./components/searchBar";
import { NavBar } from "./components/navBar";
import GoogleMapEmbed from "./components/googleMapEmbed";
import { Footer } from "./components/footer";
import { Borel } from "next/font/google";
import ContactCard from "./components/contactCard";

const borel = Borel({
  subsets: ["latin"],
  weight: ["400"], // Specify desired font weights
});


export default function Home() {
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
      <div className="flex justify-content gap-x-4 mx-auto mt-10 w-[80vw]">
        <div className="flex-1  w-96 ">
          <Image
            src="/images/left-dar-img.png"
            alt="Nam & Associates"
            width={370}
            height={430}
          />
        </div>
        <div className="flex-1 flex flex-col  w-96 ">
          <div className="mt-[10vh]">
            <div className="mx-auto bg-brand-copper w-[20vw] h-[1vh]"></div>
            <div className="mx-auto font-semibold text-3xl w-[20vw] text-center mt-4 ">
              Relocate easily into the city of Dar es Salaam.
            </div>
            <div className="mx-auto font-normal text-xl w-[20vw] text-center mt-4 ">
              Discover Dar es Salaam with Confidence: <br /> A 360° relocation
              experience
            </div>
            <div className="mx-auto  flex  text-center mt-5 w-[20vw] rounded-full bg-brand-copper  text-brand-blue">
              <div className="flex-auto py-2">Consult Us Today </div>
              <div className="flex-auto animate-slidy py-2">
                <i className="bi bi-arrow-right-circle  text-lg "></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  w-96 relative">
          <Image
            src="/images/right-dar-img.png"
            alt="Nam & Associates"
            className="absolute right-0"
            width={370}
            height={430}
          />
        </div>
      </div>
      {/* foreword */}
      <div className="mx-auto w-[80vw] mt-8">
        <div className=" border-b-4 font-bold  text-2xl w-[5.5vw] py-2">
          Foreword
        </div>
        <div className="flex w-[80vw] gap-[10vw]">
          <div className="flex-initial  w-[45vw] mt-10 ">
            <p className="font-normal text-justify text-lg">
              If you&apos;re moving to or within Dar es Salaam and feeling
              hesitant about the transition, look no further than NAM &
              Associates. With over six years in immigration and relocation
              services, our seasoned team offers unparalleled support. Led by
              Nicole, who is deeply connected in Dar es Salaam&apos;s community,
              we provide expert insights and tailored solutions. From
              immigration formalities to settling-in, trust us for a smooth
              relocation experience that ensures you and your family feel at
              home in Tanzania&apos;s vibrant commercial capital.
            </p>
          </div>
          <div className="flex-initial grid grid-cols-3">
            <div className=" animate-flip ">
              <Image
                src="/images/card.png"
                alt="Nam & Associates"
                width={270}
                height={330}
              />
            </div>
            <div className="-ml-10 animate-flip">
              <Image
                src="/images/card-1.png"
                alt="Nam & Associates"
                width={270}
                height={330}
              />
            </div>
            <div className="-ml-[6vw] animate-flip">
              <Image
                src="/images/card-2.png"
                alt="Nam & Associates"
                width={270}
                height={330}
              />
            </div>
          </div>
        </div>
      </div>
      {/* why ? */}
      <div className="mx-auto w-[80vw] mt-8">
        <div className=" border-b-4 font-bold  text-2xl w-[4.5vw] py-2">
          Why ?
        </div>
      </div>
      <div className="mx-auto grid grid-rows-3 grid-flow-col gap-8 w-[80vw] mt-[10vh]">
        <div className="grid grid-cols-4">
          <div className="col-span-1 m-2 w-[8vw] h-[8vw] bg-[url('/images/why/nam-06.png')] bg-cover rounded-full"></div>
          <div className="col-span-3 m-2 bg-card-bg rounded-lg">
            <div className="grid grid-rows-2 px-5 py-3">
              <div className="row font-semibold text-brand-blue text-lg">
                Tailored Approach
              </div>
              <div className="row text-justify w-[26vw] text-card-grey">
                Personalized relocation solutions tailored to meet your unique
                needs and preferences.
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1 m-2 w-[8vw] h-[8vw] bg-[url('/images/why/nam-03.png')] bg-cover  rounded-full"></div>
          <div className="col-span-3 m-2 bg-card-bg rounded-lg">
            <div className="grid grid-rows-2 px-5 py-3">
              <div className="row font-semibold text-brand-blue text-lg">
                Local Expertise
              </div>
              <div className="row text-justify w-[26vw] text-card-grey">
                Deep local expertise in Dar es Salaam, offering insider insights
                and invaluable support.
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1 m-2 w-[8vw] h-[8vw] bg-[url('/images/why/nam-01.png')] bg-cover  rounded-full"></div>
          <div className="col-span-3 m-2 bg-card-bg rounded-lg">
            <div className="grid grid-rows-2 px-5 py-3">
              <div className="row font-semibold text-brand-blue text-lg">
                Comprehensiveness
              </div>
              <div className="row text-justify w-[26vw] text-card-grey">
                Comprehensive relocation services covering everything from
                airport transfers to ongoing assistance.
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1 m-2 w-[8vw] h-[8vw] bg-[url('/images/why/nam-02.png')] bg-cover rounded-full"></div>
          <div className="col-span-3 m-2 bg-card-bg rounded-lg">
            <div className="grid grid-rows-2 px-5 py-3">
              <div className="row font-semibold text-brand-blue text-lg">
                Strong Partnerships
              </div>
              <div className="row text-justify w-[26vw] text-card-grey">
                Strong partnerships with key stakeholders in Dar es Salaam to
                provide additional resources and support networks.
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1 m-2 w-[8vw] h-[8vw] bg-[url('/images/why/nam-04.png')] bg-cover rounded-full"></div>
          <div className="col-span-3 m-2 bg-card-bg rounded-lg">
            <div className="grid grid-rows-2 px-5 py-3">
              <div className="row font-semibold text-brand-blue text-lg">
                Client Centric Approach
              </div>
              <div className="row text-justify w-[26vw] text-card-grey">
                Exceeding your expectations with round-the-clock assistance and
                personalized recommendations.
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1 m-2 w-[8vw] h-[8vw] bg-[url('/images/why/nam-05.png')] bg-cover rounded-full"></div>
          <div className="col-span-3 m-2 bg-card-bg rounded-lg">
            <div className="grid grid-rows-2 px-5 py-3">
              <div className="row font-semibold text-brand-blue text-lg">
                Innovative Solutions
              </div>
              <div className="row text-justify w-[26vw] text-card-grey">
                Streamlining the relocation process and enhance efficiency,
                ensuring you benefit from the latest tools and resources.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* founding partner */}
      <div className="mx-auto w-[80vw] mt-[10vh]">
        <div className=" mx-auto border-b-4 font-bold  text-2xl w-[20vw] py-2">
          Founding & Managing Partner
        </div>
      </div>
      <div className="mx-auto grid grid-cols-2 gap-4 w-[80vw] mt-[13vh]">
        <div className="col-span-1 ">
          <h3 className="text-5xl text-off-white">
            {" "}
            <span className={`${borel.className}  bg-brand-blue antialiased`}>
              Nicole Aishi Mbowe
            </span>{" "}
          </h3>
          <p className="text-justify text-off-white text-lg mt-4">
            Nicole&apos;s passion for helping individuals and families settle into
            Dar es Salaam has transformed into the leading destination service
            provider in the country. Her service covers all aspects of
            relocation, from ticketing and visa processing to airport transfers,
            guided tours, and departure assistance, ensuring clients experience
            comfort and convenience.
          </p>
          <p className="text-justify text-off-white text-lg mt-5">
            Nicole&apos;s impressive career includes roles at NAM & Associates,
            Bowmans, PwC, and more, honing her legal and business expertise.
            With a Postgraduate Diploma in Legal Practice and a First Class
            Honours LLB from the University of Leeds, she is a trusted leader in
            the relocation industry. She is also a member of prestigious
            organizations like the Tanganyika Law Society and the Tanzania Women
            Lawyers Association.
          </p>
          <p className="text-justify text-off-white text-lg mt-5">
            If you’re planning a move to Dar es Salaam, let Nicole&apos;s expertise
            make your transition seamless and stress-free. Contact us today to
            learn how we can assist you in every step of your journey, ensuring
            a comfortable and convenient stay. Don&apos;t let the challenges of
            relocation hinder your new beginnings—reach out to the leading
            destination service provider in the country and experience peace of
            mind.
          </p>
          <div className=" flex  text-center mt-[4vh] w-[20vw] rounded-full border border-brand-copper text-brand-copper justify-center items-center cursor-pointer hover:bg-brand-copper hover:text-brand-blue transition-all duration-300">
            <div className="flex-auto py-2 font-bold">Talk To Nicole </div>
            <div className="flex-auto animate-slidy py-2">
              <i className="bi bi-arrow-right-circle  font-bold text-lg "></i>
            </div>
          </div>
        </div>
        <div className="col-span-1  relative">
          <Image
            src="/images/nicole-prof-bio.png"
            className="rounded absolute right-0"
            alt="Nam & Associates"
            width={570}
            height={630}
          />
        </div>
      </div>
      {/* cta */}
      <div className="mx-auto w-[80vw] mt-[10vh]">
        <div className=" mx-auto border-b-4 font-bold  text-2xl w-[17vw] py-2">
          Challenge Us To Help You
        </div>
      </div>
      <div className="w-[80vw] mx-auto mb-[10vh] h-[65vh]">
        <div className="mx-auto relative w-[80vw]">
          <div className="absolute inset-0  h-[62vh] mx-auto mt-[6vh] rounded-lg bg-[url('/images/bg.png')]"></div>
          <div className="absolute inset-0 mx-auto mt-[6vh] rounded-lg bg-white h-[62vh] w-[80vw]  bg-opacity-10 backdrop-blur-md  border-white/20 p-8  shadow-lg"></div>
          <div className="absolute inset-0 mx-auto mt-[10vh] rounded-lg  h-[62vh] w-[65vw] grid grid-cols-2 gap-4">
            <ContactCard />
            <div className="cols-1 bg-card-bg rounded-lg h-[53vh] ">
              <div className="grid grid-rows ">
                <div className="row text-brand-blue font-bold text-2xl text-center mt-4">
                  Contact Information
                </div>
                <div className="row text-brand-blue font-normal text-lg text-center mt-4">
                  Let us help you settle and enjoy <br /> Dar es Salaam with
                  ease.
                </div>
                <div className="row text-brand-blue font-medium text-xl text-center mt-[5vh]">
                  {" "}
                  <i className="bi bi-envelope"></i> Email Us
                </div>
                <div className="row text-brand-blue font-normal text-lg text-center mt-2">
                  info@namassociates.co.tz
                </div>
                <div className="row text-brand-blue font-medium text-xl text-center mt-5">
                  {" "}
                  <i className="bi bi-telephone-inbound"></i> Call Us
                </div>
                <div className="row text-brand-blue font-normal text-lg text-center mt-2">
                  info@namassociates.co.tz
                </div>
                <div className="row text-brand-blue font-medium text-xl text-center mt-5">
                  {" "}
                  <i className="bi bi-alarm"></i> Working Hours
                </div>
                <div className="row text-brand-blue font-normal text-lg text-center mt-2">
                  Monday - Friday ( 08:30 am - 05:00 pm ){" "}
                </div>
                <div className="row text-brand-blue font-normal text-lg text-center mt-2">
                  Saturday ( 08:30 am - 02:00 pm )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* locate us */}
      <div className="mx-auto w-[80vw]  ">
        <div className=" mx-auto border-b-4 font-bold  text-2xl w-[7vw] py-2">
          Locate Us
        </div>
      </div>
      <div className="mx-auto w-[80vw] h-[50vh] mt-[5vh]">
        <GoogleMapEmbed />
      </div>
      <Footer />
    </div>
  );
}
