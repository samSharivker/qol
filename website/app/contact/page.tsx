"use client";

export default function Contact() {
  return (
    <div className="text-center flex flex-col items-center m-5">
      <div className="text-center flex flex-col items-center gap-2 max-w-5xl">
        <h1 className="text-5xl flex-wrap">
          If you have any comments or questions please feel free to reach out to
          us. Your voice matters!
        </h1>
        <form className="flex flex-col items-center gap-3 p-10 bg-slate-400">
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
            <textarea
              className="w-60 border border-black resize-none"
              required
            />
          </div>
          <button className="bg-red-600 p-3 rounded-lg" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
