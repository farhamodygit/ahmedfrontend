import Skills from "../components/Skills";
import { FaCode } from "react-icons/fa";

function SkillsPage() {
  return (
    <div className="skills-page">

      <div className="skills-hero">

        <div className="skills-hero-icon">
          <FaCode />
        </div>

        <h1>Skills & Expertise</h1>

        <p>
          Over the years, I have developed technical,
          analytical, and problem-solving skills through
          academic studies, practical projects, and continuous learning.
          These skills enable me to build modern applications,
          analyze data effectively, and create innovative solutions.
        </p>

      </div>

      <Skills />

    </div>
  );
}

export default SkillsPage;
