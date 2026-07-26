import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Shield, Cpu } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: <Code size={20} />, label: 'Development', value: 'Web & Software' },
    { icon: <Shield size={20} />, label: 'Cybersecurity', value: 'Basics' },
    { icon: <Cpu size={20} />, label: 'Technology', value: 'Modern Stacks' },
  ];

  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a Computer Science student at Chitkara University with a deep interest in technology and problem solving. 
              My journey in tech is driven by a curiosity to understand how things work under the hood, from programming 
              fundamentals to complex data handling.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              I am a quick learner with the ability to adapt to new environments and work effectively in team settings. 
              Currently focusing on full-stack development and exploring the fascinating world of cybersecurity.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="stat-card glass">
                  <div className="stat-icon">{stat.icon}</div>
                  <div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-value">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image-container">
            <div className="image-placeholder glass">
              <User size={100} color="var(--accent-primary)" opacity={0.5} />
              {/* Note: User would put their actual photo here */}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
