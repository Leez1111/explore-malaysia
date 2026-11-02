import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      
      <h2 className="about-title">About Us</h2>
      
      <p className="about-description">
        Welcome to <strong>Explore Malaysia</strong>! We are a passionate local travel agency dedicated to showcasing the hidden gems and famous landmarks of our beautiful country. Whether you want to relax on pristine beaches, hike through lush rainforests, or experience vibrant city life, our goal is to make your journey unforgettable.
      </p>
      
      <h3 className="about-subtitle">Why Choose Us?</h3>
      
      <ul className="about-list">
        <li>
            {/* Strong is to make text bold */}
          <strong>Affordable Travel Packages:</strong> We offer the best local experiences at prices that will not break your budget.
        </li>
        <li>
          <strong>Experienced Tour Guides:</strong> Our friendly, knowledgeable local guides know all the best spots and historical stories.
        </li>
        <li>
          <strong>Comfortable Travel Arrangements:</strong> From reliable transport to comfortable hotels, your safety and comfort are our top priorities.
        </li>
      </ul>

    </div>
  );
}

export default About;