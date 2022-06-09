import { DocumentScannerRounded } from "@mui/icons-material";
import React from "react";

const data = [
  {
    id: 1,
    title: "Refreshing Design",
    description:
      "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    icon: (
      <DocumentScannerRounded color="secondary" sx={{ fontSize: "4rem" }} />
    ),
  },
  {
    id: 2,
    title: "Based on Tailwind CSS",
    description:
      "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    icon: (
      <DocumentScannerRounded color="secondary" sx={{ fontSize: "4rem" }} />
    ),
  },
  {
    id: 3,
    title: "100+ Components",
    description:
      "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    icon: (
      <DocumentScannerRounded color="secondary" sx={{ fontSize: "4rem" }} />
    ),
  },
  {
    id: 4,
    title: "Speed Optimized",
    description:
      "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    icon: (
      <DocumentScannerRounded color="secondary" sx={{ fontSize: "4rem" }} />
    ),
  },
  {
    id: 5,
    title: "Fully Customizable",
    description:
      "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    icon: (
      <DocumentScannerRounded color="secondary" sx={{ fontSize: "4rem" }} />
    ),
  },
  {
    id: 6,
    title: "Regular Updates",
    description:
      "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    icon: (
      <DocumentScannerRounded color="secondary" sx={{ fontSize: "4rem" }} />
    ),
  },
];

function ServiceSection() {
  return (
    <section
    id="service-section"
      className="relative pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] bg-slate-100"
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 1.657"
        className="absolute top-0"
      >
        <path d="M0 0C1 2 3 2 8 1 16-1 20 3 26 0" fill="#081730" />
      </svg>
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div
              className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]"
              data-aos="zoom-in"
            >
              <span className="font-semibold text-lg text-black mb-2 block">
                Our Services
              </span>
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-black
                  mb-4
                  underLine2
                  "
              >
                What We Offer
              </h2>
              <p className="text-black">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mx-4">
          {data.map((item) => {
            const { id } = item;
            return (
              <div
                key={item.title}
                className="w-full md:w-1/2 lg:w-1/3 px-4 cursor-pointer"
                data-aos={
                  id % 3 === 1
                    ? "fade-up-right"
                    : id % 3 === 2
                    ? "flip-up"
                    : "fade-up-left"
                }
              >
                <div
                  className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
                >
                  <div
                    className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-xl text-black mb-3">
                    {item.title}
                  </h4>
                  <p className="text-black">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
