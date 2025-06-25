import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-4 bg-black text-white text-center">
      <Container>
        <Row>
          <Col>
            <p className="mb-2">
              &copy; {currentYear} José Zavala. Desarrollado con ❤️ y React
            </p>
            <p className="text-muted small mb-0">
              Full Stack Developer | React • Node.js • Java • MySQL
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
