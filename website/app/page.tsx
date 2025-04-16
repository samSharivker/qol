"use client";

import Image from "next/image";
import Test from "@/public/img/test.jpg";

export default function Home() {
  const content = {
    h1: "Life rarely offers second chances, but pre-diabetes does. Don’t wait—take control of your health today!",
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-50">
      <section className="w-full bg-white py-16 px-6 shadow-md rounded-b-3xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {content.h1}
            </h1>
          </div>
          <div className="flex-1">
            <Image
              src={Test}
              alt="Doctor consultation"
              className="w-full h-auto rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-20">
          <div>
            <h2 className="text-3xl font-semibold text-red-800 mb-4">
              What is Prediabetes?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Prediabetes is a reversible condition in which blood sugar levels
              are higher than normal but not yet in the diabetes range.
              According to recent research, it’s defined by fasting glucose
              levels between 5.6 and 6.9 mmol/L or an A1C between 5.7% and 6.4%.
              It’s a vital warning sign that your body is struggling to regulate
              glucose—without proper intervention, it can develop into type 2
              diabetes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-red-800 mb-4">
              Most People Don’t Know They Have It
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              In New York City alone, 1.3 million people are living with
              prediabetes—yet 9 out of 10 don’t know it. Prediabetes doesn’t
              always show clear symptoms, so early testing and education are
              key. Risk factors include poor sleep, high stress, lack of
              physical activity, and having a BMI over 25.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-red-800 mb-4">
              Food Insecurity & Nutrition Gaps
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Many individuals rely on affordable, highly processed foods that
              are high in sugar and refined carbs— a major driver of
              prediabetes. Lack of access to fresh, nutrient-rich options can
              lead to fatigue, weakened immunity, and chronic health problems.
              Experts say dietitians should be accessible to all at-risk
              individuals to guide better choices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-red-800 mb-4">
              Who’s Most At Risk?
            </h2>
            <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed space-y-2">
              <li>Chinese Americans in NYC – over 33.8% have prediabetes</li>
              <li>
                Individuals with heart failure – nearly 2x more likely to
                develop diabetes
              </li>
              <li>Teens lacking education on nutrition and testing habits</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-red-800 mb-4">
              Support Programs in NYC
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              From CAMBA’s “Brooklyn Drive Down Diabetes” program to support
              from the ADA and NYC’s Department of Health, resources exist—but
              awareness and access remain challenges. NYC law even allows
              students to carry their own glucose monitors and insulin in
              schools, encouraging self-reliance and preparedness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
