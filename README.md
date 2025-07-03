# Student Management System - Frontend

![React](https://img.shields.io/badge/React-19.1.0-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)
![CSS3](https://img.shields.io/badge/CSS3-Modern-orange.svg)
![Responsive](https://img.shields.io/badge/Design-Responsive-purple.svg)

Una aplicación web moderna y responsive desarrollada con React para gestionar información de estudiantes. Interfaz de usuario intuitiva y amigable que se conecta con una API REST de Spring Boot.

## 🚀 Características

- **Interfaz moderna y responsive** adaptable a dispositivos móviles y desktop
- **Formulario de registro** con validaciones en tiempo real
- **Lista de estudiantes** con funciones de búsqueda y filtrado
- **Operaciones CRUD completas** (Crear, Leer, Actualizar, Eliminar)
- **Búsqueda en tiempo real** por nombre y email
- **Filtrado por programa académico**
- **Confirmación de eliminación** con modal
- **Mensajes de éxito y error** informativos
- **Navegación intuitiva** con React Router
- **Diseño adaptativo** para móviles y tablets

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Header.js                    # Barra de navegación
│   ├── Header.css
│   ├── Home.js                      # Página de inicio
│   ├── Home.css
│   ├── StudentForm.js               # Formulario para crear/editar
│   ├── StudentForm.css
│   ├── StudentList.js               # Lista de estudiantes
│   └── StudentList.css
├── services/
│   ├── api.js                       # Configuración de Axios
│   └── studentService.js            # Servicios para API calls
├── App.js                           # Componente principal
├── App.css                          # Estilos globales
├── index.js                         # Punto de entrada
└── index.css                        # Estilos base
public/
├── index.html
├── favicon.ico
└── manifest.json
```

## 📋 Prerrequisitos

- **Node.js 16+** y npm
- **Backend API** ejecutándose en `http://localhost:8080`
- **Navegador web moderno** (Chrome, Firefox, Safari, Edge)

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/AnderssonProgramming/client-spring-rest-rt.git
cd client-spring-rest-rt
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
# React Environment Variables
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_APP_NAME=Student Management System
REACT_APP_VERSION=1.0.0

# Development settings
GENERATE_SOURCEMAP=true
```

### 4. Ejecutar la aplicación

```bash
npm start
```

La aplicación estará disponible en: `http://localhost:3000`

## 🎯 Funcionalidades Principales

### 🏠 Página de Inicio
- **Vista general del sistema** con descripción de características
- **Navegación rápida** a las principales funciones
- **Diseño atractivo** con gradientes y animaciones

### 📝 Registro de Estudiantes
- **Formulario intuitivo** con validaciones en tiempo real
- **Campos obligatorios:**
  - Nombre completo (mínimo 2 caracteres)
  - Email válido (único en el sistema)
  - Fecha de nacimiento (debe ser pasada, edad entre 16-100 años)
  - Programa académico (selección de lista predefinida)
- **Mensajes de error** descriptivos
- **Confirmación de éxito** antes de redireccionar

### 📋 Lista de Estudiantes
- **Tabla responsive** con información completa
- **Búsqueda en tiempo real** por nombre o email
- **Filtro por programa académico**
- **Acciones por estudiante:**
  - Editar información
  - Eliminar con confirmación
- **Información mostrada:**
  - Nombre completo
  - Email (con enlace para contacto)
  - Edad calculada automáticamente
  - Fecha de nacimiento formateada
  - Programa académico con badge visual

### ✏️ Edición de Estudiantes
- **Formulario pre-rellenado** con datos actuales
- **Validaciones consistentes** con el formulario de creación
- **Actualización en tiempo real** de la información

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario:** Gradiente azul-púrpura (#667eea → #764ba2)
- **Secundario:** Grises suaves (#e2e8f0, #f7fafc)
- **Éxito:** Verde (#38a169)
- **Error:** Rojo (#e53e3e)
- **Fondo:** Gris claro (#f7fafc)

### Tipografía
- **Fuente principal:** System fonts (San Francisco, Segoe UI, Roboto)
- **Peso:** Regular (400) para texto, Semi-bold (600) para títulos
- **Tamaños responsivos** adaptados a diferentes dispositivos

### Animaciones
- **Transiciones suaves** en hover states
- **Transformaciones sutiles** en botones y cards
- **Loading states** durante las operaciones

## 📱 Responsividad

### Breakpoints
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** 320px - 767px

### Adaptaciones Móviles
- **Navegación optimizada** para pantallas pequeñas
- **Formularios adaptados** con inputs más grandes
- **Tabla responsive** con scroll horizontal cuando es necesario
- **Botones de tamaño apropiado** para touch

## 🔗 Integración con Backend

### Servicios API
```javascript
// Crear estudiante
POST /api/students
{
  "name": "Juan Pérez",
  "email": "juan@email.com",
  "birthDate": "1995-05-15",
  "program": "Computer Science"
}

// Obtener todos los estudiantes
GET /api/students

// Actualizar estudiante
PUT /api/students/{id}

// Eliminar estudiante
DELETE /api/students/{id}

// Buscar por nombre
GET /api/students/search?name=Juan
```

### Manejo de Errores
- **Interceptores de Axios** para manejo centralizado
- **Mensajes de error** user-friendly
- **Fallbacks** para cuando la API no está disponible
- **Timeouts** configurables para requests

## 🧪 Scripts Disponibles

### Desarrollo
```bash
npm start                # Servidor de desarrollo
npm run build           # Construir para producción
npm test               # Ejecutar tests
npm run eject          # Exponer configuración de webpack
```

### Análisis
```bash
npm run build          # Generar build optimizado
npm install -g serve   # Instalar servidor estático
serve -s build         # Servir build de producción
```

## 🌟 Características Técnicas

### Dependencias Principales
- **React 19.1.0** - Framework de UI
- **React Router DOM** - Navegación y routing
- **React Hook Form** - Manejo de formularios
- **Axios** - Cliente HTTP para API calls

### Validaciones
- **Validación en tiempo real** mientras el usuario escribe
- **Múltiples tipos de validación:**
  - Campos requeridos
  - Formato de email
  - Longitud mínima
  - Fechas válidas
  - Rango de edad

### Performance
- **Lazy loading** de componentes
- **Memoización** de operaciones costosas
- **Debounce** en búsquedas
- **Optimización de re-renders**

## 📦 Construcción para Producción

### Build Optimizado
```bash
npm run build
```

### Optimizaciones Incluidas
- **Minificación** de CSS y JavaScript
- **Tree shaking** para eliminar código no usado
- **Compresión** de assets
- **Source maps** para debugging (opcional)
- **Cache busting** automático

### Deployment
```bash
# Build para producción
npm run build

# El folder 'build' contiene los archivos optimizados
# Copiar contenido a servidor web (Apache, Nginx, etc.)
```

## 🔧 Configuración Avanzada

### Variables de Entorno Personalizadas
```env
# API Configuration
REACT_APP_API_URL=https://api.midominio.com
REACT_APP_API_TIMEOUT=10000

# Feature Flags
REACT_APP_ENABLE_DEBUG=false
REACT_APP_ENABLE_ANALYTICS=true
```

### Proxy para Desarrollo
En `package.json`:
```json
{
  "proxy": "http://localhost:8080"
}
```

## 🚨 Solución de Problemas

### Error de CORS
1. Verificar que el backend tenga CORS configurado
2. Verificar la URL de la API en `.env`
3. Usar proxy en desarrollo si es necesario

### Problemas de Conexión
1. Verificar que el backend esté ejecutándose
2. Verificar la URL de la API
3. Revisar la consola del navegador para errores

### Problemas de Rendimiento
1. Abrir herramientas de desarrollador
2. Revisar la pestaña Network para requests lentos
3. Usar React DevTools para debugging

## 🧪 Testing

### Tests Incluidos
- **Tests de componentes** con React Testing Library
- **Tests de integración** para flujos completos
- **Tests de servicios** para API calls

### Ejecutar Tests
```bash
npm test                    # Modo watch
npm test -- --coverage     # Con cobertura
npm test -- --watchAll=false  # Ejecutar una vez
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para la nueva funcionalidad
3. Implementar cambios con tests
4. Verificar que el código siga las convenciones
5. Crear un Pull Request

### Convenciones de Código
- **ESLint** configurado para React
- **Prettier** para formateo automático
- **Conventional Commits** para mensajes de commit
- **Husky** para hooks de git (opcional)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 📚 Recursos Adicionales

- [React Documentation](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Axios Documentation](https://axios-http.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Design Patterns](https://web.dev/responsive-web-design-basics/)

---

## 🎯 Próximas Funcionalidades

- [ ] **Paginación** para listas grandes de estudiantes
- [ ] **Exportación** de datos a Excel/CSV
- [ ] **Importación** masiva de estudiantes
- [ ] **Dashboard** con estadísticas
- [ ] **Notificaciones** push
- [ ] **Tema oscuro** opcional
- [ ] **Internacionalización** (i18n)
- [ ] **PWA** (Progressive Web App)
