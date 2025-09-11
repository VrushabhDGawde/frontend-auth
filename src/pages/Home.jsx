import Navbar from "../components/Navbar";
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import CTASection from "../components/Home/CTASection";
import ContactSection from "../components/Home/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}
