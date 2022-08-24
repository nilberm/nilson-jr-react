import "./style.css";

import BarTop from "./components/BarTop";
import Hero from "./components/Hero";
import SocialMediaLinks from "./components/SocialMediaLinks";
import Footer from "./components/Footer";

const Fade = require("react-reveal/Fade");

const App = () => {
  return (
    <>
      <BarTop />
      <Hero />
      <Fade left>
        <div className="dividerLine" />
      </Fade>
      <SocialMediaLinks />
      <Footer />
    </>
  );
};

export default App;
