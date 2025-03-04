"use client";

import Image from "next/image";
import hbg from "/public/img/d-level.png";

export default function Home() {
  //credit https://www.shutterstock.com/g/Wanchalerm+sala

  //credit https://letsmoderate.com/blogs/blog/what-is-prediabetes
  const content = {
    p1: "All three of us have seen firsthand how diabetes has touched the lives of our loved ones, from the daily challenges to the emotional toll it takes. These experiences have driven us to create real change and fight back against this growing epidemic. Together, we’re turning our passion into action—raising awareness, inspiring prevention, and empowering others to seize control of their health before it’s too late!",
  };

  return (
    <div className="text-center flex flex-col items-center m-5">
      <div className="flex flex-row gap-3 items-center justify-center p-10 max-w-7xl bg-slate-100 rounded-lg">
        <p className="text-xl leading-relaxed shadow-lg p-5">{content.p1}</p>
        <div>
          <Image
            className="h-auto max-w-2xl rounded-lg"
            src={hbg}
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
}
