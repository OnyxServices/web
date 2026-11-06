# ⚡ Onyx Service — Web de Alto Rendimiento

Sitio web corporativo y portafolio interactivo de alto rendimiento enfocado en la conversión, diseñado para servicios de desarrollo web moderno, e-commerce, automatizaciones e integraciones backend.

---

## 🚀 Características Principales

- **Diseño Cyber-Dark & Glassmorphism:** Interfaz visual moderna orientada a productos tecnológicos y SaaS.
- **Micro-interactividad Reactiva:** Menú móvil, navbar dinámico al hacer scroll y filtrado en vivo de proyectos sin recarga de página.
- **Mobile-First & 100% Responsivo:** Adaptado para teléfonos, tablets y pantallas de escritorio de alta resolución.
- **Iconografía Vectorial:** Integración completa con iconos SVG nítidos y ligeros.
- **Formulario Interactivo:** Manejo de estados de carga y confirmación de envío visual, listo para conectar a Supabase o cualquier backend/API.
- **Canales de Conversión Directa:** Enlaces directos y botón flotante hacia WhatsApp configurados con mensajes predeterminados.

---

## 🛠️ Stack Tecnológico

| Herramienta | Rol en el Proyecto |
| :--- | :--- |
| **HTML5 Semántico** | Estructura accesible y optimizada para SEO. |
| **Tailwind CSS (CDN)** | Framework de utilidades CSS para diseño rápido, responsivo y consistente. |
| **Alpine.js (v3)** | Framework reactivo ligero para control de estado (filtros, drawer móvil, formularios). |
| **Lucide Icons** | Biblioteca de iconos vectoriales modernos y minimalistas. |
| **Google Fonts** | Tipografías *Inter* y *Space Grotesk*. |

---

## 📁 Estructura del Proyecto

```text
├── index.html       # Archivo único auto-contenido con toda la estructura, lógica y diseño
└── README.md        # Documentación del proyecto

💻 Inicio Rápido

No requiere instalación de dependencias, Node.js ni compilación previa.

    Clonar o descargar el repositorio:
    Bash

    git clone https://github.com/tu-usuario/onyx-service.git
    cd onyx-service

    Abrir en el navegador:

        Puedes abrir directamente el archivo index.html con doble clic.

        O iniciar un servidor local rápido (recomendado):
        Bash

        # Usando npx
        npx serve .

        # O con Python
        python -m http.server 8000

⚙️ Personalización Clave

    Número de WhatsApp: Modifica los enlaces que contienen wa.me/53910527 con tu código de país y número telefónico.

    Correo de Contacto: Reemplaza djotoniel59@gmail.com por tu correo corporativo.

    Integración con Supabase: En la sección del formulario de contacto dentro de index.html, puedes conectar el evento @submit con el cliente oficial de Supabase:
    JavaScript

    const { data, error } = await supabase
      .from('leads')
      .insert([leadData]);

📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de utilizarlo y adaptarlo para tus propios desarrollos.
