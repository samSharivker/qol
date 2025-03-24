"use client";

export default function About() {
  const content = [
    [
      "Mission:",
      "Increase awareness on pre-diabetes to help keep future generations healthy",
    ],
    [
      "About Our Team:",
      "We are NYC public high school students participating in the Quality of Life Innovations proposal through the W!SE Foundation. Through research, we have seen how diabetes has become an epidemic across NYC, so we wish to spread awareness on this issue to help keep future generations healthier. This website is part of our implementation strategy and awareness campaign.",
    ],
    [
      "Definitions:",
      "Pre-diabetes is a reversible condition with fasting glucose levels between 6.1 to 6.9 mmol/L or A1C levels of 5.7% to 6.4%. It’s also a warning for insulin resistance.",
      "In New York City, 740,000 people have diabetes, 1.3 million have pre-diabetes, and 90% are unaware of their condition.",
    ],
    [
      "Risk Factors:",
      "Chronic stress, poor sleep, sleep apnea, and obesity (BMI > 25), which will increase the risk of pre-diabetes.",
    ],
    [
      "Non-profit Organizations:",
      "The American Diabetes Association (ADA) lowered the fasting glucose threshold for pre-diabetes to 5.6-6.9 mmol/L in 2010, which quickly increased the diagnose cases in the U.S. from 79 million to 84 million.",
      "American Diabetes Association (ADA) recommends using the Hemoglobin A1c, where HbA1c levels between 5.7 percent and 6.4 percent are considered indicative of prediabetes.",
    ],
    [
      "Diet choices:",
      "Diets that contains sugar and refined carbs will raise risk of pre-diabetes.",
      "Programs like CAMBA’s Brooklyn Drive Down Diabetes offer education and nutrition counseling.",
    ],
    [
      "Affected Populations:",
      "Chinese Americans in NYC have high pre-diabetes rates of 33.8%  (Wang et al., 2023)",
    ],
    [
      "Support and Legislation:",
      "NYC supports diabetes patients through school glucose testing laws and bills like the Eliminating Disparities in Diabetes Prevention, Access, and Care Act.",
      'The Family and Medical Leave Act gives employees 12 weeks of unpaid leave to take care of children with diabetes ("Federal Laws," n.d.).',
      "Nonprofits like the ADA provide resources and fundraising for diabetes research and management.",
      "ADA hosts several fundraising events, such as “Tour de Cure,” a cycling experience that provides the ADA with the finances to research and provide patients with medication.",
      "The ADA provide a network of over 565,000 volunteers who assist people with diabetes (American Diabetes Association, n.d.)",
    ],
  ];

  return (
    <div className="text-center flex flex-col items-center m-5">
      <div className="text-center flex flex-col items-center gap-7 p-10 w-full bg-slate-100">
        {content.map((a, b) => (
          <div
            key={b}
            className="flex flex-col items-center justify-center gap-3 shadow-lg p-28 bg-slate-200"
          >
            {a.map((c, d) =>
              d == 0 ? (
                <p
                  key={d}
                  className="text-5xl text-center kalam-bold underline"
                >
                  {c}
                </p>
              ) : (
                <p key={d} className="text-xl text-center">
                  - {c}
                </p>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
