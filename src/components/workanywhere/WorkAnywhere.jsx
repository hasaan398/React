import "./workanywhere.css";
import mobileImg from "../../assets/mobile.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";

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

            {/* Store Buttons */}
            <div className="work-anywhere-btns">
              <a href="#" className="store-btn">
                <FaApple className="store-icon" />
                <div className="store-btn-text">
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </a>
              <a href="#" className="store-btn">
                <FaGooglePlay className="store-icon" />
                <div className="store-btn-text">
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
          </div>

          {/* Image - right side */}
          <div className="work-anywhere-image">
            <img src={mobileImg} alt="Work from anywhere mobile app" />
          </div>
        </div>
      </section>

      {/* CTA Banner - separate sibling */}
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

