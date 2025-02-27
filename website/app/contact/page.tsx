"use client";

export default function Contact() {
  return (
    <div className="text-center flex flex-col items-center m-5 gap-2">
      <h1 className="text-5xl">Contact Page</h1>
      <form className="flex flex-col items-center gap-3 border border-black p-10 bg-red-400">
        <div>
          <p className="text-2xl text-left">First Name:</p>
          <input
            className="text-xl p-2 rounded-lg border border-black"
            type="text"
            placeholder="John"
            required
          />
        </div>
        <div>
          <p className="text-2xl text-left">Last Name:</p>
          <input
            className="text-xl p-2 rounded-lg border border-black"
            type="text"
            placeholder="Doe"
            required
          />
        </div>
        <div>
          <p className="text-2xl text-left">Email:</p>
          <input
            className="text-xl p-2 rounded-lg border border-black"
            type="email"
            placeholder="jdoe@test.com"
            required
          />
        </div>
        <div>
          <p className="text-2xl text-left">Message:</p>
          <textarea className="w-60 border border-black resize-none" required />
        </div>
        <button className="bg-red-600 p-3 rounded-lg" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
