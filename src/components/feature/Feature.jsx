import "./feature.css";  // lowercase

// Feature images (p1-p6)
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";

// Article images (p7-p9)
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png";
import p9 from "../../assets/p9.png";

const features = [
  { img: p1, title: "Pellentesque turpis vestibulum", desc: "Ullamcorper enim, clare arcu elit at vitae et. Platea porttitor consequat, lorem in arcu et." },
  { img: p2, title: "Tincidunt quisque", desc: "Blandit at tortor nec imperdiet. Morbi quam facilisis a leo tortor nec lorem." },
  { img: p3, title: "Tincidunt magna diam", desc: "Morbi in pharetra enim risus donec ut. Viverra tortor, nulla et tellus here." },
  { img: p4, title: "Purus habitasse", desc: "Massa orci et nisl non et. Neque mauris sagittis cursus biodruid egesta facilisis amet." },
  { img: p5, title: "Dictum elementum", desc: "Ullamcorper aliquam neeneanee sapien tempor, tempus tincidunt uma. Dignissim id folia dui." },
  { img: p6, title: "Semper vulputate ut", desc: "Arcu sit amet nisl congue, in nunc metus. Phasete in egestas pharetra euismod commodo." },
];

const articles = [
  { img: p7, title: "Title", desc: "Egestas elit dui scelerisque ut eu purus aliquet nam vitas habitasse." },
  { img: p8, title: "Title", desc: "Egestas elit dui scelerisque ut eu purus aliquet nam vitas habitasse." },
  { img: p9, title: "Title", desc: "Egestas elit dui scelerisque ut eu purus aliquet nam vitas habitasse." },
];

export default function Feature() {
  return (
    <>
      {/* ── FEATURES GRID ── */}
      <section className="features">
        <div className="features-inner">
          <h2 className="features-heading">The features you were looking for</h2>

          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-card-img">
                  <img src={f.img} alt={f.title} />
                </div>
                <div className="feature-card-body">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="articles">
        <div className="articles-inner">
          <h2 className="articles-heading">Technology design articles</h2>
          <p className="articles-sub">
            Felis, semper ullamcorper sed pretium tristique vulputate semper massa ultrices.
            Integer orci gravida blandit amet.
          </p>

          <div className="articles-grid">
            {articles.map((a, i) => (
              <div key={i} className="article-card">
                <div className="article-card-img">
                  <img src={a.img} alt={a.title} />
                </div>
                <div className="article-card-body">
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                  <a href="#" className="read-link">Read article →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}