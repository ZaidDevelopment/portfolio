import React from "react";

const Page = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-[#000] via-gray-800 to-[#191c1f] px-4">
      <form
        action="https://formspree.io/f/mleqqedd"
        method="POST"
        className="flex w-full max-w-[600px] flex-col text-gray-800"
      >
        <div className="pb-8">
          <p className="inline border-b-4 border-pink-600 text-4xl font-bold text-gray-300">
            Contact
          </p>
          <p className="py-4 text-sm text-gray-300">
            Submit your query using the form below
          </p>
        </div>
        <label>
          <input
            className="w-full rounded bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
        </label>
        <label>
          <input
            className="my-4 w-full rounded bg-[#ccd6f6] p-2"
            type="email"
            placeholder="Email"
            name="email"
          />
        </label>
        <label>
          <textarea
            className="w-full rounded bg-[#ccd6f6] p-2"
            name="message"
            rows={7}
            placeholder="Message"
          ></textarea>
        </label>
        <button
          type="submit"
          className="mx-auto my-8 rounded border-2 px-4 py-3 text-white hover:border-pink-600 hover:bg-pink-600"
        >
          Let&apos;s Collaborate
        </button>
      </form>
    </div>
  );
};

export default Page;
