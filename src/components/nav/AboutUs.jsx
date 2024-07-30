import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Learn more about our mission, team, and goals.</p>
      </header>
      <section className="about-us-section">
        <div className="about-us-description">
          <h2>Our Website</h2>
          <p>
            Welcome to [Your Website Name], where we strive to provide [a brief description of your website’s purpose or services].
            Our platform is designed to [describe what your website does and what sets it apart].
          </p>
        </div>
        <div className="about-us-team">
          <h2>Meet Our Team</h2>
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" className="team-member-img" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" className="team-member-img" />
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
        <div className="about-us-goals">
          <h2>Our Goals</h2>
          <ul>
            <li>To provide top-notch services to our users.</li>
            <li>To innovate and stay ahead in our industry.</li>
            <li>To build a community of satisfied customers.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
