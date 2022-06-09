import { useEffect } from "react";
import logo from "./logo.svg";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Search from "./components/Search";
import Starter from "./sections/Starter";
import HeroSection from "./sections/HeroSection";
import HomeSection from "./sections/HomeSection";
import ServiceSection from "./sections/ServiceSection";
import ProjectSection from "./sections/ProjectSection";
import TeamSection from "./sections/TeamSection";
import ContactSection from "./sections/ContactSection";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=" overflow-hidden bg-[#081730]">
      <Navbar />
      {/* <Hero />
      <Experience />
      <Search /> */}
      {/* <Starter /> */}
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      {/* <HomeSection /> */}
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
