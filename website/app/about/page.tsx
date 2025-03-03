"use client";

export default function About() {
  const content = {
    mission:
      "Increase awareness on prediabeties to help keep future generations healty.",
    about:
      "We are NYC public high school students participating in the Quality of Life Innovations proposal through the W!SE Foundation. Through research, we have seen how diabetes has become an epidemic across NYC, so we wish to spread awareness on this issue to help keep future generations healthier. This website is part of our implementation strategy and awareness campaign.",
    p1: "Researchers, including Postdoctoral Fellow Yi Yu at the Wuhan University of Science and Technology and psychiatrist Weitao Wan in the Department of Psychiatry at Tianyou Hospital, have defined prediabetes as a reversible condition marked by impaired fasting glucose levels between 6.1 to 6.9 mmol/L. These levels are abnormal but not high enough to be diagnosed as type two diabetes (which requires levels of 7.0 mmol/L or higher), providing a much-needed warning of an insulin-resistant body struggling to regulate glucose (Yu & Wan, 2024). To put this in perspective, an A1C level between 5.7% and 6.4% would qualify one’s blood sugar as prediabetic, while an A1C level of 6.5% or higher would be an indicative of diabetes.",
    p2: "Despite this warning, 740,000 New Yorkers have diabetes, according to the New York City Department of Health and Mental Hygiene, and an additional 1.3 million people have prediabetes—of whom nine out of ten are unaware of their condition (NYCDOH, n.d., para. 1). Justin Basile Echouffo-Tcheugui, an Associate Professor of Medicine at Johns Hopkins University, and Elizabeth Selvin, an Associate Professor in the Department of Epidemiology at the Johns Hopkins Bloomberg School of Public Health, identified that chronic stress, a lack of quality sleep, obstructive sleep apnea, and having overweight or obesity (a BMI greater than 25) are common risk factors for prediabetes. Initially, the benchmark for a prediabetes diagnosis included impaired fasting glucose levels between 6.1 to 6.9 mmol/L until the American Diabetes Association (ADA) lowered the limit to 5.6 to 6.9 mmol/L in 2010 (Echouffo-Tcheugui & Selvin, 2021).",
    p3: "Today, the American Diabetes Association (ADA) recommends using the Hemoglobin A1c, where HbA1c levels between 5.7 percent and 6.4 percent are considered indicative of prediabetes. The adoption of this new criteria allowed for a more comprehensive understanding of an individual's blood sugar levels, ensuring that those at risk are informed. Consequently, the number of diagnosed prediabetes populations within the United States drastically increased from 79 million to approximately 84 million, according to the American Diabetes Association. This increase allows more individuals to benefit from preventive interventions, highlighting the importance of understanding prediabetes.",
    p4: 'Dr. Elizabeth Halprin, an endocrinologist and the Chief of Adult Diabetes at Boston\'s Joslin Diabetes Center, emphasized that "diets full of sugar and refined carbohydrates can significantly increase the risk of developing prediabetes and diabetes" (Halprin, 2024). A lack of access to nutritious food sometimes forces individuals to resort to cheaper, calorie-dense options such as sugary and processed foods. These types of foods lack essential nutrients such as vitamins, minerals, and fiber, leading to weakened immunity and other related health complications like anemia, which are significant contributors to the rising prevalence of prediabetes. As a result, individuals consuming these nutrient-poor foods can experience fatigue, low energy levels, and decreased productivity in their day-to-day tasks. According to Leah Stern, a Dietitian CAMBA’S Brooklyn Drive Down Diabetes Program, a six-month free program is in place to provide comprehensive diabetes prevention education, personalized nutrition counseling, and support for adopting healthier lifestyle habits (L. Stern, personal communication, November 26, 2024). Moreover, Ms. Stern suggests that everyone within the range of prediabetes should be equipped with a dietitian as doctors lack the time to provide quality recommendations on nutrition.',
    p5: "One population affected by prediabetes in Bay Ridge and Dyker Heights is Chinese Americans, who are the fastest-growing minority group (Asian Americans for Equality, Inc., 2011). Notably, 33.8 percent of Chinese Americans in New York City have prediabetes, and 25.84 percent report moderate or higher overall distress (Wang et al., 2023). Cost includes medical care, monitoring, and managing the condition, as well as regular blood tests, medications like metformin, health screenings, and exercise programs. Additionally, the same studies find high-risk levels for type 2 diabetes in 79.5 percent of non-Hispanic whites (Wang et al., 2023). However, race is not the only key factor in diabetes risk levels. Studies conducted by Paul Valensi, Professor of Nutrition at Paris-Nord University, have shown that patients with heart failure are at a higher risk level for developing diabetes (Valensi, 2024). In one of his studies, 10 percent of patients with heart failure developed diabetes compared to 5.1 percent of patients without heart failure under the same conditions.",
    p6: "In New York City, the Department of Health (NYC DOH) is responsible for supporting patients with diabetes.. Additionally, several studies and researchers have determined that developing diabetes puts patients at risk for other diseases.  In addition, under New York state law, students can test their glucose levels in school and carry their own medicine, such as insulin (NY CLS Educ § 916-b, 2015). This is crucial because it teaches students to be self reliant and prevents the need for schools to provide accommodations. This improves the quality of life for residents because it creates a more comfortable environment for students knowing they can take care of themselves and don’t need to rely on the school having necessary medical support.",
    p7: 'Several bills and laws aim to assist patients with diabetes—for instance, the Eliminating Disparities in Diabetes Prevention, Access, and Care Act. The bill would primarily assist minorities by increasing education and health resources for minority populations to reduce the risk of developing diabetes (Eliminating Disparities in Diabetes Prevention, Access, and Care Act, H.R. 3322, 2013). The bill is able to accomplish this with the use of grants establishing mentorship programs for healthcare workers that also allow them to be more involved with obesity research and nutrition. In addition, there is also The Family and Medical Leave Act. This law gives employees 12 weeks of unpaid leave to take care of children with diabetes ("Federal Laws," n.d.). This law improves the quality of life for residents by allowing parents to prioritize the care of their children which can lead to reduced medical complications and better disease management.',
    p8: "Several nonprofits and nongovernmental organizations assist people with diabetes. One such organization is the American Diabetes Association (ADA), a network of over 565,000 volunteers who assist people with diabetes (American Diabetes Association, n.d.). In addition, the ADA hosts several fundraising events, such as “Tour de Cure,” a cycling experience that provides the ADA with the finances to research and provide patients with medication. Additionally, the ADA provides content on its website that assists pre-diabetic and diabetic patients by providing health and wellness content to help patients manage their conditions, ranging from motivational fitness content to nutritional advice.",
  };

  return (
    <div className="text-center flex flex-col items-center m-5">
      <div className="text-center flex flex-col items-center gap-7 p-10 w-full bg-white/80">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-5xl kalam-bold">Mission</p>
          <p className="text-xl">{content.mission}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-5xl kalam-bold">About</p>
          <p className="text-xl">{content.about}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-5xl kalam-bold">Background</p>
          <p className="text-justify leading-7">{content.p1}</p>
          <p className="text-justify leading-7">{content.p2}</p>
          <p className="text-justify leading-7">{content.p3}</p>
          <p className="text-justify leading-7">{content.p4}</p>
          <p className="text-justify leading-7">{content.p5}</p>
          <p className="text-justify leading-7">{content.p6}</p>
          <p className="text-justify leading-7">{content.p7}</p>
          <p className="text-justify leading-7">{content.p8}</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3">
          <p className="text-2xl kalam-bold">References</p>
          <p className="text-sm text-start">
            Agrawal, N. (2024, October 15). Controlling blood sugar is crucial.
            The New York Times, D6.
            https://www.nytimes.com/2024/10/14/well/blood-sugar-levels-diabetes.html?register=google&auth=register-google
          </p>
          <p className="text-sm text-start">
            American Diabetes Association. (n.d.). Greater New York / New
            Jersey. https://diabetes.org/local/greater-nynj
          </p>
          <p className="text-sm text-start">
            Asian Americans for Equality, Inc. (2011, February). Distinct
            places, shared opportunity. NYC.gov. Retrieved November 11, 2024,
            from
            https://www.nyc.gov/html/dc/downloads/pdf/asian_americans_for_equality_report.pdf
          </p>
          <p className="text-sm text-start">
            Echouffo-Tcheugui, J. B., & Selvin, E. (2021, April 1). Prediabetes
            and what it means: The epidemiological evidence. PubMed. Retrieved
            November 11, 2024, from https://pubmed.ncbi.nlm.nih.gov/33355476/
          </p>
          <p className="text-sm text-start">
            Gabison, J. G. (2024). Is prediabetes overdiagnosed? No: A
            clinician’s perspective. Annals of Family Medicine, 22(3), 251.
            http://dx.doi.org/10.1370/afm.3101
          </p>
          <p className="text-sm text-start">
            New York City Department of Health and Mental Hygiene. (n.d.).
            Diabetes public health action kit. NYC.gov.
            https://www.nyc.gov/site/doh/providers/resources/public-health-action-kits-diabetes.page
          </p>
          <p className="text-sm text-start">
            New York City Department of Health and Mental Hygiene. (2024, April
            10). Citywide diabetes reduction plan. New York City Department of
            Health and Mental Hygiene.
            https://www.nyc.gov/assets/doh/downloads/pdf/diabetes/2024-diabetes-city-council-report.pdf
          </p>
          <p className="text-sm text-start">
            New York State Department of Health. (2024). Diabetes.
            https://www.health.ny.gov/diseases/conditions/diabetes/
          </p>
          <p className="text-sm text-start">
            Sandoval, E. (2024, January 16). Diabetes is fueling an amputation
            crisis for men in San Antonio. The New York Times [Digital Edition],
            NA.
            https://link.gale.com/apps/doc/A780534366/OVIC?u=nysl_me_76_tele&sid=bookmark-OVIC&xid=7ba0982f
          </p>
          <p className="text-sm text-start">
            Smith, E. J., Apfelbaum, L. J., Yeh, M.-C., & Horlyck-Romanovsky, M.
            F. (2023). Staff resilience and innovation essential to New York
            City diabetes prevention programs going virtual during COVID-19
            pandemic lockdowns. BMC Health Services Research, 23(1), NA.
            http://dx.doi.org/10.1186/s12913-023-10129-y
          </p>
          <p className="text-sm text-start">
            Study says U.S. VA better than managed care for diabetes treatment.
            (2004). Obesity, Fitness & Wellness Week, 341.
            https://link.gale.com/apps/doc/A121589321/AONE?u=nysl_me_76_tele&sid=bookmark-AONE&xid=55b5a821
          </p>
          <p className="text-sm text-start">
            Thorpe, L. E., Upadhyay, U. D., Chamany, S., Garg, R., Mandel-Ricci,
            J., Kellerman, S., Berger, D. K., Frieden, T. R., & Gwynn, C.
            (2009). Prevalence and control of diabetes and impaired fasting
            glucose in New York City. Diabetes Care, 32(1), 57+.
            https://link.gale.com/apps/doc/A192309259/AONE?u=nysl_me_76_tele&sid=bookmark-AONE&xid=89b4c84f
          </p>
          <p className="text-sm text-start">
            Valensi, P. (2024). Evidence of a bi-directional relationship
            between heart failure and diabetes: A strategy for the detection of
            glucose abnormalities and diabetes prevention in patients with heart
            failure. Cardiovascular Diabetology, 23(1), NA.
            http://dx.doi.org/10.1186/s12933-024-02436-3
          </p>
          <p className="text-sm text-start">
            Waltz, E. (2006). New York’s scheme to track diabetes stirs privacy
            concerns. Nature Medicine, 12(2), 155.
            http://dx.doi.org/10.1038/nm0206-155a
          </p>
          <p className="text-sm text-start">
            Yu, Y., & Wan, W. (2024). Association between prediabetes and
            depression: A meta-analysis. PLOS ONE, 19(8), e0307428.
            http://dx.doi.org/10.1371/journal.pone.0307428
          </p>
          <p className="text-sm text-start">
            Stern, L. (2024, November 26). Quality of life research questions to
            an expert [Interview]. Email.
          </p>
        </div>
      </div>
    </div>
  );
}
