import "./workanywhere.css";
import mobileImg from "../../assets/mobile.png";
import appleImg from "../../assets/apple.png";
import gplayImg from "../../assets/gplay.png";

export default function WorkAnywhere() {
  return (
    <>
      <section className="work-anywhere">
        <div className="work-anywhere-content">

          {/* Text - left side */}
          <div className="work-anywhere-text">
            <h2 className="work-anywhere-heading">Work from anywhere</h2>
            <p className="work-anywhere-description">
              In et dolor ex donec maecenas nulla. Cum sed orci, sit pellentesque
              quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
              viverra a, neque orci.
            </p>

            {/* Store Buttons - real images */}
            <div className="work-anywhere-btns">
              <a href="#" className="store-btn-img">
                <img src={appleImg} alt="Download on the App Store" />
              </a>
              <a href="#" className="store-btn-img">
                <img src={gplayImg} alt="Get it on Google Play" />
              </a>
            </div>
          </div>

          {/* Image - right side */}
          <div className="work-anywhere-image">
            <img src={mobileImg} alt="Work from anywhere mobile app" />
          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="cta-banner-content">
          <h2 className="cta-banner-heading">All the tech & design tools combined</h2>
          <p className="cta-banner-sub">Turpis purus, imperdiet integer amet, eu.</p>
          <a href="#" className="cta-banner-btn">Request Demo</a>
        </div>
      </div>
    </>
  );
}