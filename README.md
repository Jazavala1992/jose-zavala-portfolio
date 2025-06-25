# 🚀 Portfolio Personal - José Zavala

Portfolio profesional desarrollado en React que showcases mis habilidades como desarrollador Full Stack, destacando proyectos reales y experiencia técnica.

![Portfolio Preview](https://via.placeholder.com/800x400/0B1426/00D4FF?text=José+Zavala+Portfolio)

## 🌟 Características Principales

- **Diseño Moderno**: Paleta de colores tech con gradientes y efectos glassmorphism
- **Responsive**: Optimizado para todos los dispositivos
- **SPA**: Single Page Application con navegación fluida
- **Animaciones**: Transiciones suaves y efectos visuales atractivos
- **Performance**: Optimizado para carga rápida y excelente UX

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Framework principal
- **Vite** - Build tool y desarrollo
- **React Bootstrap** - Componentes UI
- **CSS3** - Estilos personalizados con variables CSS
- **Font Awesome** - Iconografía

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **VS Code** - Editor principal
- **Git** - Control de versiones

## 📂 Estructura del Proyecto

```
portfolio-react/
├── public/
│   ├── images/          # Imágenes del portfolio
│   └── vite.svg
├── src/
│   ├── components/      # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/          # Recursos estáticos
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos globales
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Reset de estilos
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Paleta de Colores

```css
:root {
  /* Colores Principales */
  --primary-color: #00D4FF;     /* Cian brillante */
  --bg-dark: #0B1426;           /* Azul oscuro */
  --bg-secondary: #1E3A5F;      /* Azul medio */
  --accent-orange: #FF6B35;     /* Naranja */
  
  /* Texto */
  --text-primary: #FFFFFF;      /* Blanco */
  --text-secondary: #B0B8C1;    /* Gris claro */
  
  /* Estados */
  --success-color: #10B981;     /* Verde */
  --warning-color: #F59E0B;     /* Amarillo */
  --danger-color: #EF4444;      /* Rojo */
}
```

## 📋 Proyectos Destacados

### 🏥 Sistema Integral de Nutrición
**Stack**: React, Node.js, MySQL, Charts.js, JWT
- Sistema completo para consultorios nutricionales
- Gestión de pacientes, citas y mediciones
- Gráficos interactivos y reportes automáticos
- Autenticación segura con JWT

### ⚽ Página Web Manchester City
**Stack**: React, CSS3, React Router
- Sitio web responsivo del club de fútbol
- Navegación SPA fluida
- Galería interactiva y animaciones CSS

### 🏢 Sistema de Gestión de Ferias (Java)
**Stack**: Java, Swing, MySQL, JDBC
- Aplicación de escritorio para alcaldías
- Gestión integral de eventos feriales
- Interfaz gráfica profesional con Swing

### 🎨 Sistema de Subastas de Arte (Java)
**Stack**: Java, Swing, MySQL, Threads
- Plataforma de subastas virtuales
- Sistema de pujas en tiempo real
- Gestión de usuarios y transacciones

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/josezavala/portfolio-react.git
cd portfolio-react
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Construir para producción**
```bash
npm run build
```

5. **Previsualizar build**
```bash
npm run preview
```

## 🌐 Deploy

El portfolio está configurado para ser desplegado en:
- **Vercel** (Recomendado)
- **Netlify**
- **GitHub Pages**

### Deploy en Vercel
```bash
npm install -g vercel
vercel --prod
```

## 📱 Responsive Design

- **Desktop**: Optimizado para pantallas grandes
- **Tablet**: Layout adaptado para tablets
- **Mobile**: Interfaz móvil-first con navegación optimizada

## 🤝 Contribuciones

Si encuentras algún bug o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

**José Zavala** - Desarrollador Full Stack

- 📧 Email: jose.zavala.dev@email.com
- 💼 LinkedIn: [linkedin.com/in/jose-zavala-dev](https://linkedin.com/in/jose-zavala-dev)
- 🐱 GitHub: [github.com/josezavala](https://github.com/josezavala)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

⭐ **¡No olvides darle una estrella al repo si te gustó!** ⭐+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
