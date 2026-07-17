import "./Hero.css";
import desktopImg from "../../assets/Desktop.png";
import logosImg from "../../assets/logos.png";
import lineImg from "../../assets/line.png";
import boatomImg from "../../assets/boatom.png";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-circle hero-circle--left"></div>
        <div className="hero-circle hero-circle--right"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Technology design tools<br />
            for engineers and hobbyists
          </h1>

          <p className="hero-subtitle">
            Sit elit feugiat turpis sed integer integer accumsan turpis.<br />
            Sed suspendisse nec lorem mauris.
          </p>

          <a href="#" className="hero-btn">Request Demo</a>

          {/* Line hero-content ka direct child - full width milegi */}
          <div className="hero-mockup-wrap">
            <div className="hero-mockup">
              <img src={desktopImg} alt="Protech Dashboard" />
            </div>
          </div>
        </div>

        {/* 👇 Line section ke andar but content ke bahar - full width */}
        <img className="hero-line" src={lineImg} alt="" aria-hidden="true" />

        {/* Bottom curve */}
        <img className="hero-bottom-curve" src={boatomImg} alt="" aria-hidden="true" />
      </section>

      <div className="hero-logos">
        <img src={logosImg} alt="Partner brands" />
      </div>
    </>
  );
}