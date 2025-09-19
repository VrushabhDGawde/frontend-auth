import Navbar from "../components/Navbar";
import Form from "../components/Form/Form";
import FeedbackSection from "../components/Form/AboutSection";
import Footer from "../components/Footer";


export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-26">
        <Form />
        <FeedbackSection />
      </main>
      <Footer />
    </>
  );
}

