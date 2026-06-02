import {
  FaLock,
  FaBuilding,
  FaRobot,
  FaDatabase,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

function Projects() {
  return (
    <div className="projects-section">

      <div className="projects-header">
        <span className="project-tag">
          Featured Work
        </span>

        <h1>My Projects</h1>

        <p>
          These projects highlight my work in cryptography, secure systems,
          and software solutions for real-world challenges.
        </p>
      </div>

      <div className="project-card-modern">
        <div className="project-icon">
          <FaLock />
        </div>
        <div className="project-content">
          <span className="project-badge">Cryptography</span>
          <h2>Secure Cryptography Toolkit</h2>
          <p>
            A modern cryptography system built to protect sensitive data with
            encryption, key management, and secure message handling.
            This project shows my ability to design security-aware solutions
            for data confidentiality and integrity.
          </p>
          <div className="project-features">
            <div className="feature">
              <FaDatabase />
              <span>Encryption</span>
            </div>
            <div className="feature">
              <FaChartLine />
              <span>Secure Data Flow</span>
            </div>
            <div className="feature">
              <FaStar />
              <span>Modern Security</span>
            </div>
          </div>
          <div className="tech-stack">
            <span>Python</span>
            <span>Cryptography</span>
            <span>API Design</span>
            <span>Security</span>
          </div>
          
        </div>
      </div>

      <div className="project-card-modern">
        <div className="project-icon">
          <FaRobot />
        </div>
        <div className="project-content">
          <span className="project-badge">Recommendation</span>
          <h2>Product Recommendation System</h2>
          <p>
            An intelligent recommendation engine that matches users with
            products they will love based on behavior, preferences, and
            historical purchase data.
            It improves engagement by delivering personalized product offers.
          </p>
          <div className="project-features">
            <div className="feature">
              <FaDatabase />
              <span>Customer Insights</span>
            </div>
            <div className="feature">
              <FaChartLine />
              <span>Machine Learning</span>
            </div>
            <div className="feature">
              <FaStar />
              <span>Personalized Results</span>
            </div>
          </div>
          <div className="tech-stack">
            <span>Python</span>
            <span>Recommendation</span>
            <span>React</span>
            <span>Data Science</span>
          </div>
          
        </div>
      </div>

      <div className="project-card-modern">
        <div className="project-icon">
          <FaBuilding />
        </div>
        <div className="project-content">
          <span className="project-badge">Hostel Management</span>
          <h2>Hostel Management System</h2>
          <p>
            A modern reservation and room management system designed for
            hostels. It supports booking workflows, student records, room
            allocation, and administrative dashboards for efficient operations.
          </p>
          <div className="project-features">
            <div className="feature">
              <FaDatabase />
              <span>Room Tracking</span>
            </div>
            <div className="feature">
              <FaChartLine />
              <span>Admin Dashboard</span>
            </div>
            <div className="feature">
              <FaStar />
              <span>Business Workflow</span>
            </div>
          </div>
          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>UX Design</span>
          </div>
         
        </div>
      </div>

    </div>
  );
}

export default Projects;