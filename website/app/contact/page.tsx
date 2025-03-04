"use client";

import React, { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          message,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        alert(`Failed to send: ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="text-center flex flex-col items-center m-5">
      <div className="text-center flex lg:flex-row flex-col-reverse items-center gap-5 max-w-7xl p-10 bg-slate-100">
        <form
          onSubmit={onSubmit}
          className="shadow-md rounded-lg flex flex-col lg:items-start items-center gap-3 p-10 bg-slate-200 w-full"
        >
          <input
            className="sm:min-w-96 text-xl p-2 rounded-lg focus:outline-none focus:ring-0"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
          <input
            className="sm:min-w-96 text-xl p-2 rounded-lg focus:outline-none focus:ring-0"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
          />
          <input
            className="sm:min-w-96 text-xl p-2 rounded-lg focus:outline-none focus:ring-0"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <textarea
            className="min-w-60 rounded-lg p-2 sm:min-w-96 h-60 resize-none focus:outline-none focus:ring-0"
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          />
          <button
            className="bg-red-600 hover:scale-110 transition ease-in duration-100 transform p-3 rounded-lg text-slate-100"
            type="submit"
          >
            Submit
          </button>
        </form>
        <h1 className="sm:text-5xl text-3xl flex-wrap kalam-bold">
          If you have any comments or questions please feel free to reach out to
          us. Your voice matters!
        </h1>
      </div>
    </div>
  );
}
