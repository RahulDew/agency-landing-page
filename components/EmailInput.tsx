"use client";
import React from "react";
import { useForm } from "react-hook-form";

type FormInput = {
  email: string;
};

const EmailInput = ({ isButton = true }: { isButton: Boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>();

  async function onSubmit(formData: FormInput) {
    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        // name: formData.name,
        email: formData.email,
        // message: formData.message,
      }),
    }).then(async (res) => {
      // Toast notification
      let response = await res.json();
      console.log(response);

      console.log("Your email message has been sent successfully");
    });

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col md:flex-row gap-2"
    >
      <input
        type="email"
        placeholder="Email"
        required
        {...register("email")}
        className="w-full p-2 px-4 text-white border border-borderColor focus:border-primary bg-transparent rounded-full outline-none"
      />
      {isButton && (
        <button
          disabled={isSubmitting}
          className="bg-primary text-black p-2 px-3 rounded-full text-sm font-semibold"
        >
          ATTRACT
        </button>
      )}
    </form>
  );
};

export default EmailInput;
