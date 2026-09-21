import React from 'react';
import { 
  Code2, 
  Smartphone, 
  LayoutTemplate,
  Rocket,
  TrendingUp,
  Zap 
} from 'lucide-react';
import { contactInfo } from './navigationData';

export const softwarePackages = [
  {
    id: "soft-1",
    title: "Web de Inicio",
    subtitle: "Presencia y Contacto rápido",
    icon: <LayoutTemplate className="w-6 h-6" />,
    features: [
      "Página de una pantalla (Landing Page): Navegación rápida y directa.",
      "Diseño 100% móvil: Adaptado perfectamente a celulares.",
      "Estructura clave (5 secciones): Inicio, Servicios, Nosotros, Galería/Testimonios y Contacto.",
      "Redirección a WhatsApp: El formulario de contacto envía los datos del cliente directo a tu chat.",
      "Objetivo: Mostrar profesionalismo y recibir mensajes listos para cerrar ventas.",
      "Plus: Soporte y mantenimiento gratuito por 1 mes."
    ],
    price: "Ref 120"
  },
  {
    id: "soft-2",
    title: "Plataforma a Medida",
    subtitle: "Gestión, Control y Automatización",
    icon: <Code2 className="w-6 h-6" />,
    features: [
      "Sistema web privado: Acceso seguro con usuario y contraseña para tu equipo.",
      "Panel de administración: Controla clientes, inventarios, citas o pedidos desde un solo lugar.",
      "Bases de datos seguras: Información organizada, filtrable y siempre disponible.",
      "Procesos automáticos: Envío de correos o alertas de estado sin intervención manual.",
      "Experiencia móvil rápida: Funciona en celulares como una app fluida, pero sin requerir descargas (PWA).",
      "Plus: Soporte y mantenimiento gratuito por 2 meses."
    ],
    price: "A cotizar"
  },
  {
    id: "soft-3",
    title: "Ecosistema Móvil",
    subtitle: "App Nativa y Control Central",
    icon: <Smartphone className="w-6 h-6" />,
    features: [
      "App Móvil Real: Descargable desde la App Store (iPhone) y Google Play (Android).",
      "Panel Web de Control (Cerebro): Sistema web paralelo para administrar todo lo que sucede en la app en tiempo real.",
      "Funciones premium: Integración de pasarelas de pago y perfiles de usuario.",
      "Notificaciones Push: Mensajes directos a la pantalla del celular de tus clientes para aumentar ventas y retención.",
      "Objetivo: Escalar tu marca al máximo nivel tecnológico del mercado.",
      "Plus: Soporte y mantenimiento gratuito por 4 meses."
    ],
    price: "A cotizar"
  }
];

export const marketingPackages = [
  {
    id: "mark-1",
    title: "Impulso Base",
    subtitle: "Presencia Activa",
    icon: <Rocket className="w-6 h-6" />,
    features: [
      "3 posts semanales: 1 video semanal, 1 carrusel y 1 post de tendencia semanal.",
      "1 historia interdiaria.",
      "Estrategia de contenido mensual.",
      "Grilla de contenido mensual.",
      "Redacción de copies y optimización de la cuenta."
    ],
    price: "Ref 150"
  },
  {
    id: "mark-2",
    title: "Crecimiento al Cuadrado",
    subtitle: "Expansión Sólida",
    icon: <TrendingUp className="w-6 h-6" />,
    features: [
      "2 videos semanales.",
      "1 carrusel semanal + 1 carrusel adicional al mes.",
      "1 post de tendencia semanal.",
      "1 historia diaria.",
      "Estrategia de contenido mensual.",
      "Grilla de contenido mensual.",
      "Reporte estadístico mensual.",
      "Redacción de copies y optimización de la cuenta.",
      "1 campaña de ads mensual."
    ],
    price: "Ref 280"
  },
  {
    id: "mark-3",
    title: "Potencia Exponencial",
    subtitle: "Dominio Total del Nicho",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "4 videos semanales.",
      "2 carruseles semanales.",
      "1 post de tendencia semanal.",
      "2 historias diarias.",
      "Estrategia de contenido mensual.",
      "Grilla de contenido mensual.",
      "Reporte estadístico mensual.",
      "Redacción de copies y optimización de la cuenta.",
      "2 campañas de ads mensual."
    ],
    price: "Ref 350"
  }
];

export const getPackageWhatsAppUrl = (pkg, category) => {
  const categoryLabel = category === 'software' ? 'Desarrollo de Software' : 'Marketing';
  const isQuote = pkg.price.toLowerCase().includes('cotizar');
  const actionText = isQuote ? 'cotizar' : 'contratar';
  
  const text = `¡Hola, equipo de N²!\n\nVengo desde la web y me gustaría ${actionText} el plan de ${categoryLabel}:\n- *Paquete:* ${pkg.title}\n- *Precio / Referencia:* ${pkg.price}\n- *Enfoque:* ${pkg.subtitle}\n\n¿Podrían darme más detalles y los siguientes pasos?`;
  
  return `${contactInfo.whatsappUrl}?text=${encodeURIComponent(text)}`;
};
