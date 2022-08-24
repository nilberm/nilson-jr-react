import { Container } from "./style";

import heroImg from "../../assets/heroMobile.png";
import heroImgDesktop from "../../assets/heroDesktop.png";
import linkArrow from "../../assets/icons/linkArrow.svg";

const Fade = require("react-reveal/Fade");
const Rotate = require("react-reveal/Rotate");
const Pulse = require("react-reveal/Pulse");

const Hero = () => {
  return (
    <Container>
      <section className="heroContainer">
        <Fade top>
          <picture>
            <source media="(min-width:750px)" srcSet={heroImgDesktop} />
            <img
              className="heroImg"
              src={heroImg}
              alt="imagem de Nilson Junior tocando"
            />
          </picture>
        </Fade>

        <div className="actionContainer">
          <Rotate top left>
            <h2>
              Música ao vivo em festas, casamentos, bares, churrascarias e muito
              mais!
            </h2>
          </Rotate>

          <Pulse>
            <button>
              <a
                target="blank"
                href="https://api.whatsapp.com/send?phone=5585988419761&text=Ol%C3%A1."
                className="button_top"
              >
                Entre em contato
                <img src={linkArrow} alt="link de contato" />
              </a>
            </button>
          </Pulse>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
