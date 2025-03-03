"use client";

import Image from "next/image";
import fig1 from "@/public/img/figure1.png";

export default function Statistics() {
  const content: string = "Based on the figure above, most survey participants believe schools should provide stronger diabetic education. Although 2.5% of participants strongly disagree with this sentiment, it is most likely due to a lack of knowledge or awareness of prediabetes or diabetes, which also explains the 16.5% of neutral participants who don't have a strong opinion for or against increasing diabetic education in NYC public schools.";
  return (
    <div className="text-center flex flex-col items-center m-5">
      <p>Statistics</p>
      <div className="flex flex-col items-center">
        <div>
          <Image className="max-w-xl rounded-lg" src={fig1} alt="figure 1" />
          <p>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
