import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutHero from "../components/about/AboutHero";
import MissionSection from "../components/about/MissionSection";
import ValuesSection from "../components/about/ValuesSection";
import TeamSection from "../components/about/TeamSection";
import AboutCTA from "../components/about/AboutCTA";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <AboutCTA />
      <Footer />
    </div>
  );
}
