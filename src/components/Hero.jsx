import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

/**
 * Hero Component - Professional portfolio landing section
 * Features: Profile photo, typewriter animation, and interactive code display
 */
const Hero = () => {
  // State management for typewriter animation
  const [displayedText, setDisplayedText] = useState('')
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  
  // Profile image state management
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Code lines for typewriter animation with syntax highlighting
  const codeLines = [
    { text: "const", type: "keyword" },
    { text: " dev = {", type: "punctuation" },
    { text: "\n  ", type: "whitespace" },
    { text: "name", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "'José Zavala'", type: "string" },
    { text: ",", type: "punctuation" },
    { text: "\n  ", type: "whitespace" },
    { text: "location", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "'La Paz, Bolivia'", type: "string" },
    { text: ",", type: "punctuation" },
    { text: "\n  ", type: "whitespace" },
    { text: "skills", type: "property" },
    { text: ": [", type: "punctuation" },
    { text: "'React'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Node.js'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'MySQL'", type: "string" },
    { text: "],", type: "punctuation" },
    { text: "\n  ", type: "whitespace" },
    { text: "passion", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "'Full Stack Development'", type: "string" },
    { text: "\n};", type: "punctuation" }
  ]

  // Profile image fallback paths
  const imagePaths = [
    '/images/profile.jpeg',
    '/images/profile.jpg', 
    '/images/profile.png'
  ]

  // Enhanced typewriter effect with character-by-character animation
  useEffect(() => {
    if (currentLine < codeLines.length) {
      const currentLineData = codeLines[currentLine]
      const timeout = setTimeout(() => {
        if (currentChar < currentLineData.text.length) {
          setDisplayedText(prev => prev + currentLineData.text[currentChar])
          setCurrentChar(prev => prev + 1)
        } else {
          setCurrentLine(prev => prev + 1)
          setCurrentChar(0)
        }
      }, currentLineData.text === '\n  ' ? 200 : 50) // Faster typing for whitespace
      
      return () => clearTimeout(timeout)
    }
  }, [currentLine, currentChar, codeLines])

  /**
   * Smooth scroll navigation to page sections
   * @param {string} sectionId - Target section ID
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  /**
   * Handle profile image loading error
   */
  const handleImageError = () => {
    console.log('Profile image failed to load, showing fallback avatar')
    setImageError(true)
  }

  /**
   * Handle successful profile image load
   */
  const handleImageLoad = () => {
    console.log('Profile image loaded successfully')
    setImageLoaded(true)
    setImageError(false)
  }

  /**
   * Render syntax highlighted code
   */
  const renderCodeWithSyntax = () => {
    let renderedCode = ''
    let currentIndex = 0
    
    return codeLines.slice(0, currentLine + 1).map((line, index) => {
      if (index === currentLine) {
        // Current line being typed
        const visibleText = line.text.slice(0, currentChar)
        return (
          <span key={index} className={`code-${line.type}`}>
            {visibleText}
          </span>
        )
      } else {
        // Completed lines
        return (
          <span key={index} className={`code-${line.type}`}>
            {line.text}
          </span>
        )
      }
    })
  }

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          
          {/* Profile Photo Column */}
          <Col lg={3} md={4} className="text-center mb-4 mb-lg-0">
            <div className="profile-photo-container">
              
              <div className="profile-photo">
                {!imageError ? (
                  <img 
                    src={imagePaths[0]}
                    alt="José Zavala - Desarrollador Full Stack"
                    className={`profile-image ${imageLoaded ? 'loaded' : 'loading'}`}
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                    loading="lazy"
                  />
                ) : (
                  // Professional fallback avatar
                  <div className="profile-fallback">
                    <div className="initials">JZ</div>
                    <div className="fallback-text">José Zavala</div>
                  </div>
                )}
              </div>
              
              {/* Professional badge */}
              <div className="photo-badge">
                <i className="fas fa-code" aria-hidden="true"></i>
                <span>Full Stack Developer</span>
              </div>
            </div>
          </Col>
          
          {/* Main Content Column */}
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
              
              <div className="hero-location mb-3">
                <i className="fas fa-map-marker-alt me-2" aria-hidden="true"></i>
                <span>La Paz, Bolivia</span>
              </div>
              
              <div className="hero-buttons">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="me-3 mb-2"
                  onClick={() => scrollToSection('projects')}
                  aria-label="Ver proyectos de desarrollo"
                >
                  <i className="fas fa-code me-2" aria-hidden="true"></i>
                  Ver Proyectos
                </Button>
                
                <Button 
                  variant="outline-light" 
                  size="lg"
                  className="mb-2"
                  href="mailto:zavachs1992@gmail.com"
                  aria-label="Contactar por email"
                >
                  <i className="fas fa-envelope me-2" aria-hidden="true"></i>
                  Contactar
                </Button>
              </div>
            </div>
          </Col>
          
          {/* Code Animation Column */}
          <Col lg={4} className="d-none d-lg-block">
            <div className="code-animation">
              <div className="code-body">
                <pre className="code-display">
                  <code>
                    {renderCodeWithSyntax()}
                    {currentLine < codeLines.length && (
                      <span className="cursor">|</span>
                    )}
                  </code>
                </pre>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero