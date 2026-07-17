import { useState } from "react";
import "./End.css";
import logo from "../../assets/logo-grey.png";  /* white bg wala logo */
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const faqs = [
  "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
  "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
  "Varius ultrices molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
  "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
  "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
];

const footerCols = [
  { heading: "PRODUCT", links: ["Pricing", "Overview", "Browse", "Accessibility", "Five"] },
  { heading: "SOLUTIONS", links: ["Brainstorming", "Ideation", "Wireframing", "Research"] },
  { heading: "RESOURCES", links: ["Help Center", "Blog", "Tutorials", "Research"] },
  { heading: "COMPANY", links: ["About", "Press", "Events", "Careers"] },
];

export default function End() {
  const [open, setOpen] = useState(null);

  return (
    <>
      {/* ══ FAQ SECTION ══ */}
      <section className="faq">
        <div className="faq-inner">
          <h2 className="faq-heading">Frequently asked questions</h2>

          <div className="faq-list">
            {faqs.map((q, i) => (
              <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{q}</span>
              
                  <span className="faq-icon">{open === i ? <span style={{fontSize: "15px", fontWeight: "bold", width:"50px"}}>^</span> : <span style={{fontSize: "15px", fontWeight: "bold"}}>v</span>}</span>
                </button>
                {open === i && (
                  <div className="faq-answer">
                    Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ea.
                    In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
                    quisque feugiat cras ullamcorper.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ READY CTA BANNER ══ */}
      <section className="ready-cta">
        <div className="ready-cta-inner">
          <h2 className="ready-cta-heading">Ready for your next project?</h2>
          <p className="ready-cta-sub">
            Sit elit feugiat turpis sed integer integer accumsan turpis.
          </p>
          <a href="#" className="ready-cta-btn">Request Demo</a>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="Protech" />
          </div>
          <div className="footer-cols">
            {footerCols.map((col) => (
              <div key={col.heading} className="footer-col">
                <h5>{col.heading}</h5>
                {col.links.map((link) => (
                  <a key={link} href="#">{link}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2023 Protech Inc. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </footer>
    </>
  );
}