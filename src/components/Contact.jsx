import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState('success')
  const [alertMessage, setAlertMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setAlertType('danger')
      setAlertMessage('Por favor, completa todos los campos.')
      setShowAlert(true)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setAlertType('danger')
      setAlertMessage('Por favor, ingresa un email válido.')
      setShowAlert(true)
      return
    }

    // Simulate form submission
    setAlertType('success')
    setAlertMessage('¡Mensaje enviado correctamente! Te contactaré pronto.')
    setShowAlert(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
  }

  const socialLinks = [
    {
      icon: 'fab fa-github',
      url: 'https://github.com/josezavala',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/jose-zavala-dev',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/jose_zavala_dev',
      label: 'Twitter',
      color: '#1da1f2'
    },
    {
      icon: 'fas fa-envelope',
      url: 'mailto:jose.zavala.dev@email.com',
      label: 'Email',
      color: '#ea4335'
    }
  ]

  return (
    <section id="contact" className="py-5 bg-dark text-white section-padding">
      <Container>
        <div className="contact-section">
          <div className="contact-intro">
            <h2 className="section-title text-white">Hablemos</h2>
            <p className="lead">
              ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea 
              y cómo puedo ayudarte a hacerla realidad.
            </p>
          </div>

        <Row className="mt-5">
          <Col lg={8} className="mx-auto">
            {showAlert && (
              <Alert 
                variant={alertType} 
                onClose={() => setShowAlert(false)} 
                dismissible
                className="mb-4"
              >
                {alertMessage}
              </Alert>
            )}

            <Form onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Nombre *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col className="mb-3">
                  <Form.Group>
                    <Form.Label>Asunto *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Asunto del mensaje"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col className="mb-3">
                  <Form.Group>
                    <Form.Label>Mensaje *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col className="text-center">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg"
                    className="px-5"
                  >
                    <i className="fas fa-paper-plane me-2"></i>
                    Enviar Mensaje
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        {/* Contact Info & Social Links */}
        <Row className="mt-5">
          <Col lg={6} className="mx-auto">
            <div className="contact-info text-center">
              <h4 className="mb-4">Otras formas de contacto</h4>
              
              <Row className="justify-content-center">
                <Col md={6} className="mb-3">
                  <div className="contact-method">
                    <i className="fas fa-envelope fa-2x text-primary mb-2"></i>
                    <h6>Email</h6>
                    <a 
                      href="mailto:jose.zavala.dev@email.com" 
                      className="text-light"
                    >
                      jose.zavala.dev@email.com
                    </a>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="contact-method">
                    <i className="fas fa-map-marker-alt fa-2x text-primary mb-2"></i>
                    <h6>Ubicación</h6>
                    <span className="text-light">Madrid, España</span>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Social Links */}
        <Row className="mt-4">
          <Col className="text-center">
            <h5 className="mb-4">Sígueme en redes sociales</h5>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link mx-2"
                  style={{ color: link.color }}
                  title={link.label}
                >
                  <i className={`${link.icon} fa-2x`}></i>
                </a>
              ))}
            </div>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col className="text-center">
            <div className="cta-section">
              <h4>¿Listo para empezar tu proyecto?</h4>
              <p className="lead">
                Trabajemos juntos para crear algo increíble
              </p>
              <Button 
                variant="outline-light" 
                size="lg"
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('home').scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Volver al inicio
              </Button>
            </div>
          </Col>
        </Row>
        </div>
      </Container>
    </section>
  )
}

export default Contact
