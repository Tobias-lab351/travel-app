import "./ImgCarousel.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import borabora from "../../assets/borabora.jpg";
import borabora2 from "../../assets/borabora2.jpg";
import maldives from "../../assets/maldives.jpg";
import maldives2 from "../../assets/maldives2.jpg";
import maldives3 from "../../assets/maldives2.jpg";
import keywest from "../../assets/keywest.jpg";

export default function ImgCarousel() {
  return (
    <div>
      <div name='carousel' className="container">
        <Carousel
          className="carousel"
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
        >
          <div>
            <img src={borabora} />
            <p className="legend">Rusinga Beach</p>
          </div>
          <div>
            <img src={borabora2} />
            <p className="legend">Diani Resort</p>
          </div>
          <div>
            <img src={maldives} />
            <p className="legend">Dunga Beach</p>
          </div>
          <div>
            <img src={maldives2} />
            <p className="legend">Nyali Beach</p>
          </div>
          <div>
            <img src={maldives3} />
            <p className="legend">Port Victoria</p>
          </div>
          <div>
            <img src={keywest} />
            <p className="legend">Pirates</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
