"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: any) {
    event.preventDefault();

    setSending(true);

    const data: FormData = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
      window.location.href = "/thank-you";
    } else if (!response.ok) {
      setSending(false);
      alert("Something went wrong, please try again or give us a call.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-24 rounded-br-2xl rounded-tr-2xl bg-button-color-2  justify-center items-start w-[50%] border-box"
    >
      <h2 className="font-bold text-xl mb-1">Contact us</h2>
      <div className="flex flex-col w-full my-3">
        <label className="text-info-color mb-1" htmlFor="name">
          Name
        </label>
        <input
          placeholder="John Doe"
          minLength={1}
          maxLength={50}
          autoComplete="off"
          className="p-1 bg-button-color-2 border border-[rgba(130,129,187,0.4)]"
          type="text"
          id="name"
          required
        />
      </div>
      <div className="flex flex-col w-full my-3">
        <label className="text-info-color mb-1" htmlFor="phone">
          Phone
        </label>
        <input
          placeholder="1234567890"
          minLength={1}
          maxLength={50}
          autoComplete="off"
          className="p-1 bg-button-color-2 border border-[rgba(130,129,187,0.4)]"
          type="tel"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          id="phone"
          required
        />
      </div>
      <div className="flex flex-col w-full my-3">
        <label className="text-info-color mb-1" htmlFor="email">
          email
        </label>
        <input
          placeholder="johndoe@email.com"
          maxLength={50}
          minLength={5}
          autoComplete="off"
          className="p-1 bg-button-color-2 border border-[rgba(130,129,187,0.4)]"
          type="email"
          id="email"
          required
        />
      </div>
      <div className="flex flex-col w-full my-3">
        <label className="text-info-color mb-1" htmlFor="message">
          message
        </label>
        <textarea
          placeholder="How can we help?"
          className="resize-none p-1 bg-button-color-2 border border-[rgba(130,129,187,0.4)] h-28"
          name="message"
          id="message"
          required
        ></textarea>
      </div>
      <button
        className={`mt-3 bg-button-color-3 rounded-md w-full h-[40px]  hover:bg-button-color-1 transition duration-500 ease-in-out ${
          sending ? "text-gray-300" : ""
        }`}
        type="submit"
      >
        {sending ? "sending..." : "send message"}
      </button>
    </form>
  );
}
