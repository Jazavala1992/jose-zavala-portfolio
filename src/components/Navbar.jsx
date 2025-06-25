import React, { useState, useEffect } from 'react'
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)

      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <BootstrapNavbar 
      expand="lg" 
      variant="dark" 
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <BootstrapNavbar.Brand 
          href="#home" 
          className="fw-bold brand-logo"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('home')
          }}
        >
          JZ
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              { id: 'home', label: 'Inicio' },
              { id: 'about', label: 'Sobre mí' },
              { id: 'skills', label: 'Habilidades' },
              { id: 'projects', label: 'Proyectos' },
              { id: 'contact', label: 'Contacto' }
            ].map(({ id, label }) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                className={`nav-link-custom ${activeSection === id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(id)
                }}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
