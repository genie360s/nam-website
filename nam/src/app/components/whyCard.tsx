//components/whyCard.tsx

// components/WhyCard.tsx

interface WhyCardProps {
    readonly imageUrl: string; // URL for the background image
    readonly title: string; // Title for the card
    readonly description: string; // Description text for the card
  }
  
  export default function WhyCard({ imageUrl, title, description }: WhyCardProps) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {/* Circular Image Section */}
        <div
          className="col-span-1 m-2 w-[8vw] h-[8vw] bg-cover rounded-full hidden sm:block"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
  
        {/* Text Content Section */}
        <div className="col-span-3 m-2 bg-card-bg rounded-lg ">
          <div className="grid grid-rows-2 px-5 py-3">
            {/* Title */}
            <div className="row font-semibold text-brand-blue  px-5   ">
              {title}
            </div>
            {/* Description */}
            <div className="row text-justify w-full  text-card-grey px-5 -mt-[1vh] sm:mt-0 text-sm ">
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  }
  