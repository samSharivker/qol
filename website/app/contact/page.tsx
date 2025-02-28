"use client";

export default function Contact() {
  return (
    <div className="text-center flex flex-col items-center m-5">
      <div className="text-center flex lg:flex-row flex-col-reverse items-center gap-5 max-w-7xl p-10 bg-slate-100">
        <form className="shadow-md rounded-lg flex flex-col lg:items-start items-center gap-3 p-10 bg-slate-200 w-full">
          <input
            className="min-w-96 text-xl p-2 rounded-lg focus:outline-none focus:ring-0"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="min-w-96 text-xl p-2 rounded-lg focus:outline-none focus:ring-0"
            type="text"
            placeholder="Last Name"
            required
          />
          <input
            className="min-w-96  text-xl p-2 rounded-lg focus:outline-none focus:ring-0"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="rounded-lg p-2 min-w-96 h-60 resize-none focus:outline-none focus:ring-0"
            placeholder="Message"
            required
          />
          <button
            className="bg-red-600 hover:scale-110 transition ease-in duration-100 transform p-3 rounded-lg text-slate-100"
            type="submit"
          >
            Submit
          </button>
        </form>
        <h1 className="text-5xl flex-wrap kalam-bold">
          If you have any comments or questions please feel free to reach out to
          us. Your voice matters!
        </h1>
      </div>
    </div>
  );
}
