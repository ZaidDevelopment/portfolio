import React from "react";

// Define a TypeScript interface for form data
interface FormProps {
  actionUrl: string;
}

const ContactForm = ({ actionUrl }: FormProps) => {
  return (
    <div className="w-full bg-gradient-to-b from-black via-gray-800 to-[#191c1f]">
      <div className="mx-auto max-w-5xl px-4 sm:mt-5 sm:px-6 lg:px-8">
        <div className="flex min-h-screen w-full items-center justify-center">
          <form
            action={actionUrl}
            method="POST"
            className="flex w-full max-w-lg flex-col text-gray-800"
          >
            <div className="pb-8">
              <h1 className="inline-block border-b-4 border-pink-600 text-4xl font-bold text-gray-300">
                Contact
              </h1>
              <p className="mt-2 text-sm text-gray-300">
                Submit your query using the form below
              </p>
            </div>

            {/* Name Input */}
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              className="w-full rounded bg-[#ccd6f6] p-2 text-gray-800"
              type="text"
              name="name"
              placeholder="Name"
              required
            />

            {/* Email Input */}
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              className="my-4 w-full rounded bg-[#ccd6f6] p-2 text-gray-800"
              type="email"
              name="email"
              placeholder="Email"
              required
            />

            {/* Message Textarea */}
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              className="w-full rounded bg-[#ccd6f6] p-2 text-gray-800"
              name="message"
              rows={7}
              placeholder="Message"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="mx-auto mt-8 w-full max-w-[200px] rounded border-2 border-pink-600 px-4 py-3 text-white transition-all duration-300 hover:bg-pink-600 hover:text-white"
            >
              Let&apos;s Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return <ContactForm actionUrl="https://formspree.io/f/mleqqedd" />;
};

export default Page;
