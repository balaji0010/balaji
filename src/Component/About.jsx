import "./component.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        
        {/* Educational Qualification Card */}
        <div className="about-card">
          <h3>🎓 Education</h3>
          <ul>
            <li><strong>B.Tech in Computer Science</strong> - DHANALAKSHMI SRINIVASAN ENGINEERING COLLEGE (2020 - 2024)</li>
            <li><strong>Higher Secondary</strong> - SATHYA SAAI MATRIC HR SEC SCHOOL(2019- 2020)</li>
          </ul>
        </div>

        {/* Experience Card */}
        <div className="about-card">
          <h3>💼 Experience</h3>
          <ul>
            <li><strong>Software Engineer - InstaSafe</strong> (2025 - Present)</li>
            <li><strong>Frontend Developer - Internship</strong> (2024)</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
