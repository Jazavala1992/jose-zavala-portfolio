import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  const features = [
    {
      icon: 'fas fa-code',
      title: 'Frontend Development',
      description: 'Desarrollo con HTML5, CSS3, JavaScript ES6+, React, Vue.js y Bootstrap. Experiencia en SPAs, responsive design y optimización de rendimiento.'
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      description: 'APIs REST con Node.js y Express. Desarrollo de aplicaciones empresariales con Java, Swing y arquitectura MVC. Experiencia en autenticación JWT.'
    },
    {
      icon: 'fas fa-database',
      title: 'Gestión de Datos',
      description: 'Diseño e implementación de bases de datos MySQL. Experiencia en modelado de datos, optimización de consultas y sistemas de respaldo.'
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Sistemas Completos',
      description: 'Desarrollo de sistemas integrales para nutricionistas, gestión de ferias municipales y subastas virtuales con interfaces gráficas avanzadas.'
    }
  ]

  return (
    <section id="about" className="py-5 section-padding">
      <Container>
        <div className="about-section">
          <div className="about-intro">
            <h2 className="section-title">Sobre mí</h2>
            <p className="lead">
              Soy un desarrollador full stack con experiencia sólida en el desarrollo de sistemas completos 
              desde el frontend hasta el backend. He desarrollado múltiples aplicaciones web y de escritorio, 
              especializándome en soluciones para el sector salud y sistemas empresariales. Mi enfoque está 
              en crear aplicaciones robustas, escalables y con excelente experiencia de usuario.
            </p>
            <p className="lead">
              Mi experiencia incluye el desarrollo de sistemas CRUD completos con diferentes tecnologías frontend 
              (HTML/CSS, Bootstrap, React, Vue.js), APIs REST con Node.js, y aplicaciones de escritorio con Java. 
              Tengo un sólido dominio de bases de datos MySQL y me apasiona implementar las mejores prácticas 
              de desarrollo y arquitectura de software.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card text-center">
                <i className={`${feature.icon} fa-3x text-primary mb-3`}></i>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
