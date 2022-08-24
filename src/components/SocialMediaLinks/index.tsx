import { Container } from "./style";

import bottomImageMobile from "../../assets/bottomImageMobile.png";
import bottomImageDesktop from "../../assets/bottomImageDesktop.png";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";

const Pulse = require("react-reveal/Pulse");
const Fade = require("react-reveal/Fade");

const SocialMediaLinks = () => {
  return (
    <Container>
      <section className="socialMediaLinks">
        <Pulse>
          <div className="buttonsSocialMedia">
            <button>
              <a target="blank" href="https://www.instagram.com/nilson4junior/">
                <img src={instagram} alt="instagram" />
                Instagram
              </a>
            </button>
            <button>
              <a target="blank" href="https://www.youtube.com/user/nilson0962">
                <img src={youtube} alt="youtube" />
                Youtube
              </a>
            </button>
          </div>
        </Pulse>
        <Fade bottom>
          <picture>
            <source media="(min-width:750px)" srcSet={bottomImageDesktop} />
            <img
              className="bottomImage"
              src={bottomImageMobile}
              alt="imagem de Nilson Júnior"
            />
          </picture>
        </Fade>
      </section>
    </Container>
  );
};

export default SocialMediaLinks;
