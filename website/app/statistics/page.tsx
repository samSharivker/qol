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
  };

  return (
    <div className="text-center flex flex-col items-center m-5">
      <div className="text-center flex flex-col items-center gap-10 p-10 bg-slate-100 max-w-7xl">
        <div className="shadow-lg p-10 bg-slate-200 rounded-lg">
          <p className="italic font-bold text-lg">{content.p1}</p>
          <p>{content.p2}</p>
        </div>
        <div className="shadow-lg p-10 bg-slate-200 rounded-lg">
          <p className="italic font-bold text-lg">{content.p3}</p>
          <p>{content.p4}</p>
        </div>
        <div className="shadow-lg p-10 bg-slate-200 rounded-lg">
          <p className="italic font-bold text-lg">{content.p5}</p>
          <p>{content.p6}</p>
        </div>
        <div className="shadow-lg p-10 bg-slate-200 rounded-lg">
          <p className="italic font-bold text-lg">{content.p7}</p>
          <p>{content.p8}</p>
        </div>
        <div className="shadow-lg p-10 bg-slate-200 rounded-lg">
          <p className="italic font-bold text-lg">{content.p9}</p>
          <p>{content.p10}</p>
        </div>
      </div>
    </div>
  );
}
