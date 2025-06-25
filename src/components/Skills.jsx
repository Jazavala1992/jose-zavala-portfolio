import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const skillsRef = useRef()

  const skills = [
    { name: 'HTML5 & CSS3', level: 90, color: 'primary' },
    { name: 'JavaScript', level: 85, color: 'warning' },
    { name: 'React', level: 80, color: 'info' },
    { name: 'Node.js', level: 75, color: 'success' },
    { name: 'Java', level: 70, color: 'danger' },
    { name: 'MySQL', level: 85, color: 'secondary' },
    { name: 'Git & GitHub', level: 85, color: 'dark' },
    { name: 'Bootstrap', level: 90, color: 'primary' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="py-5 section-padding" ref={skillsRef} style={{background: 'var(--bg-secondary)'}}>
      <Container>
        <div className="skills-section">
          <h2 className="section-title text-center">Habilidades Técnicas</h2>
          
          <div className="skills-container">
            <div className="skill-category">
              <h4>Tecnologías Frontend</h4>
              {skills.slice(0, 4).map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold">{skill.name}</span>
                    <span className="text-muted">{skill.level}%</span>
                  </div>
                  <ProgressBar 
                    variant={skill.color}
                    now={isVisible ? skill.level : 0}
                    className="skill-progress"
                    style={{ height: '8px' }}
                  />
                </div>
              ))}
            </div>
            
            <div className="skill-category">
              <h4>Backend & Herramientas</h4>
              {skills.slice(4).map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold">{skill.name}</span>
                    <span className="text-muted">{skill.level}%</span>
                  </div>
                  <ProgressBar 
                    variant={skill.color}
                    now={isVisible ? skill.level : 0}
                    className="skill-progress"
                    style={{ height: '8px' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="text-center mt-5">
            <h3 className="mb-4">Stack Tecnológico</h3>
            <div className="tech-stack">
              <div className="tech-category">
                <h5 className="text-primary mb-3">Frontend</h5>
                <div className="tech-badges">
                  <span className="badge bg-primary me-2 mb-2">React</span>
                  <span className="badge bg-warning me-2 mb-2">JavaScript ES6+</span>
                  <span className="badge bg-info me-2 mb-2">HTML5</span>
                  <span className="badge bg-success me-2 mb-2">CSS3</span>
                  <span className="badge bg-secondary me-2 mb-2">Bootstrap</span>
                </div>
              </div>
              
              <div className="tech-category mt-4">
                <h5 className="text-success mb-3">Backend</h5>
                <div className="tech-badges">
                  <span className="badge bg-success me-2 mb-2">Node.js</span>
                  <span className="badge bg-danger me-2 mb-2">Java</span>
                  <span className="badge bg-primary me-2 mb-2">Express.js</span>
                  <span className="badge bg-secondary me-2 mb-2">RESTful APIs</span>
                </div>
              </div>
              
              <div className="tech-category mt-4">
                <h5 className="text-info mb-3">Base de Datos & Herramientas</h5>
                <div className="tech-badges">
                  <span className="badge bg-info me-2 mb-2">MySQL</span>
                  <span className="badge bg-dark me-2 mb-2">Git</span>
                  <span className="badge bg-secondary me-2 mb-2">GitHub</span>
                  <span className="badge bg-warning me-2 mb-2">Eclipse IDE</span>
                  <span className="badge bg-primary me-2 mb-2">VS Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
