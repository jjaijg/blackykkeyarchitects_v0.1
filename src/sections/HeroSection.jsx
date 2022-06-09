import React, { useState, useEffect } from "react";
// import AOS from "aos";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Hero from "../components/Hero";
import HeroCard from "../components/HeroCard";
import HomeSection from "./HomeSection";

function HeroSection() {
  const [activeCard, setActiveCard] = useState(0);

  // useEffect(() => {
  //   console.log("AOS inited");
  //   AOS.init();
  //   AOS.refresh();
  // }, [activeCard]);

  const data = [
    {
      title: "Before they sold outreadymade gluten",
      description:
        "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
      buttonLabel: "Get Quote!",
      direction: "flex-row-reverse",
    },
    {
      title: "Before they sold outreadymade gluten. loreum ",
      description:
        "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
      buttonLabel: "View more!",
    },
    {
      title: "Before they sold outreadymade gluten. Loreum 213",
      description:
        "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
      buttonLabel: "Contact us!",
    },
  ];
  const handleChange = (index, item) => {
    // console.log(`carousel ${index} : ${item}`);
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
        {data.map((item, idx) => (
          <div key={item.title}>
            <HeroCard {...item} idx={idx} activeIdx={activeCard} />
          </div>
        ))}

        {/* <div>
        <Hero />
      </div>
      <div>
        <img src={require("../assets/images/hero/bg2.jpg")} alt="" />
      </div>
      <div>
        <img src={require("../assets/images/hero/bg3.jpg")} alt="" />
      </div>
      <div>
        <img src={require("../assets/images/hero/bg4.jpg")} alt="" />
      </div>
      <div>
        <img src={require("../assets/images/hero/bg5.jpg")} alt="" />
      </div> */}
      </Carousel>
    </section>
  );
}

export default HeroSection;
