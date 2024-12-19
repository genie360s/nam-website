"use client";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./components/navBar";
import GoogleMapEmbed from "./components/googleMapEmbed";
import { Footer } from "./components/footer";
import { Borel } from "next/font/google";
import ContactCard from "./components/contactCard";
import WhyCard from "./components/whyCard";
import SearchBar from "./components/searchBar";

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
        <div className=" flex-auto order-last hidden md:block">
          <div className="grid justify-items-end mt-3 mb-3">
          <SearchBar/>
          </div>
        </div>
      </div>
      <div className="w-[80vw] md:hidden grid justify-items-end mx-auto mr-2 ">
      <SearchBar/>
      </div>
      <NavBar />
      <div className=" mx-auto mt-10 mb-5 w-[80vw]  gaps-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-flow-col grid-rows-1">
        
      
        <div className="w-full relative sm:h-[35vw] h-[60vw] mt-[10vw] sm:mt-0 hidden lg:block">
          <Image
            src="/images/left-dar-img.png"
            alt="Nam & Associates"
            className="absolute  right-0 sm:h-[35vw] h-[60vw] w-full "
            width={370}
            height={430}
          />
        </div>
        <div className=" flex items-center  w-full   px-3">
          <div className=" mb-8  mx-auto">
            <div className="mx-auto bg-brand-copper w-full h-[1vh] lg:h-[0.7vh]"></div>
            <div className="mx-auto font-semibold md:text-lg text-2xl lg:text-lg  xl:text-xl w-full text-center mt-4 ">
              Relocate easily into the city of Dar es Salaam.
            </div>
            <div className="mx-auto font-normal text-base xl:text-lg w-full text-center mt-4 ">
              <p className="searchable">Discover Dar es Salaam with Confidence: <br /> A 360° relocation
              experience.</p>
              
            </div>
            <div className="mx-auto  flex  text-center mt-5 w-full rounded-full bg-brand-copper  text-brand-blue">
              <div className="flex-auto py-2 lg:text-base">
                <p className="searchable">Consult Us Today</p>
                </div>
              <div className="flex-auto animate-slidy py-2">
                <i className="bi bi-arrow-right-circle  text-lg lg:-ml-[1.5vw] "></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative sm:h-[35vw] h-[60vw] mt-[10vw] sm:mt-0 ">
          <Image
            src="/images/right-dar-img.png"
            alt="Nam & Associates"
            className="absolute  right-0 sm:h-[35vw] h-[60vw] w-full "
            width={370}
            height={430}
          />
        </div>
      </div>
      {/* foreword */}
      <div className="mx-auto w-[80vw] mt-8">
        <div className=" border-b-4 font-bold  text-2xl w-[4.5em] py-2">
          Foreword
        </div>
        <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:grid-flow-col w-[80vw] md:gap-[2vw]">
          <div className="  w-full md:w-[40vw] mt-10 ">
            <p className="font-normal text-justify text-small sm:text-lg searchable">
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
          <div className="grid place-items-center mt-10 sm:mt-0">
            <div className=" grid grid-cols-3">
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
      </div>
      {/* why ? */}
      <div className="mx-auto w-[80vw] mt-8">
        <div className=" border-b-4 font-bold  text-2xl w-[3em] py-2 searchable">
          Why ?
        </div>
      </div>
      <div className="mx-auto gap-8 w-[80vw] mt-[10vh]">
      <div className="grid gap-4 md:grid-rows-3 md:grid-flow-col">
      <WhyCard
        imageUrl="/images/why/nam-06.png"
        title="Tailored Approach"
        description="Personalized relocation solutions tailored to meet your unique needs and preferences all the time."
      />
      <WhyCard
        imageUrl="/images/why/nam-03.png"
        title="Local Expertise"
        description="Deep local expertise in Dar es Salaam, offering insider insights and invaluable support."
      />
      <WhyCard
        imageUrl="/images/why/nam-01.png"
        title="Comprehensiveness"
        description="Comprehensive relocation services covering everything from airport transfers to ongoing assistance."
      />
      <WhyCard
        imageUrl="/images/why/nam-02.png"
        title="Strong Partnerships"
        description="With key stakeholders in Dar es Salaam to provide additional resources and support networks."
      />
      <WhyCard
        imageUrl="/images/why/nam-04.png"
        title="Client Centric Approach"
        description="Exceeding your expectations with round-the-clock assistance and personalized recommendations."
      />
      <WhyCard
        imageUrl="/images/why/nam-05.png"
        title="Innovative Solutions"
        description="Streamlining the relocation process and enhance efficiency, ensuring you comfort and satisfaction."
      />
    </div>
      </div>
      {/* founding partner */}
      <div className="mx-auto w-[80vw] mt-[10vh]">
        <div className=" mx-auto border-b-4 font-bold  text-2xl w-[14em] py-2">
          Founding & Managing Partner
        </div>
      </div>
      <div className="mx-auto grid md:grid-cols-2 gap-4 w-[80vw] mt-[8vh]">
      <div className="col-span-1  relative md:hidden ">
          <Image
            src="/images/nicole-prof-bio.png"
            className="rounded-lg  right-0 top-0 bottom-0"
            alt="Nam & Associates"
            width={570}
            height={630}
          />
        </div>
        <div className="col-span-1 ">
          <h3 className="sm:text-5xl text-3xl text-off-white">
            {" "}
            <span className={`${borel.className}  bg-brand-blue antialiased`}>
              Nicole Aishi Mbowe
            </span>{" "}
          </h3>
          <p className="text-justify text-off-white text-base mt-4 lg:text-lg searchable">
            Nicole&apos;s passion for helping individuals and families settle into
            Dar es Salaam has transformed into the leading destination service
            provider in the country. Her service covers all aspects of
            relocation, from ticketing and visa processing to airport transfers,
            guided tours, and departure assistance, ensuring clients experience
            comfort and convenience.
          </p>
          <p className="text-justify text-off-white text-base mt-5 lg:text-lg searchable ">
            Nicole&apos;s impressive career includes roles at NAM & Associates,
            Bowmans, PwC, and more, honing her legal and business expertise.
            With a Postgraduate Diploma in Legal Practice and a First Class
            Honours LLB from the University of Leeds, she is a trusted leader in
            the relocation industry. She is also a member of prestigious
            organizations like the Tanganyika Law Society and the Tanzania Women
            Lawyers Association.
          </p>
          <p className="text-justify text-off-white text-base mt-5 lg:text-lg searchable ">
            If you’re planning a move to Dar es Salaam, let Nicole&apos;s expertise
            make your transition seamless and stress-free. Contact us today to
            learn how we can assist you in every step of your journey, ensuring
            a comfortable and convenient stay. Don&apos;t let the challenges of
            relocation hinder your new beginnings—reach out to the leading
            destination service provider in the country and experience peace of
            mind.
          </p>
          {/* link */}
          <Link href="/#contact">
          <div className=" flex  text-center mt-[4em] w-[20em] rounded-full border border-brand-copper text-brand-copper justify-center items-center cursor-pointer hover:bg-brand-copper hover:text-brand-blue transition-all duration-300">
            <div className="flex-auto py-2 font-bold">Talk To Nicole </div>
            <div className="flex-auto animate-slidy py-2">
              <i className="bi bi-arrow-right-circle  font-bold text-lg "></i>
            </div>
          </div>
          </Link>
        
        </div>
        <div className="col-span-1 relative hidden md:block">
        <Image
            src="/images/nicole-prof-bio.png"
            className="rounded-lg  absolute right-0 top-0    "
            alt="Nam & Associates"
            width={570}
            height={630}
          />
        </div>
          
        
        
      </div>
      {/* cta */}
      <div className="mx-auto w-[80vw] mt-[10vh]">
        <div className=" mx-auto border-b-4 font-bold  text-2xl w-[12em] py-2" id="contact">
          Challenge Us To Help You
        </div>
      </div>
      <div className="w-[80vw] mx-auto mb-[10vh] md:h-[65vh] h-[280vw]">
        <div className="mx-auto relative w-[80vw]">
          <div className="absolute inset-0  h-[62vh] mx-auto mt-[6vh] rounded-lg bg-[url('/images/bg.png')]"></div>
          <div className="absolute inset-0 mx-auto mt-[6vh] rounded-lg bg-white md:h-[62vh] h-[280vw] w-[80vw]  bg-opacity-10 backdrop-blur-md  border-white/20 p-8  shadow-lg"></div>
          <div className="absolute inset-0 mx-auto mt-[10vh] rounded-lg  md:h-[62vh] h-[280vw] w-[65vw] grid md:grid-cols-2 md:gap-4">
            <ContactCard />
            <div className="cols-1 bg-card-bg rounded-lg h-[53vh] grid place-items-center">
              <div className="grid grid-rows ">
                <div className="row text-brand-blue font-bold md:text-xl text-xl text-center mt-4" >
                  Contact Information
                </div>
                <div className="row text-brand-blue font-normal md:text-base text-center mt-4">
                  Let us help you settle and enjoy <br /> Dar es Salaam with
                  ease.
                </div>
                <div className="row text-brand-blue font-medium md:text-lg text-lg text-center mt-[5vh]">
                  {" "}
                  <i className="bi bi-envelope"></i> Email Us
                </div>
                <div className="row text-brand-blue font-normal md:text-base text-center mt-2">
                  info@namassociates.co.tz
                </div>
                <div className="row text-brand-blue font-medium md:text-lg text-lg text-center mt-5">
                  {" "}
                  <i className="bi bi-telephone-inbound"></i> Call Us
                </div>
                <div className="row text-brand-blue font-normal md:text-base text-center mt-2">
                +255 753 678 768
                </div>
                <div className="row text-brand-blue font-medium  text-lg text-center mt-5">
                  {" "}
                  <i className="bi bi-alarm"></i> Working Hours
                </div>
                <div className="row text-brand-blue font-normal md:text-base text-center mt-2">
                  Monday - Friday ( 08:30 am - 05:00 pm ){" "}
                </div>
                <div className="row text-brand-blue font-normal md:text-base text-center mt-2">
                  Saturday ( 08:30 am - 02:00 pm )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* locate us */}
      <div className="mx-auto w-[80vw]  ">
        <div className=" mx-auto border-b-4 font-bold  text-2xl w-[5em] py-2">
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
