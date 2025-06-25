import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap'

const Projects = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Sistema Integral de Nutrición',
      description: 'Aplicación web completa para nutricionistas con gestión de pacientes, citas y análisis nutricional.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MySQL', 'Express', 'Charts.js', 'JWT'],
      category: 'Full Stack',
      github: 'https://github.com/josezavala/nutrition-system',
      demo: 'https://nutrition-app-demo.vercel.app',
      details: {
        features: [
          'Sistema de autenticación con JWT y encriptado de contraseñas',
          'Gestión completa de pacientes y usuarios',
          'Programación y seguimiento de citas médicas',
          'Registro de mediciones corporales y progreso',
          'Cálculos nutricionales automáticos',
          'Gráficos interactivos para visualización de datos',
          'Tablas dinámicas con resultados y estadísticas',
          'Panel de administración para nutricionistas'
        ],
        highlights: 'Sistema profesional que automatiza el flujo de trabajo de consultorios nutricionales, mejorando la eficiencia y seguimiento de pacientes.'
      }
    },
    {
      id: 2,
      title: 'Página Web Manchester City',
      description: 'Sitio web moderno y responsivo dedicado al Manchester City con información actualizada.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'CSS3', 'Responsive Design', 'React Router'],
      category: 'Frontend',
      github: 'https://github.com/josezavala/manchester-city-site',
      demo: 'https://manchester-city-fan-site.vercel.app',
      details: {
        features: [
          'Diseño responsivo y moderno',
          'Navegación fluida con React Router',
          'Secciones informativas del club',
          'Galería de imágenes interactiva',
          'Animaciones CSS avanzadas',
          'Optimización para dispositivos móviles'
        ],
        highlights: 'Proyecto que demuestra habilidades de diseño frontend y pasión por el fútbol.'
      }
    },
    {
      id: 3,
      title: 'CRUD Nutricionista - HTML/CSS Puro',
      description: 'Sistema básico de gestión nutricional con frontend vanilla y backend robusto.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MySQL'],
      category: 'Full Stack',
      github: 'https://github.com/josezavala/nutrition-crud-vanilla',
      details: {
        features: [
          'Frontend desarrollado con HTML, CSS y JavaScript puro',
          'API REST con Node.js y Express',
          'Base de datos MySQL bien estructurada',
          'Operaciones CRUD completas',
          'Validación de datos del lado cliente y servidor',
          'Interfaz responsive sin frameworks'
        ],
        highlights: 'Demuestra dominio de tecnologías fundamentales sin dependencia de frameworks.'
      }
    },
    {
      id: 4,
      title: 'CRUD Nutricionista - Bootstrap',
      description: 'Evolución del sistema con interfaz mejorada usando Bootstrap para mejor UX.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'Bootstrap', 'JavaScript', 'Node.js', 'MySQL'],
      category: 'Full Stack',
      github: 'https://github.com/josezavala/nutrition-crud-bootstrap',
      details: {
        features: [
          'Interfaz moderna con Bootstrap 5',
          'Componentes responsivos y accesibles',
          'Formularios con validación avanzada',
          'Tablas dinámicas y paginación',
          'Modales para confirmaciones',
          'API REST optimizada'
        ],
        highlights: 'Mejora significativa en UX/UI manteniendo la robustez del backend.'
      }
    },
    {
      id: 5,
      title: 'CRUD Nutricionista - React',
      description: 'Versión moderna con React, ofreciendo una experiencia de usuario superior.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'React Hooks', 'Node.js', 'MySQL', 'Axios'],
      category: 'Full Stack',
      github: 'https://github.com/josezavala/nutrition-crud-react',
      details: {
        features: [
          'Componentes React reutilizables',
          'Estado global con Context API',
          'Hooks personalizados para lógica de negocio',
          'Formularios controlados con validación',
          'Navegación SPA con React Router',
          'Comunicación eficiente con API'
        ],
        highlights: 'Aplicación moderna que aprovecha al máximo las capacidades de React.'
      }
    },
    {
      id: 6,
      title: 'CRUD Nutricionista - Vue.js',
      description: 'Implementación con Vue.js demostrando versatilidad en frameworks frontend.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Vuex', 'Vue Router', 'Node.js', 'MySQL'],
      category: 'Full Stack',
      github: 'https://github.com/josezavala/nutrition-crud-vue',
      details: {
        features: [
          'Arquitectura de componentes Vue',
          'Gestión de estado con Vuex',
          'Enrutamiento dinámico',
          'Directivas personalizadas',
          'Transiciones y animaciones',
          'Reutilización de API del backend'
        ],
        highlights: 'Demuestra adaptabilidad y conocimiento de múltiples frameworks frontend.'
      }
    },
    {
      id: 7,
      title: 'Sistema de Gestión de Ferias',
      description: 'Aplicación de escritorio en Java para administración integral de ferias municipales.',
      image: '/api/placeholder/400/250',
      technologies: ['Java', 'Swing', 'MySQL', 'Eclipse IDE', 'JDBC'],
      category: 'Desktop',
      github: 'https://github.com/josezavala/fairs-management-java',
      details: {
        features: [
          'Interfaz gráfica profesional con Swing',
          'Gestión de expositores y stands',
          'Control de permisos y documentación',
          'Sistema de reportes automáticos',
          'Base de datos robusta con MySQL',
          'Arquitectura MVC bien estructurada',
          'Validaciones de datos integrales'
        ],
        highlights: 'Sistema empresarial para alcaldías que optimiza la gestión de eventos feriales.'
      }
    },
    {
      id: 8,
      title: 'Sistema de Subastas de Arte Virtual',
      description: 'Plataforma de escritorio para gestión de subastas de obras de arte con GUI avanzada.',
      image: '/api/placeholder/400/250',
      technologies: ['Java', 'Swing', 'MySQL', 'Threads', 'Design Patterns'],
      category: 'Desktop',
      github: 'https://github.com/josezavala/art-auction-java',
      details: {
        features: [
          'Sistema de subastas en tiempo real',
          'Gestión de usuarios y roles (subastadores, compradores)',
          'Catálogo de obras de arte con imágenes',
          'Historial de pujas y transacciones',
          'Reportes financieros automáticos',
          'Interfaz intuitiva para diferentes tipos de usuario',
          'Algoritmos de subasta automática'
        ],
        highlights: 'Aplicación compleja que maneja transacciones financieras y procesos de subasta en tiempo real.'
      }
    },
    {
      id: 9,
      title: 'TaskMaster - Gestor de Tareas',
      description: 'Aplicación web moderna para gestión de tareas con diseño tech y funcionalidades avanzadas.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Local Storage'],
      category: 'Frontend',
      github: 'https://github.com/josezavala/taskmaster-app',
      demo: 'https://taskmaster-productivity.netlify.app',
      details: {
        features: [
          'Diseño moderno con paleta de colores tech',
          'Gestión completa de tareas con CRUD',
          'Filtros avanzados por prioridad y estado',
          'Sistema de búsqueda en tiempo real',
          'Estadísticas y progreso visual',
          'Almacenamiento local persistente',
          'Interfaz responsive con efectos glassmorphism',
          'Notificaciones y alertas visuales'
        ],
        highlights: 'Aplicación de productividad con diseño moderno y UX excepcional, perfecta para organizar el trabajo diario.'
      }
    }
  ]

  const categories = ['Todos', 'Full Stack', 'Frontend', 'Desktop']
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const openModal = (project) => {
    setSelectedProject(project)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-5 section-padding">
      <Container>
        <div className="projects-section">
          <h2 className="section-title text-center">Proyectos Destacados</h2>
          
          {/* Category Filter */}
          <div className="text-center mb-4">
            <div className="project-filters">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'primary' : 'outline-primary'}
                  className="me-2 mb-2"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <Card key={project.id} className="project-card h-100 shadow-sm">
                <div className="project-image-container">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <Button 
                      variant="primary" 
                      className="me-2"
                      onClick={() => openModal(project)}
                    >
                      <i className="fas fa-eye"></i> Ver Detalles
                    </Button>
                    {project.demo && (
                      <Button 
                        variant="outline-light"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt"></i> Demo
                      </Button>
                    )}
                  </div>
                </div>
                
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="h5">{project.title}</Card.Title>
                    <Badge bg="secondary" className="category-badge">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>
                  
                  <div className="project-tech mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        bg="primary" 
                        className="me-1 mb-1"
                        style={{ fontSize: '0.75rem' }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <Button 
                      variant="outline-dark" 
                      size="sm" 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      <i className="fab fa-github"></i> Código
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => openModal(project)}
                    >
                      <i className="fas fa-info-circle"></i> Detalles
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Detail Modal */}
        <Modal show={showModal} onHide={closeModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject && (
              <>
                <Row>
                  <Col md={6}>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="img-fluid rounded mb-3"
                    />
                  </Col>
                  <Col md={6}>
                    <h5>Características Principales:</h5>
                    <ul>
                      {selectedProject.details.features.map((feature, index) => (
                        <li key={index} className="mb-1">{feature}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
                
                <div className="mt-3">
                  <h5>Tecnologías Utilizadas:</h5>
                  <div className="mb-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} bg="primary" className="me-2 mb-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="alert alert-info">
                  <strong>Destacado:</strong> {selectedProject.details.highlights}
                </div>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Cerrar
            </Button>
            {selectedProject?.github && (
              <Button 
                variant="dark"
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> Ver Código
              </Button>
            )}
            {selectedProject?.demo && (
              <Button 
                variant="primary"
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i> Ver Demo
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  )
}

export default Projects
