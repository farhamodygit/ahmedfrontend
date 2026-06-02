import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaFileExcel,
  FaCode,
  FaChartBar,
} from "react-icons/fa";

import { SiCplusplus, SiR } from "react-icons/si";

function Skills() {
  return (
    <div className="skills-section">

      <div className="skills-header">
        <h1>My Skills & Expertise</h1>

        <p>
          I have developed strong technical and analytical skills
          through academic studies, personal projects, and continuous
          learning in software development and data science.
        </p>
      </div>

      <div className="skills-grid">

        <div className="skill-card-modern">
          <SiCplusplus className="skill-icon" />
          <h3>C++ Programming</h3>
          <p>Object-Oriented Programming and algorithm development.</p>
        </div>

        <div className="skill-card-modern">
          <FaJs className="skill-icon" />
          <h3>JavaScript</h3>
          <p>Interactive web applications and frontend development.</p>
        </div>

        <div className="skill-card-modern">
          <FaPython className="skill-icon" />
          <h3>Python</h3>
          <p>Machine learning, automation and data analysis.</p>
        </div>

        <div className="skill-card-modern">
          <SiR className="skill-icon" />
          <h3>R Programming</h3>
          <p>Statistical analysis and data visualization.</p>
        </div>

        <div className="skill-card-modern">
          <FaHtml5 className="skill-icon" />
          <h3>HTML5</h3>
          <p>Modern website structure and semantic markup.</p>
        </div>

        <div className="skill-card-modern">
          <FaCss3Alt className="skill-icon" />
          <h3>CSS3</h3>
          <p>Responsive layouts and modern user interfaces.</p>
        </div>

        <div className="skill-card-modern">
          <FaFileExcel className="skill-icon" />
          <h3>Microsoft Excel</h3>
          <p>Data management, dashboards and reporting.</p>
        </div>

        <div className="skill-card-modern">
          <FaChartBar className="skill-icon" />
          <h3>STATA</h3>
          <p>Econometric and statistical data analysis.</p>
        </div>

        <div className="skill-card-modern">
          <FaCode className="skill-icon" />
          <h3>Web Development</h3>
          <p>Building responsive and modern web applications.</p>
        </div>

      </div>

    </div>
  );
}

export default Skills;
