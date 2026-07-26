import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Settings, ShieldAlert, Terminal as LinuxIcon } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code2 size={24} />,
      skills: ['C', 'Java', 'C++', 'Python']
    },
    {
      title: 'Web Development',
      icon: <Globe size={24} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js']
    },
    {
      title: 'Database & Tools',
      icon: <Database size={24} />,
      skills: ['SQL', 'Git', 'Docker', 'DBMS']
    },
    {
      title: 'DevOps',
      icon: <Settings size={24} />,
      skills: ['Kubernetes (Basics)', 'CI/CD Pipelines']
    },
    {
      title: 'Cybersecurity',
      icon: <ShieldAlert size={24} />,
      skills: ['Networking', 'SQL Injection', 'XSS Basics']
    },
    {
      title: 'Operating Systems',
      icon: <LinuxIcon size={24} />,
      skills: ['Linux Commands', 'System Administration']
    }
  ];

  return (
    <section id="skills" className="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category glass"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
