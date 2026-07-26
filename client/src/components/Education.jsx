import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      school: 'Chitkara University Institute of Engineering and Technology',
      year: '2023 – 2027',
      degree: 'B.E. Computer Science Engineering',
      result: 'CGPA: 7.26/10'
    },
    {
      school: 'Love Kush School, Ganganagar',
      year: '2023',
      degree: 'Senior Secondary (Non-Medical)',
      result: '76%'
    },
    {
      school: 'Euro World School, Ganganagar',
      year: '2021',
      degree: 'Secondary Education',
      result: '87%'
    }
  ];

  const achievements = [
    'Completed Introduction to Python course Coding Ninjas',
    'Completed Google Networks and Cyber Security course Coursera',
    'Completed Red Hat System Administration (I & II)',
    'Soft Skills: Communication, Teamwork, Adaptability, Time Management'
  ];

  return (
    <section id="education" className="education">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="edu-grid">
          <div className="edu-left">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass">
                    <span className="edu-year">{item.year}</span>
                    <h3>{item.school}</h3>
                    <p className="edu-degree">{item.degree}</p>
                    <span className="edu-result">{item.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="edu-right">
            <h2 className="section-title">Achievements</h2>
            <div className="achievements-list">
              {achievements.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="achievement-card glass"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="achievement-icon">
                    <Award size={20} />
                  </div>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
