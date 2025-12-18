import Hero from "./components/Hero";
import MyPortfolio from "./components/MyPortfolio";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import SkillsStrip from "./components/SkillsStrip";
import WorkWithUs from "./components/WorkWithUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsStrip />
      <ServicesSection />
      <MyPortfolio />
      <WorkWithUs />
    </>
  );
};

export default App;
