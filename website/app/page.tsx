"use client";

export default function Home() {
  // Credit sources
  // https://www.shutterstock.com/g/Wanchalerm+sala
  // https://letsmoderate.com/blogs/blog/what-is-prediabetes
  // https://www.youtube.com/watch?v=SKH9V0mM6ao

  const content = {
    h1: "Life rarely offers second chances, but pre-diabetes does. Don’t wait—take control of your health today!",
    p1: "All three of us have seen firsthand how diabetes has touched the lives of our loved ones, from the daily challenges to the emotional toll it takes. These experiences have driven us to create real change and fight back against this growing epidemic. Together, we’re turning our passion into action—raising awareness, inspiring prevention, and empowering others to seize control of their health before it’s too late!",
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center">
      <div className="absolute inset-0 bg-[url('/img/bg.png')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <section className="relative w-full h-screen flex text-center items-center justify-center z-10 max-w-7xl">
        <p className="text-black text-6xl leading-snug kalam-bold">
          {content.h1}
        </p>
      </section>
      <div className="relative p-10 bg-white bg-opacity-90 z-10 w-full">
        <div className="flex flex-col md:flex-row mb-5 max-w-7xl items-center justify-center">
          <p className="text-2xl text-justify leading-relaxed shadow-md p-5 max-w-3xl bg-slate-200">
            {content.p1}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center max-w-7xl gap-5 md:gap-16 lg:gap-32 shadow-lg bg-slate-200">
          <p className="text-5xl kalam-bold">Definitions</p>
          <ul className="list-disc max-w-3xl flex flex-col gap-5 p-10">
            <li className="text-2xl">
              Prediabetes is a condition in which blood sugar levels are higher
              than usual but at a low enough level that it can be reversed.
            </li>
            <li className="text-2xl">
              Diabetes is a condition in which blood sugar levels are too high,
              and the pancreas cannot produce enough insulin to keep blood sugar
              levels at safe levels.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
