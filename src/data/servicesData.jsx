import React from 'react';
import { Globe, Smartphone, Database, Compass, MessageSquareQuote, Video } from 'lucide-react';

export const servicesData = {
  dev: [
    {
      icon: <Globe size={32} />,
      title: "Web Apps",
      desc: "Plataformas web escalables, SaaS de alto rendimiento y landing pages ultrarrápidas con arquitecturas cloud modernas."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Apps",
      desc: "Aplicaciones nativas e híbridas con interfaces fluidas para iOS y Android que fidelizan a tus usuarios y convierten visitas."
    },
    {
      icon: <Database size={32} />,
      title: "Custom Software",
      desc: "Sistemas a medida, CRMs, ERPs, APIs y automatización de procesos internos que optimizan y blindan la operativa de tu negocio."
    }
  ],
  mkt: [
    {
      icon: <Compass size={32} />,
      title: "Estrategia & Grillas",
      desc: "Investigación de audiencia, planificación editorial estratégica y grillas mensuales de contenido para proyectar autoridad en tu sector."
    },
    {
      icon: <MessageSquareQuote size={32} />,
      title: "Social Media & Copy",
      desc: "Community management proactivo, atención y engagement de comunidad, reportes estadísticos mensuales y guionización persuasiva que conecta y fideliza."
    },
    {
      icon: <Video size={32} />,
      title: "Edición de Videos",
      desc: "Edición profesional de video para Reels y TikToks de ritmo dinámico y narrativa visual que retiene la atención de tu público."
    }
  ]
};

export default servicesData;
