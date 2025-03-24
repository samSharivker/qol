"use client";

export default function Home() {
  // Credit sources
  // https://www.shutterstock.com/g/Wanchalerm+sala
  // https://letsmoderate.com/blogs/blog/what-is-prediabetes
  // https://www.youtube.com/watch?v=SKH9V0mM6ao

  const content = {
    h1: "Life rarely offers second chances, but pre-diabetes does. Don’t wait—take control of your health today!",
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
    </div>
  );
}
