import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:zavachs1992@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <Container>
        <Row>
          <Col className="text-center mb-5">
            <h2 className="section-title">Contacto</h2>
            <p className="lead">¿Tienes un proyecto en mente? ¡Hablemos!</p>
          </Col>
        </Row>

        <Row>
          {/* Contact Information */}
          <Col lg={4} className="mb-4">
            <div className="contact-info">
              <h4 className="mb-4">Información de Contacto</h4>
              
              <div className="contact-item mb-4">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h6>Email</h6>
                  <a href="mailto:zavachs1992@gmail.com" className="text-primary">
                    zavachs1992@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item mb-4">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h6>Ubicación</h6>
                  <span>La Paz, Bolivia</span>
                </div>
              </div>

              <div className="contact-item mb-4">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-details">
                  <h6>Disponibilidad</h6>
                  <span>Lunes - Viernes: 9:00 AM - 6:00 PM (BOT)</span>
                </div>
              </div>

              <div className="social-links-contact mt-4">
                <a href="https://github.com/josezavala" className="social-link me-3" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/josezavala" className="social-link me-3" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:zavachs1992@gmail.com" className="social-link">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={8}>
            <Card className="bg-secondary border-0">
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Nombre *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-dark text-white border-0"
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
                          required
                          className="bg-dark text-white border-0"
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
                          required
                          className="bg-dark text-white border-0"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-4">
                      <Form.Group>
                        <Form.Label>Mensaje *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="bg-dark text-white border-0"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button type="submit" variant="primary" size="lg">
                      <i className="fas fa-paper-plane me-2"></i>
                      Enviar Mensaje
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact