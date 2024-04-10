import React from "react";

const EmailInput = () => {
  return (
    <form className="w-full flex flex-col md:flex-row gap-2">
      <input
        type="text"
        placeholder="Email"
        className=" w-full p-2 px-4 text-white border border-borderColor bg-transparent rounded-full outline-none"
      />
      <button className="bg-primary text-black p-2 px-3 rounded-full text-sm font-semibold">
        ATTRACT
      </button>
    </form>
  );
};

export default EmailInput;
