import { HeroSection } from "./components/HeroSection";
import { Nav } from "./components/Nav";
import { RepairsSection } from "./components/RepairsSection";
import { ContactInfo } from "./components/ContactInfo";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#F8EDED]">
        <ContactInfo />
        <Nav>
          <div>
            <HeroSection />
          </div>
          <div className="divider"></div>
          <div>
            <RepairsSection />
          </div>
          <div className="divider"></div>
          <div>
            <ContactSection />
          </div>
          <div>
            <Footer/>
          </div>
        </Nav>
      </div>
    </>
  );
}

export default App;
