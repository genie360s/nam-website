//componets/expertiseCard.tsx
import { useState } from "react";

interface ExpertiseCardProps {
  readonly imageUrl: string; // URL for the background image
  readonly buttonText: string; // Text to display in the button
  readonly modalContent: React.ReactNode; // Content for the modal
}

export default function ExpertiseCard({ imageUrl, buttonText, modalContent }: ExpertiseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Expertise Card */}
      <div
        className="col-span-1 h-48 bg-white rounded-lg border-2 shadow-lg border-brand-copper relative flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <button
          onClick={toggleModal} // Open modal on button click
          className="absolute bottom-4 rounded-full bg-brand-copper text-brand-blue h-9 flex items-center justify-center cursor-pointer font-semibold"
        >
          <span className="px-6 py-3">{buttonText}</span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="rounded-lg h-96 w-96  shadow-lg flex items-center justify-center relative bg-card-bg"
          >
            {/* Modal Content */}
            {modalContent}
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute h-6 w-6 top-4 right-4 p-1 rounded-full   font-bold text-lg flex items-center justify-center"
            >
              <span className="text-lg"><i className="font-bold bi bi-x-circle-fill text-brand-copper "></i></span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}