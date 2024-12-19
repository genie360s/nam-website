// components/WhyCard.tsx

interface WhyCardProps {
  readonly imageUrl: string; // URL for the background image
  readonly title: string; // Title for the card
  readonly description: string; // Description text for the card
}

export default function WhyCard({ imageUrl, title, description }: WhyCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
      {/* Circular Image Section */}
      <div
        className="w-16 h-16 sm:w-[6vw] sm:h-[6vw] bg-cover rounded-full hidden sm:block"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Text Content Section */}
      <div className="col-span-3 bg-card-bg rounded-lg px-4 py-3">
        <div className="space-y-2">
          {/* Title */}
          <div className="font-semibold text-brand-blue text-lg">
            <p className="searchable">{title}</p>
          </div>
          {/* Description */}
          <div className="text-justify text-card-grey text-base">
            <p className="searchable">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}