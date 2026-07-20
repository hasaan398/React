import { useState } from "react";
import "./getyour.css";
import growthImg from "../../assets/Desktop.png";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import mariaImg from "../../assets/picture.png";

const testimonials = [
  {
    quote: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
    name: "Marie Perrot",
    role: "Bigapp",
  },
  {
    quote: "Pellentesque habitant morbi tristique senectus et netus malesuada fames. Vestibulum ante ipsum primis in faucibus orci luctus.",
    name: "Alex Johnson",
    role: "Designer",
  },
  {
    quote: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia. Proin vel ante a orci tempus eleifend ut.",
    name: "Sara Kim",
    role: "Developer",
  },
];

export default function BusinessGrowth() {
  const [active, setActive] = useState(0);
  const [clickedArrow, setClickedArrow] = useState(null);

  const prev = () => {
    setActive((active - 1 + testimonials.length) % testimonials.length);
    setClickedArrow("left");
    setTimeout(() => setClickedArrow(null), 300);
  };

  const next = () => {
    setActive((active + 1) % testimonials.length);
    setClickedArrow("right");
    setTimeout(() => setClickedArrow(null), 300);
  };

  return (
    <section className="business-growth">

      {/* Heading + desc */}
      <div className="business-growth-text">
        <h2 className="business-growth-heading">Get your business to grow fast</h2>
        <p className="business-growth-description">
          Aliquet id quam amet, augue netus tristique elementum eros urna. Dignissim nisl mauris cras feugiat
          congue at euismod donec. Lectus interdum nibh laoreet nunc bibendum volutpat.
        </p>
      </div>

      {/* Mockup */}
      <div className="business-growth-image">
        <div className="image-bg">
          <img src={growthImg} alt="Business growth illustration" />
        </div>
      </div>

      {/* 3 columns */}
      <div className="business-growth-columns">
        <div className="column">
          <img src={i1} alt="Feature 1" />
          <h3>Nisl arcu nunc</h3>
          <p>Dui consectetur gravida platea et duis diam. Enim morbi prom auctor et.</p>
        </div>
        <div className="column">
          <img src={i2} alt="Feature 2" />
          <h3>Dui scelerisque</h3>
          <p>Et at duis vestibulum prom. Sollicitudin velit, etiam a feugiat sagittis.</p>
        </div>
        <div className="column">
          <img src={i3} alt="Feature 3" />
          <h3>Ac proin at</h3>
          <p>Elit purus magna donec mattis amet, leo varius sed. UI metus sed convallis.</p>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="testimonial-strip">

        <button className={`testi-arrow testi-arrow--left ${clickedArrow === "left" ? "clicked" : ""}`} onClick={prev}>&#8249;</button>

        <div className="testimonial-inner">
          {/* Text left */}
          <div className="testimonial-text">
            <p>"{testimonials[active].quote}"</p>
            <strong>{testimonials[active].name}</strong>
            <span>{testimonials[active].role}</span>
            
            {/* Dots text ke bilkul sath hi rahenge aur mobile par uper hi center honge */}
            <div className="testi-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot ${i === active ? "active" : ""}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>

          {/* Image wrapper - Mobile par automatic text ke niche load hoga */}
          <div className="testimonial-img-wrapper">
            <img
              src={mariaImg}
              alt={testimonials[active].name}
              className="testimonial-img"
            />
          </div>
        </div>

        <button className={`testi-arrow testi-arrow--right ${clickedArrow === "right" ? "clicked" : ""}`} onClick={next}>&#8250;</button>

      </div>

    </section>
  );
}