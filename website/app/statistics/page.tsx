"use client";

import Image from "next/image";
import fig1 from "@/public/img/figure1.png";

export default function Statistics() {
  const content = {
    p1: "About 98 million Americans have prediabetes, but more than 8 in 10 adults don't know they have it. (cdc.gov)",
    p2: "The fact that 98 million Americans have prediabetes, with over 80% unaware, highlights a critical public health crisis. This lack of awareness underscores the urgent need for increased screening, education, and preventive measures to hinder the rising tide of diabetes.",
    p3: "In 2021, 38.4 million Americans, or 11.6% of the population, had diabetes. 2 million Americans have type 1 diabetes, including about 304,000 children and adolescents. (American Diabetes Association)",
    p4: "The fact that 38.4 million Americans had diabetes in 2021, representing 11.6% of the population, underscores the widespread impact of this chronic condition. Additionally, the inclusion of 304,000 children and adolescents among the 2 million with type 1 diabetes highlights the urgent need for research, support, and resources to address this lifelong disease across all age groups.",
    p5: "53 percent of respondents have never been tested or recall being tested for diabetes. (our survey)",
    p6: "This lack of screening underscores the importance of increasing public awareness and accessibility to routine testing to identify and manage diabetes early.",
    p7: "Nearly half of respondents, at 45.5%, are unfamiliar with the meaning of hemoglobin A1c levels (our survey)",
    p8: "The statistic that 45.5% of respondents cannot define hemoglobin A1c levels reveals a concerning gap in public understanding of a crucial diabetes management metric. This underscores the urgent need for improved health education to ensure individuals can better monitor and address their risk for diabetes and related conditions.",
    p9: '81 percent agree with the statement, "schools should provide more education on pre-diabetes and diabetes"? (our survey)',
    p10: "The overwhelming 81% agreement that schools should provide more education on prediabetes and diabetes reflects a strong public recognition of the need for early health literacy. This consensus highlights an opportunity to integrate diabetes awareness into school curriculam, potentially reducing future health risks through informed prevention and management.",
    p11: "200 Surveys Distributed Throughout Brooklyn High Schools",
    p12: "With BayRidge and Dyker Heights having a population of about 125,000 residents, this gives us a margin of error of 7%.",
  };

  return (
    <div className="w-full bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {[
          [content.p11, content.p12],
          [content.p1, content.p2],
          [content.p3, content.p4],
          [content.p5, content.p6],
          [content.p7, content.p8],
          [content.p9, content.p10],
        ].map(([title, text], i) => (
          <div
            key={i}
            className="bg-white p-6 md:p-10 rounded-xl shadow-md space-y-4"
          >
            <p className="text-xl font-semibold italic text-red-700">{title}</p>
            <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
          </div>
        ))}

        <div className="rounded-xl overflow-hidden shadow-md bg-white p-4">
          <Image
            src={fig1}
            alt="Figure showing diabetes data"
            className="w-full h-auto object-contain rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
