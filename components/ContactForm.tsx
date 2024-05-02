"use client";
import React from "react";
import { Label } from "./form/Label";
import { Input, Textarea } from "./form/Input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";

type FormInput = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // };
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>();

  // console.log(FormData);

  async function onSubmit(formData: FormInput) {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    }).then(async (res) => {
      // server response
      const response = await res.json();
      if (response.status === 250) {
        alert("Your contact is recorded we'll get back to you!");
      } else {
        alert(`${response.msg} Please try again`);
      }
      // console.log(response);
    });

    reset();
  }
  return (
    <div className="max-w-2xl w-full mx-auto rounded-lg p-5 md:p-8 shadow-input bg-bgSecondary border border-borderColor backdrop:blur-3xl">
      <form
        className="my-8 space-y-8 bg-bgSecondary"
        onSubmit={handleSubmit(onSubmit)}
      >
        <LabelInputContainer>
          <Label htmlFor="firstname">Your Name</Label>
          <Input
            {...register("name")}
            id="firstname"
            placeholder="Tyler Durden"
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            {...register("email")}
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            {...register("message")}
            id="message"
            placeholder="Hi... Want to meet"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-bgSecondary border border-borderColor border-opacity-50 hover:border-none w-44 sm:w-56 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isSubmitting}
        >
          CONNECT &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-[3px] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-[3px] w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col w-full space-y-3", className)}>
      {children}
    </div>
  );
};
