import ServiceCard from "../components/services/ServiceCard.jsx";
import serviceData from "../mocks/service.mock.js";

import { ReactComponent as ServiceWaveSvg } from "../assets/images/services/service_wave.svg";

function ServiceSection({ data = serviceData }) {
  return (
    <section
      id="service-section"
      className={`relative pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] bg-[#4158D0]
      from-[#4158D0] via-[#C850C0] to-[#FFCC70] bg-gradient-to-tr
      `}
    >
      <ServiceWaveSvg />
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
            return <ServiceCard key={item.key} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
