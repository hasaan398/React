import "./efficiant.css";
import collabImg from "../../assets/right.png"; // apna image yahan import karo

export default function Efficiant() {
  return (
    <section className="efficiant">
      <div className="efficiant-content">
        {/* Image left side */}
        <div className="efficiant-image">
          <img src={collabImg} alt="Collaboration illustration" />
        </div>

        {/* Text right side */}
        <div className="efficiant-text">
          <h2 className="efficiant-heading">Efficiant collaboration</h2>
          <p className="efficiant-description">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
            In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
            quisque feugiat cras ullamcorper.
          </p>
        </div>
      </div>
    </section>
  );
}
