import Hero from "./components/Hero";
import MyPortfolio from "./components/MyPortfolio";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import SkillsStrip from "./components/SkillsStrip";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsStrip />
      <ServicesSection />
      <MyPortfolio />
    </>
  );
};

export default App;
  