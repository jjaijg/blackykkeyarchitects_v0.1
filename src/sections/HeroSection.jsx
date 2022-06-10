import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import HeroCard from "../components/HeroCard";
import heorData from '../mocks/hero.mock.js'

function HeroSection({data=heorData}) {
  const [activeCard, setActiveCard] = useState(0);

  const handleChange = (index) => {
    setActiveCard(index);
  };

  return (
    <section id="hero-section">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        onChange={handleChange}
      >
        {data && data.map((item, idx) => (
          <div key={item.key}>
            <HeroCard {...item} idx={idx} activeIdx={activeCard} />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default HeroSection;
