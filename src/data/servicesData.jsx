import React from 'react';
import { Globe, Smartphone, Database, Target, Search, SquarePen } from 'lucide-react';

export const servicesData = {
  dev: [
    {
      icon: <Globe size={32} />,
      title: "web apps",
      desc: "Plataformas web escalables, SaaS y landing pages ultrarrápidas construidas con React y arquitecturas modernas."
    },
    {
      icon: <Smartphone size={32} />,
      title: "mobile apps",
      desc: "Aplicaciones nativas e híbridas con interfaces fluidas para iOS y Android que retienen a tus usuarios."
    },
    {
      icon: <Database size={32} />,
      title: "custom soft",
      desc: "Sistemas a medida, CRMs, ERPs y APIs robustas diseñadas para automatizar y optimizar tus procesos internos."
    }
  ],
  mkt: [
    {
      icon: <Target size={32} />,
      title: "ads & perf",
      desc: "Campañas en Meta, Google y TikTok enfocadas 100% en conversión, reducción de CPA y maximización del ROAS."
    },
    {
      icon: <Search size={32} />,
      title: "seo & growth",
      desc: "Auditorías técnicas, estrategias de contenido y posicionamiento orgánico para dominar los resultados de búsqueda."
    },
    {
      icon: <SquarePen size={32} />,
      title: "branding",
      desc: "Diseño de identidad visual, rediseño de interfaces de usuario y optimización de la tasa de conversión (CRO)."
    }
  ]
};
