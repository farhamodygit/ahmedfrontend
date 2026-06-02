import { Link } from "react-router-dom";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import ProfileCard from "../components/ProfileCard";

function Home() {
  return (
    <main className="home-section">
      <ProfileCard />

      <section className="hero-text">
        <span className="section-badge">Welcome to My Digital Portfolio</span>
        <h2>
          Turning <span>data and ideas</span> into practical solutions.
        </h2>
        <p>
          I am a Data Science student and aspiring developer at the Eastern
          Africa Statistical Training Centre. My work sits at the intersection
          of analytical thinking, modern web technologies, and continuous
          learning. Explore my portfolio to see the tools I use and the
          projects I am building.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn-primary">
            View My Projects <FaArrowRight />
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Me <FaEnvelope />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
