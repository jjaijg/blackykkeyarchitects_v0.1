import { useEffect } from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
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
    <div className="overflow-hidden bg-[#081730]">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
