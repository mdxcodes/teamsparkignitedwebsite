import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Vehicles from "@/components/sections/Vehicles";
import FeaturedVehicle from "@/components/sections/FeaturedVehicle";
import Engineering from "@/components/sections/Engineering";
import Competition from "@/components/sections/Competition";
import Team from "@/components/sections/Team";
import Sponsors from "@/components/sections/Sponsors";
import CTA from "@/components/sections/CTA";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Vehicles />
      <FeaturedVehicle />
      <Engineering />
      <Competition />
      <Team />
      <Sponsors />
      <CTA />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
