import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentLine, setCurrentLine] = useState(0)
  
  const codeLines = [
    "const developer = {",
    "  name: 'José Zavala',",
    "  skills: ['React', 'Node.js', 'MySQL', 'Java'],",
    "  passion: 'Full Stack Development'",
    "};"
  ]

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + codeLines[currentLine] + '\n')
        setCurrentLine(prev => prev + 1)
      }, 800 + currentLine * 300)
      
      return () => clearTimeout(timeout)
    }
  }, [currentLine])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          {/* Profile Photo Column */}
          <Col lg={3} md={4} className="text-center mb-4 mb-lg-0">
            <div className="profile-photo-container">
              <div className="profile-photo">
                <img 
                  src="https://via.placeholder.com/300x300/4A90E2/FFFFFF?text=TU+FOTO" 
                  alt="José Zavala - Desarrollador Full Stack"
                  className="profile-image"
                />
                <div className="photo-border"></div>
              </div>
              <div className="photo-badge">
                <i className="fas fa-code"></i>
                <span>Full Stack Developer</span>
              </div>
            </div>
          </Col>
          
          {/* Content Column */}
          <Col lg={5} md={8}>
            <div className="hero-content">
              <h1 className="hero-title">
                Hola, soy <span className="text-primary">José Zavala</span>
              </h1>
              <h2 className="hero-subtitle">Desarrollador Full Stack</h2>
              <p className="hero-description">
                Creo aplicaciones web completas desde el frontend hasta el backend, 
                con experiencia en React, Node.js, bases de datos y desarrollo con Java. 
                Apasionado por crear soluciones tecnológicas robustas y escalables.
              </p>
              <div className="hero-buttons">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="me-3"
                  onClick={() => scrollToSection('projects')}
                >
                  Ver Proyectos
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Contactar
                </Button>
              </div>
            </div>
          </Col>
          
          {/* Code Animation Column */}
          <Col lg={4}>
            <div className="hero-image">
              <div className="code-animation">
                <pre className="code-display">
                  <code>
                    {displayedText.split('\n').map((line, index) => (
                      <div key={index} className="code-line">
                        {line && (
                          <>
                            {line.includes('const') && (
                              <span className="code-keyword">const</span>
                            )}
                            {line.includes('developer') && !line.includes('const') && (
                              <span className="code-variable">developer</span>
                            )}
                            {line.includes('name') && (
                              <>
                                <span className="code-property">name</span>
                                <span>: </span>
                                <span className="code-string">'José Zavala'</span>
                              </>
                            )}
                            {line.includes('skills') && (
                              <>
                                <span className="code-property">skills</span>
                                <span>: [</span>
                                <span className="code-string">'React'</span>
                                <span>, </span>
                                <span className="code-string">'Node.js'</span>
                                <span>, </span>
                                <span className="code-string">'MySQL'</span>
                                <span>, </span>
                                <span className="code-string">'Java'</span>
                                <span>]</span>
                              </>
                            )}
                            {line.includes('passion') && (
                              <>
                                <span className="code-property">passion</span>
                                <span>: </span>
                                <span className="code-string">'Full Stack Development'</span>
                              </>
                            )}
                            {line === "};" && <span>{"};"}</span>}
                            {!line.includes('const') && 
                             !line.includes('name') && 
                             !line.includes('skills') && 
                             !line.includes('passion') && 
                             line !== "};" && 
                             line}
                          </>
                        )}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Animated background particles */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
