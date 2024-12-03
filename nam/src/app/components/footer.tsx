//components/Footer.tsx
import Image from "next/image";
const currentYear = new Date().getFullYear(); // Get the current year dynamically
export function Footer(){
    return (
        <div>
            <footer className="grid grid-cols-4 w-[80vw] mx-auto gap-4 mt-[10ch] py-[6vh] border-t-2 border-b-2 border-brand-copper ">
        <div className=" cols-1">
        <Image
            src="/images/nam-logo.png"
            alt="Nam & Associates"
            width={200}
            height={200}
          />
        </div>
        <div className="cols-1">
          <div className="grid grid-rows">
            <div className="row font-medium text-lg text-off-white">Useful Links</div>
            <div className="row text-off-white mt-4"><i className="bi bi-box-arrow-up-right"></i> Case Studies</div>
            <div className="row text-off-white mt-2"><i className="bi bi-box-arrow-up-right"></i> Areas Of Practice</div>
            <div className="row text-off-white mt-2"> <i className="bi bi-box-arrow-up-right"></i> Blogs</div>
          </div>
        </div>
        <div className="cols-1">
          <div className="grid grid-rows">
            <div className="row font-medium text-lg text-off-white">Contact Us</div>
            <div className="row text-off-white mt-4"><i className="bi bi-envelope"></i> info@namassociates.co.tz</div>
            <div className="row text-off-white mt-2"><i className="bi bi-telephone-inbound"></i> +255(0)753678678</div>
          </div>
        </div>
        <div className="cols-1">
          <div className="grid grid-rows">
            <div className="row font-medium text-lg text-off-white">Follow Us</div>
            <div className="grid row grid-cols-3 gap-2 font-medium text-lg text-off-white">
            <div className="cols-1 text-off-white mt-4"><i className="bi bi-twitter"></i> </div>
            <div className="cols-1 text-off-white mt-4"><i className="bi bi-instagram"></i> </div>
            <div className="cols-1 text-off-white mt-4"><i className="bi bi-linkedin"></i> </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="mx-auto w-[80vw]">
        <div className="text-center text-off-white text-sm mt-4">
        Copyright © {currentYear} NAM & Associates
        </div>
      </div>
        </div>

    );
}