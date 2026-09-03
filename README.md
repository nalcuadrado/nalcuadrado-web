# n² (n al cuadrado) - Plataforma Web

Sitio web oficial de **n²**, agencia digital boutique especializada en desarrollo de software de alto rendimiento y marketing de resultados.

---

## 📁 Estructura del Proyecto

El código está completamente modularizado por capas de responsabilidad para facilitar el mantenimiento y la escalabilidad:

```text
nalcuadrado/
├── public/                     # Archivos estáticos
├── src/
│   ├── assets/                 # Recursos gráficos locales
│   ├── components/
│   │   ├── common/             # Componentes transversales
│   │   │   ├── AnimatedSection.jsx   # Efecto revelado al hacer scroll
│   │   │   └── BackgroundGlows.jsx   # Luces difuminadas y fondo en cuadrícula
│   │   ├── layout/             # Estructuras de diseño globales
│   │   │   ├── Navbar.jsx            # Barra de navegación flotante y responsive
│   │   │   └── Footer.jsx            # Pie de página curvo con redes y links
│   │   └── sections/           # Secciones modulares de la landing page
│   │       ├── Hero/           # Sección Hero (Inicio)
│   │       │   ├── HeroSection.jsx      # Contenedor principal con Parallax 3D
│   │       │   ├── FloatingPill.jsx     # Widget 3D interactivo Dev / Mkt
│   │       │   └── HeroDecorations.jsx  # Estrellas SVG, cursores y aurora
│   │       ├── Services/       # Sección Servicios
│   │       │   ├── ServicesSection.jsx  # Selector con tabs interactivos
│   │       │   └── ServiceCard.jsx      # Tarjetas glassmorphic con hover
│   │       ├── Team/           # Sección Equipo
│   │       │   ├── TeamSection.jsx      # Muestra de perfiles clave
│   │       │   └── FlipCard.jsx         # Tarjetas 3D con efecto de giro 180°
│   │       ├── Vision/         # Sección Visión & Filosofía
│   │       │   ├── VisionSection.jsx    # Misión, métricas y diferenciadores
│   │       │   └── FeatureCard.jsx      # Tarjetas de pilares n²
│   │       └── Contact/        # Sección Contacto
│   │           ├── ContactSection.jsx   # Canales directos e intro
│   │           └── ContactForm.jsx      # Formulario minimalista funcional
│   ├── data/                   # Información y contenidos desacoplados
│   │   ├── navigationData.js   # Enlaces de navegación, redes y contacto
│   │   ├── servicesData.jsx    # Datos e iconos de servicios Dev y Marketing
│   │   ├── teamData.js         # Perfiles del equipo, bios, habilidades y fotos
│   │   └── featuresData.jsx    # Pilares de valor del diferenciador n²
│   ├── hooks/                  # Hooks personalizados de React
│   │   ├── useOnScreen.js      # Detección de visibilidad con IntersectionObserver
│   │   └── useScrollPosition.js# Detección del scroll vertical
│   ├── App.jsx                 # Componente raíz orquestador
│   ├── index.css               # Estilos globales, Tailwind, 3D flips y animaciones
│   └── main.jsx                # Punto de montaje en el DOM
├── index.html                  # Plantilla HTML con tipografías y metadatos SEO
├── package.json                # Dependencias (React 18, Vite, Tailwind, Lucide)
├── tailwind.config.js          # Configuración de tema, colores (#D9F844, #9D4EDD)
├── postcss.config.js           # PostCSS con Tailwind y Autoprefixer
└── vite.config.js              # Configuración del servidor de desarrollo Vite
```

---

## 🚀 Cómo Ejecutar el Proyecto

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   La aplicación se abrirá en `http://localhost:3000`.

3. **Construir para producción**:
   ```bash
   npm run build
   ```
