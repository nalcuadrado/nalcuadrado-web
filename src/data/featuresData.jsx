import React from 'react';
import { Zap, Activity, Shield, Clock } from 'lucide-react';

export const featuresData = [
  {
    icon: <Zap size={28} />,
    title: "Velocidad",
    desc: "Despliegues ágiles y sprints estructurados sin sacrificar calidad, escalabilidad ni rendimiento de código."
  },
  {
    icon: <Activity size={28} />,
    title: "Data-Driven",
    desc: "Cada decisión de arquitectura, contenido y marketing está respaldada por analíticas reales y métricas de conversión."
  },
  {
    icon: <Shield size={28} />,
    title: "Seguridad & Arquitectura",
    desc: "Código modular, mantenible y bajo los más altos estándares de la industria, garantizando cero deuda técnica."
  },
  {
    icon: <Clock size={28} />,
    title: "Acompañamiento Integral",
    desc: "Comunicación transparente, soporte post-lanzamiento y evolución continua de tus activos tecnológicos y de marca."
  }
];
