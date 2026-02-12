import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { RoadsideAssistanceSection } from "./components/sections/RoadsideAssistanceSection";
import { AboutSection } from "./components/sections/AboutSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { CTASection } from "./components/sections/CTASection";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-red-50/10 to-white bg-fixed">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <RoadsideAssistanceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
