"use client";

import Image from "next/image";
import fig1 from "@/public/img/figure1.png";

export default function Statistics() {
  return (
    <div className="text-center flex flex-col items-center m-5">
      <div className="text-center flex flex-col items-center gap-10 p-10 bg-slate-100 max-w-7xl">
        <div className="shadow-lg p-10 bg-slate-200 rounded-lg">
          <p className="italic font-bold text-lg">
            About 98 million Americans have prediabetes, but more than 8 in 10
            adults don't know they have it. (cdc.gov)
          </p>
          <p>
            The fact that 98 million Americans have prediabetes, with over 80%
            unaware, highlights a critical public health crisis. This lack of
            awareness underscores the urgent need for increased screening,
            education, and preventive measures to hinder the rising tide of
            diabetes.
          </p>
        </div>
        <div className="shadow-lg p-10 bg-slate-200 rounded-lg">
          <p className="italic font-bold text-lg">
            In 2021, 38.4 million Americans, or 11.6% of the population, had
            diabetes. 2 million Americans have type 1 diabetes, including about
            304,000 children and adolescents. (American Diabetes Association)
          </p>
          <p>
            The fact that 38.4 million Americans had diabetes in 2021,
            representing 11.6% of the population, underscores the widespread
            impact of this chronic condition. Additionally, the inclusion of
            304,000 children and adolescents among the 2 million with type 1
            diabetes highlights the urgent need for research, support, and
            resources to address this lifelong disease across all age groups.
          </p>
        </div>
        <div className="shadow-lg p-10 bg-slate-200 rounded-lg">
          <p className="italic font-bold text-lg">
            53 percent of respondents have never been tested or recall being
            tested for diabetes. (our survey)
          </p>
          <p>
            This lack of screening underscores the importance of increasing
            public awareness and accessibility to routine testing to identify
            and manage diabetes early.
          </p>
        </div>
        <div className="shadow-lg p-10 bg-slate-200 rounded-lg">
          <p className="italic font-bold text-lg">
            Nearly half of respondents, at 45.5%, are unfamiliar with the
            meaning of hemoglobin A1c levels (our survey)
          </p>
          <p>
            The statistic that 45.5% of respondents cannot define hemoglobin A1c
            levels reveals a concerning gap in public understanding of a crucial
            diabetes management metric. This underscores the urgent need for
            improved health education to ensure individuals can better monitor
            and address their risk for diabetes and related conditions.
          </p>
        </div>
        <div className="shadow-lg p-10 bg-slate-200 rounded-lg">
          <p className="italic font-bold text-lg">
            81 percent agree with the statement, "schools should provide more
            education on pre-diabetes and diabetes"? (our survey)
          </p>
          <p>
            The overwhelming 81% agreement that schools should provide more
            education on prediabetes and diabetes reflects a strong public
            recognition of the need for early health literacy. This consensus
            highlights an opportunity to integrate diabetes awareness into
            school curriculam, potentially reducing future health risks through
            informed prevention and management.
          </p>
        </div>
      </div>
    </div>
  );
}
