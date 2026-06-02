import {
  FaRobot,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

function Projects() {
  return (
    <div className="projects-container">

      <div className="section-title">
        <h1>My Projects</h1>
        <p>
          Some of the projects I have worked on
          during my academic and personal learning journey.
        </p>
      </div>

      <div className="project-card-modern">

        <div className="project-icon">
          <FaRobot />
        </div>

        <div className="project-content">

          <span className="project-badge">
            Featured Project
          </span>

          <h2>Product Recommendation System</h2>

          <p>
            An intelligent machine learning system designed
            to recommend products based on customer behavior,
            purchase history and personal preferences.
            The system improves user experience and helps
            businesses increase sales through personalized recommendations.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>React</span>
            <span>Node.js</span>
          </div>

          <div className="project-stats">

            <div>
              <FaStar />
              <span>AI Powered</span>
            </div>

            <div>
              <FaStar />
              <span>Real World Solution</span>
            </div>

          </div>

          <button className="project-btn">
            View Project <FaArrowRight />
          </button>

        </div>

      </div>

    </div>
  );
}

export default Projects;