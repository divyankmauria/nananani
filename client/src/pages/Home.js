import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Welcome to Nananani</h1>
          <p>Connect with family members for help with everyday tasks</p>
          <div className="hero-buttons">
            <Link to="/post-task" className="btn btn-primary">Post a Task</Link>
            <Link to="/register-provider" className="btn btn-secondary">Become a Helper</Link>
          </div>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>How It Works</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>1. Post a Task</h3>
              <p>Describe what you need help with</p>
            </div>
            <div className="feature-card">
              <h3>2. Find Help</h3>
              <p>Connect with family members</p>
            </div>
            <div className="feature-card">
              <h3>3. Get It Done</h3>
              <p>Complete your task together</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
