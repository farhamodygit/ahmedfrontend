import { FaUserGraduate, FaLaptopCode, FaChartBar } from "react-icons/fa";

function About() {
  return (
    <div className="about-section">

      <div className="about-header">
        <h1>About Me</h1>
        <p>
          Get to know more about my academic journey, skills,
          and passion for technology and innovation.
        </p>
      </div>

      <div className="about-card">

        <h2>Ahmed Hashim Suleiman</h2>

        <p>
          I am a dedicated and ambitious student at the
          Eastern Africa Statistical Training Centre (EASTC),
          pursuing my studies with a strong passion for
          Data Science, Software Development,
          and Cloud Computing.
        </p>

        <p>
          My academic background has equipped me with valuable
          analytical and problem-solving skills, while my interest
          in technology motivates me to build modern web applications,
          explore machine learning solutions, and develop systems that
          address real-world challenges.
        </p>

        <p>
          I am continuously learning and improving my skills in
          programming, data analysis, and emerging technologies.
          My goal is to become a highly skilled technology professional
          capable of creating innovative digital solutions that make
          a positive impact on society.
        </p>

        <div className="about-highlights">

          <div className="highlight-card">
            <FaUserGraduate className="about-icon" />
            <h3>Education</h3>
            <p>
              Data Science Student at Eastern Africa Statistical Training Centre (EASTC).
            </p>
          </div>

          <div className="highlight-card">
            <FaLaptopCode className="about-icon" />
            <h3>Development</h3>
            <p>
              Passionate about Web Development, Programming,
              and Cloud Technologies.
            </p>
          </div>

          <div className="highlight-card">
            <FaChartBar className="about-icon" />
            <h3>Data Science</h3>
            <p>
              Interested in Data Analysis, Machine Learning,
              and Statistical Computing.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;