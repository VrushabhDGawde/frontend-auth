import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthForm from "../components/authPage/AuthForm";
import HeroImage from "../components/authPage/HeroImage";

export default function Authentication() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 mt-16">
        <div className="flex flex-1 flex-col justify-center">
          <AuthForm />
        </div>
        <HeroImage />
      </div>
      <Footer />
    </div>
  );
}
