//components/contactCard.tsx

import { useState } from "react";

export default function ContactCard() {
  interface FormData {
    fullName: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response: Response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        // Reset the form
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cols-1">
        <div className="grid grid-rows">
          <div className="row text-brand-blue font-medium">Full name</div>
          <div className="row text-brand-blue">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="focus:outline-none border border-brand-blue w-[30vw] bg-transparent p-2 rounded-lg mt-4"
              required
            />
          </div>
        </div>
        <div className="grid grid-rows mt-[4vh]">
          <div className="row text-brand-blue font-medium">Email</div>
          <div className="row text-brand-blue">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="focus:outline-none border border-brand-blue w-[30vw] bg-transparent p-2 rounded-lg mt-4"
              required
            />
          </div>
        </div>
        <div className="grid grid-rows mt-[4vh]">
          <div className="row text-brand-blue font-medium">Message</div>
          <div className="row text-brand-blue">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="focus:outline-none border border-brand-blue w-[30vw] h-32 bg-transparent p-2 rounded-lg mt-4"
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="flex text-center mt-[4vh] w-[30vw] rounded-full border border-brand-blue text-brand-blue hover:bg-brand-copper hover:text-brand-blue hover:shadow-lg"
        >
          <div className="flex-auto py-2 font-bold">I Challenge You</div>
          <div className="flex-auto animate-slidy py-2">
            <i className="bi bi-arrow-right-circle text-lg"></i>
          </div>
        </button>
      </div>
    </form>
  );
}
