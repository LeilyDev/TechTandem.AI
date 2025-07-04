# **TechTandem.AI** - Plataforma Integral de Preparación para Entrevistas Técnicas

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-5.4.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/shadcn/ui-Latest-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui">
</div>

---

## **¿Por qué TechTandem.AI?**

Las entrevistas técnicas son fundamentales en el mundo de la tecnología, pero los simuladores tradicionales solo se enfocan en tus habilidades técnicas sin tener en cuenta la importancia del trabajo en equipo y las habilidades blandas. 

En la actualidad, las empresas no solo evalúan la capacidad para escribir código, sino también tu habilidad para:
- **Comunicar ideas** de manera clara y efectiva
- **Resolver problemas en equipo** de forma colaborativa
- **Adaptarte** a diferentes dinémicas de trabajo
- **Liderar** y ser liderado en proyectos técnicos
- **Manejar la presión** y el estres en situaciones desafiantes

**TechTandem.AI** es una plataforma innovadora que te prepara para entrevistas técnicas, tanto individuales como grupales, con un enfoque especial en el desarrollo de habilidades interpersonales que son cruciales para el éxito profesional en el mundo tech.

---

##  **Características Principales**

###  **Simulaciones Realistas**
- **Entrevistas Individuales**: Práctica con IA avanzada que evalúa tanto código como comunicación
- **Entrevistas Grupales**: Simulaciones colaborativas con otros usuarios en tiempo real
- **Tests Psicom�tricos**: Evaluación integral de habilidades cognitivas y interpersonales

### **Enfoque en Habilidades Blandas**
- **Comunicación**: Aprende a explicar conceptos técnicos de manera clara
- **Trabajo en Equipo**: Desarrolla habilidades de colaboración y liderazgo
- **Resolución de Problemas**: Practica thinking out loud y metodologías estructuradas
- **Manejo del Estrés**: Simula condiciones reales de entrevistas técnicas

###  **Análisis y Seguimiento**
- **Métricas Detalladas**: Progreso en habilidades técnicas y blandas
- **Feedback Personalizado**: Análisis de IA con recomendaciones específicas
- **Historial de Sesiones**: Seguimiento de tu evolución a lo largo del tiempo
- **Benchmarking**: Compara tu rendimiento con otros usuarios

### **Recursos Educativos**
- **Guías Prácticas**: Preparación específica por área tecnológica
- **Videos Educativos**: Contenido curado para diferentes niveles
- **Tests Interactivos**: Evaluaciones en JavaScript, SQL, Networking y más
- **Biblioteca de Recursos**: Acceso a material premium de preparación

### **Comunidad y Colaboraci�n**
- **Foros de Discusión**: Intercambia experiencias con otros candidatos
- **Grupos de Estudio**: Forma equipos para preparación conjunta
- **Networking**: Conecta con profesionales y mentores
- **Eventos Virtuales**: Participa en workshops y masterclasses

---

## **Arquitectura Técnica**

### **Frontend Stack**
- **React 18.3.1** con TypeScript para una base sólida
- **Vite** como bundler para desarrollo ultrarrápido
- **Tailwind CSS** + **shadcn/ui** para diseño moderno y accesible
- **Zustand** para gestión de estado eficiente
- **React Router v6** para navegación fluida

### **Características Técnicas**
- **46 Componentes UI** reutilizables (shadcn/ui)
- **Responsive Design** mobile-first
- **Soporte Dark/Light Mode**
- **Optimización de Performance** con React SWC
- **Rutas Protegidas** con sistema de autenticación
- **Animaciones Suaves** con Tailwind Animate

### **Estructura del Proyecto**
```
TechTandem.AI/
src/
components/          # Componentes reutilizables
    ui/                 # 46 componentes shadcn/ui
    Header.tsx          # Navegación principal mejorada
    SimulationList.tsx  # Grid de simulaciones
    UserDropdown.tsx    # Perfil de usuario
    pages/               # Páginas principales
    Home.tsx           # Landing page
    Dashboard.tsx      # Panel de control
    Simulations.tsx    # Hub de simulaciones
    Resources.tsx      # Biblioteca de recursos
    Community.tsx      # Plataforma social
hooks/              # Hooks personalizados
utils/              # Utilidades y helpers
styles/             # Estilos globales
public/                 # Assets estáticos
config/                 # Configuración del proyecto
```

---

## **Instalación y Configuración**

### **Prerrequisitos**
- Node.js 18+ y npm/yarn
- Git para clonar el repositorio

### **Instalación Local**
```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/techtandem-ai.git

# 2. Navega al directorio
cd techtandem-ai

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev

# 5. Abre tu navegador en http://localhost:8080
```

### **Scripts Disponibles**
- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta el linter para verificar código
- `npm run preview` - Previsualiza la build de producción

---

##**Casos de Uso**

### **Para Candidatos**
-  Practica entrevistas técnicas en un entorno seguro
- Desarrolla habilidades de comunicación técnica
- Recibe feedback detallado sobre tu rendimiento
- Prepárate para diferentes tipos de entrevistas



## **Tecnolog�as Utilizadas**

### **Core Technologies**
- **React 18.3.1** - Biblioteca principal de UI
- **TypeScript 5.5.3** - Tipado estático
- **Vite 5.4.1** - Build tool y dev server
- **Tailwind CSS 3.4.11** - Framework CSS utility-first

### **UI/UX Libraries**
- **shadcn/ui** - Componentes accesibles y modernos
- **Radix UI** - Primitivos de UI de alta calidad
- **Lucide React** - Iconografía consistente
- **Tailwind Animate** - Animaciones fluidas

### **State Management**
- **Zustand 5.0.6** - Gestión de estado ligera
- **TanStack Query 5.56.2** - Manejo de estado servidor
- **React Hook Form 7.53.0** - Formularios performantes

### **Routing & Navigation**
- **React Router DOM 6.26.2** - Routing declarativo
- **Protected Routes** - Autenticación y autorización

### **Development Tools**
- **ESLint 9.9.0** - Linting y calidad de código
- **PostCSS 8.4.47** - Procesamiento CSS
- **Autoprefixer** - Compatibilidad de navegadores

---

##  **Sistema de Diseño**

### **Paleta de Colores**
- **Primary**: `#569c9f` (Tech Teal)
- **Secondary**: `#4a9297` (Tech Teal Dark)
- **Accent Colors**: Green, Blue, Orange, Purple
- **Neutral**: Gray scale para textos y backgrounds

### **Tipografía**
- **Font Family**: Inter (sistema de fonts moderna)
- **Weights**: 400, 500, 600, 700
- **Responsive scaling** para diferentes dispositivos

### **Componentes UI**
- **Consistent spacing** basado en sistema de 8px
- **Rounded corners** con border-radius variables
- **Shadows** con mútiples niveles de elevació
- **Animations** suaves con duración optimizada

---



**� 2024 TechTandem.AI - Preparaci�n Integral para Entrevistas T�cnicas**