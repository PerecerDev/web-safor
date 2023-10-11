export const toAsk = [
        {
            title: "Tipo de Web",
            items: [
                {
                    type: "radio",
                    label: "¿Qué tipo de web necesitas?",
                    options: [
                        { label: "Presentación (Landing Page)", price: 300, checked: true },
                        { label: "Servicios", price: 500 },
                        { label: "Tienda Online", price: 1200 },
                        { label: "Personalizada", price: 2000 }
                    ],
                    name: "webType"
                }
            ]
        },
        {
            title: "Funcionalidades",
            items: [
                {
                    type: "checkbox",
                    label: "¿Qué funcionalidades necesita en su web?",
                    options: [
                        { label: "Formulario de contacto", price: 50 },
                        { label: "Sección de noticias (blog)", price: 200 },
                        { label: "Galería", price: 150 },
                        { label: "Sistema de reservas", price: 300 },
                        { label: "Integración con redes sociales", price: 100 },
                        { label: "Comentarios y valoraciones", price: 100 },
                        { label: "Suscripción a newsletter", price: 80 },
                        { label: "Área de miembros", price: 250 },
                        { label: "Chat en vivo", price: 150 },
                        { label: "Multilenguaje", price: 300 }
                    ],
                    name: "webFeatures"
                }
            ]
        },
        {
            title: "Identidad de Marca",
            items: [
                {
                    type: "radio",
                    label: "¿Tiene logotipo y estilo de marca?",
                    options: [
                        { label: "Tengo logo y estilo de marca", price: 0 },
                        { label: "Solo tengo logo", price: 150 },
                        { label: "Solo tengo estilo de marca", price: 150 },
                        { label: "No tengo ninguna", price: 300, checked: true  }
                    ],
                    name: "brandIdentity"
                }
            ]
        },
        {
            title: "Contenido para la Web",
            items: [
                {
                    type: "radio",
                    label: "¿Tiene contenido para su web?",
                    options: [
                        { label: "Sí, lo tengo", price: 0, checked: true  },
                        { label: "No, me gustaría contratarlo", price: 500 } // Este precio es un estimado general. Puede variar según el contenido.
                    ],
                    name: "webContent"
                },
                {
                    type: "checkbox",
                    label: "¿Qué tipo de contenido necesita?",
                    options: [
                        { label: "Redacción de textos", price: 200 },
                        { label: "Fotografía", price: 300 },
                        { label: "Producción de video", price: 500 }
                    ],
                    name: "contentTypes"
                }
            ]
        },
        {
            title: "Público Objetivo",
            items: [
                {
                    type: "radio",
                    label: "¿A qué público se dirige su negocio?",
                    options: [
                        { label: "Mujeres", price: 0 }, // No hay un costo adicional asociado a la demografía en este ejemplo.
                        { label: "Hombres", price: 0 },
                        { label: "Ambos", price: 0, checked: true  }
                    ],
                    name: "targetGender"
                },
                {
                    type: "checkbox",
                    label: "¿De qué edad?",
                    options: [
                        { label: "Entre 18 y 30", price: 0 },
                        { label: "Entre 31 y 40", price: 0 },
                        { label: "Entre 41 y 50", price: 0 },
                        { label: "Entre 51 y 60", price: 0 },
                        { label: "Más de 60", price: 0 },
                        { label: "Todas las edades", price: 0 }
                    ],
                    name: "targetAge"
                }
            ]
        },
        {
            title: "Dominio y Alojamiento",
            items: [
                {
                    type: "radio",
                    label: "¿Ya cuentan con un dominio y alojamiento web o necesitarán ayuda con esto?",
                    options: [
                        { label: "Tengo dominio y hosting", price: 0 },
                        { label: "Tengo dominio", price: 50 },
                        { label: "No tengo nada", price: 150, checked: true  }
                    ],
                    name: "domainHosting"
                }
            ]
        },
        {
            title: "Mantenimiento y Actualizaciones",
            items: [
                {
                    type: "radio",
                    label: "¿Le gustaría un paquete de mantenimiento para su sitio web?",
                    options: [
                        { label: "No, me encargaré yo mismo", price: 0, checked: true  },
                        { label: "Sí, mantenimiento mensual", price: 100 },
                        { label: "Sí, mantenimiento trimestral", price: 250 },
                        { label: "Sí, mantenimiento anual", price: 900 }
                    ],
                    name: "maintenancePackage"
                }
            ]
        },
        {
            title: "Integraciones Especiales",
            items: [
                {
                    type: "checkbox",
                    label: "¿Requiere alguna integración especial?",
                    options: [
                        { label: "Integración con CRM", price: 300 },
                        { label: "Integración con sistema de pago", price: 200 },
                        { label: "Integración con sistema de facturación", price: 250 },
                        { label: "APIs personalizadas", price: 500 },
                        { label: "Integración con tienda física", price: 400 }
                    ],
                    name: "specialIntegrations"
                }
            ]
        }
    ];











/*
<div>

    Lista de Precios de Diseño y Desarrollo Web
    1. Sitio Web Básico (1-5 páginas)

    Diseño estándar: 500€ - 1.500€
    2. Sitio Web Corporativo (5-15 páginas)

    Diseño personalizado: 1.500€ - 4.000€
    3. Tienda en Línea (eCommerce)

    Basada en WooCommerce o PrestaShop: 2.500€ - 7.000€
    4. Blog o Sitio Web de Revista

    Diseño personalizado: 1.000€ - 3.500€
    5. Sitio Web con Funcionalidades Específicas

    Plataformas de reserva, foros, etc.: Desde 4.000€
    6. Diseño Responsivo

    Adicional: 200€ - 1.000€
    7. Creación de Contenido

    Por página: 50€ - 150€
    Por hora: 20€ - 50€
    8. Mantenimiento

    Mensual: 50€ - 200€
    Componentes Web Individuales
    1. Diseño Web

    Plantilla estándar: 100€ - 500€
    Diseño personalizado: 500€ - 3.000€
    2. Página Principal (Landing Page)

    Básica: 100€ - 300€
    Avanzada: 300€ - 1.000€
    3. Páginas Internas

    Por página: 50€ - 200€
    4. Blog o Sección de Noticias

    Diseño básico: 200€ - 500€
    Diseño avanzado: 500€ - 1.000€
    5. Tienda en Línea (eCommerce)

    Integración básica: 500€ - 1.500€
    Personalizada: 1.500€ - 5.000€
    6. Formularios

    Básico: 50€ - 100€
    Avanzado: 100€ - 500€
    7. Galería o Portafolio

    Básica: 100€ - 300€
    Avanzada: 300€ - 700€
    8. Integraciones Externas

    Por integración: 100€ - 1.000€
    9. Diseño Responsivo Adicional

    200€ - 500€
    10. Optimización SEO

    Básica: 100€ - 500€
    Avanzada: 500€ - 2.000€
    Paquete de Diseño Web Personalizado
    1. Diseño Web con Plantilla Personalizada

    Plantilla estándar: 100€ - 500€
    Personalización de colores: 50€ - 150€
    2. Página Principal

    Básica: 100€ - 300€
    3. Blog o Sección de Noticias

    Diseño básico: 200€ - 500€
    4. Formulario de Contacto

    Básico: 50€ - 100€
    5. Servicios con Página Propia

    Por página (6 páginas): 300€ - 1.200€
    6. Página "Sobre Nosotros"

    50€ - 200€
    7. Funcionalidades Menores Adicionales

    50€ - 200€
    Desarrollo de Funcionalidades Específicas
    Solución Preexistente (Plugin WordPress): 50€ - 1.000€
    Sistema Personalizado: 1.000€ - 10.000€+
    Mantenimiento y Soporte: 50€ - 200€ mensuales


</div>
*/
