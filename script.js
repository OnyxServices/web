/* ==========================================================================
   CONFIGURACIÓN DE TAILWIND CSS
   ========================================================================== */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-base': '#06070a',
                'brand-surface': '#0e1017',
                'brand-card': 'rgba(18, 21, 31, 0.75)',
                'brand-blue': '#0066FF',
                'brand-cyan': '#00f0ff',
                'brand-violet': '#8A2BE2',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Space Grotesk', 'sans-serif'],
            }
        }
    }
};

/* ==========================================================================
   CONFIGURACIÓN TELEGRAM BOT
   ========================================================================== */
const TELEGRAM_CONFIG = {
    BOT_TOKEN: '8733147731:AAHpwG7WsgqFAva9fCG4bFI6MMZrMWg6aeM', // Ej: 123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ
    CHAT_ID: '6494169074'               // Ej: 987654321 o -100123456789
};

/* ==========================================================================
   CONTROLADOR DEL FORMULARIO CON ALPINE.JS
   ========================================================================== */
document.addEventListener('alpine:init', () => {
    Alpine.data('telegramContactForm', () => ({
        formSending: false,
        formSent: false,
        formError: false,
        errorMessage: '',
        formData: {
            name: '',
            email: '',
            projectType: 'Landing Page de Alta Conversión',
            message: ''
        },

        async submitForm() {
            this.formSending = true;
            this.formSent = false;
            this.formError = false;

            // Formatear mensaje con formato HTML para Telegram
            const textMessage = `🚀 <b>Nueva Solicitud de Presupuesto - Onyx Service</b>\n\n` +
                                `👤 <b>Nombre:</b> ${this.formData.name}\n` +
                                `📧 <b>Email:</b> ${this.formData.email}\n` +
                                `📌 <b>Proyecto:</b> ${this.formData.projectType}\n` +
                                `📝 <b>Requerimiento:</b>\n${this.formData.message}\n\n` +
                                `🕒 <i>Recibido: ${new Date().toLocaleString()}</i>`;

            try {
                const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CONFIG.CHAT_ID,
                        text: textMessage,
                        parse_mode: 'HTML'
                    })
                });

                const data = await response.json();

                if (data.ok) {
                    this.formSent = true;
                    // Resetear los campos
                    this.formData = {
                        name: '',
                        email: '',
                        projectType: 'Landing Page de Alta Conversión',
                        message: ''
                    };
                    setTimeout(() => {
                        this.formSent = false;
                    }, 6000);
                } else {
                    throw new Error(data.description || 'Error al comunicarse con Telegram');
                }
            } catch (err) {
                console.error('Error al enviar a Telegram:', err);
                this.formError = true;
                this.errorMessage = 'Hubo un inconveniente al enviar la solicitud. Por favor intenta vía WhatsApp.';
                setTimeout(() => {
                    this.formError = false;
                }, 6000);
            } finally {
                this.formSending = false;
                // Re-inicializar iconos Lucide para cualquier elemento reactivo
                this.$nextTick(() => {
                    if (window.lucide) window.lucide.createIcons();
                });
            }
        }
    }));
});

/* ==========================================================================
   INICIALIZACIÓN AL CARGAR EL DOM
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Iconos Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Actualizar año actual dinámicamente en el footer
    const currentYearElem = document.getElementById('currentYear');
    if (currentYearElem) {
        currentYearElem.textContent = new Date().getFullYear();
    }
});