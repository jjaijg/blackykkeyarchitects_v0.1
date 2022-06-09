import {useState} from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "../styles/sections/projectSection.css";
import ProjectCard from "../components/ProjectCard";
import CategoryFilter from "../components/projects/CategoryFilter";
import ProjectImageGallery from "../components/projects/ProjectImageGallery";

const SwipeCard = () => (
  <div className="flex items-center w-[300px] h-[420px]  cursor-pointer my-10 group perspective">
    <div className="relative w-full h-full duration-1000 preserver-3d group-hover:rotate-y-180">
      <div className="absolute backface-hidden border-2 w-full h-full">
        <img
          src={require("../assets/images/hero/bg4.jpg")}
          alt="Img 1"
          className="w-full h-full"
        />
      </div>
      <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-100 overflow-hidden">
        <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
          <h1 className="text-3xl font-semibold">The King's Man</h1>
          <p className="my-2">9.0 Rating</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            itaque assumenda saepe animi maxime libero non quasi, odit natus
            veritatis enim culpa nam inventore doloribus quidem temporibus amet
            velit accusamus.
          </p>
          <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

const CardSwiper = ({ handleOpenGallery }) => (
  <Swiper
    spaceBetween={50}
    slidesPerView={3}
    loop={true}
    // autoplay={{
    //   waitForTransition: true,
    //   delay: 5000,
    // }}
    freeMode={true}
    navigation={true}
    pagination={{ clickable: true }}
    modules={[Pagination, Navigation, FreeMode]}
    // onSlideChange={() => console.log("slide change")}
    // onSwiper={(swiper) => console.log(swiper)}
    className="mySwiper"
  >
    {[...Array(10).keys()].map((key) => (
      <SwiperSlide key={`slider-${key}`}>
        <ProjectCard handleOpenGallery={handleOpenGallery} />
        {/* <SwipeCard /> */}
      </SwiperSlide>
    ))}
  </Swiper>
);

function ProjectSection() {
  const [openGallery, setOpenGallery] = useState(false)

  const handleOpenGallery = () => setOpenGallery(true)
  const handleCloseGallery = () => setOpenGallery(false)

  return (
    <section
      id="project-section"
      className="relative pb-6 lg:pb-[45px] bg-slate-100"
    >
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="12%" y1="18%" x2="88%" y2="82%">
            <stop offset="5%" stopColor="#b751c1ff"></stop>
            <stop offset="95%" stopColor="#4d57ceff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 51.00996221229818,220.87117828924767 102.01992442459635,241.74235657849536 185,242 C 267.98007557540365,242.25764342150464 382.9302645139127,221.90175197526625 448,207 C 513.0697354860873,192.09824802473375 528.2590175197527,182.65063552043972 586,186 C 643.7409824802473,189.34936447956028 744.0336654070767,205.49570594297492 819,204 C 893.9663345929233,202.50429405702508 943.6063208519411,183.3665407076606 1003,192 C 1062.393679148059,200.6334592923394 1131.5410511851596,237.03813122638272 1206,243 C 1280.4589488148404,248.96186877361728 1360.2294744074202,224.48093438680866 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div
              className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]"
              data-aos="zoom-in"
            >
              <span className="font-semibold text-lg text-black mb-2 block">
                Projects
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
                What We do
              </h2>
              <p className="text-black">
                We have done multpile projects under diffrent categroies.
              </p>
            </div>
          </div>
          <CategoryFilter />
          <CardSwiper handleOpenGallery={handleOpenGallery} />
          <ProjectImageGallery
            open={openGallery}
            handleClose={handleCloseGallery}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
