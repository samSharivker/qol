"use client";

import { Card } from "@/components/ui/apple-cards-carousel";

export default function Resources() {
  const data = [
    {
      src: "/img/cards/plate.png",
      title: "Plate Planner",
      category: "Source: NYCDOH",
      content:
        "https://www.nyc.gov/assets/doh/downloads/pdf/csi/obesity-plate-planner-13.pdf",
    },
    {
      src: "/img/cards/path.png",
      title: "Diabetes Roadmap",
      category: "Source: NYCDOH",
      content:
        "https://www.nyc.gov/assets/doh/downloads/pdf/csi/diabetes-infographic.pdf",
    },
    {
      src: "/img/cards/info.png",
      title: "Diabetic Information",
      category: "Source: NYCDOH",
      content:
        "https://www.nyc.gov/site/doh/health/health-topics/diabetes.page",
    },
    {
      src: "/img/cards/ada.png",
      title: "Diabetic Prevention",
      category: "Source: American Diabetes Association",
      content: "https://diabetes.org/about-diabetes/diabetes-prevention",
    },
    {
      src: "/img/cards/who.png",
      title: "Diabetic Facts",
      category: "Source: World Health Organization",
      content: "https://www.who.int/news-room/fact-sheets/detail/diabetes",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <div className="grid lg:grid-cols-2 grids-cols-1 lg:gap-20 gap-5">
        {data.map((card, i) => (
          <div key={i} className="p-5 rounded-lg bg-slate-100">
            <Card card={card} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
