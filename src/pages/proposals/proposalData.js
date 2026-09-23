/**
 * Datos estratégicos para la propuesta personalizada de Victoria Fernández x N².
 * Centralizado en el módulo dedicado de propuestas.
 */
export const victoriaProposalData = {
  clientName: 'Victoria Fernández',
  agencyName: 'N² AGENCY',
  year: '2026',
  badge: 'ESTRATEGIA DIGITAL',
  titlePrefix: 'Planes Personalizados para',
  quote: {
    part1: 'Atraemos con el impacto visual de un instante,',
    part2: 'pero conectamos y sanamos en la profundidad de tu conversación en YouTube.'
  },
  description: 'Una ruta diseñada para optimizar tu presencia en formatos cortos, delegar lo operativo y potenciar el espacio donde reside tu verdadera esencia.',
  polaroid: {
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQEJRQ37ggQBxQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724896004952?e=2147483647&v=beta&t=1wg-uvejWyt86ADcbSlhSAVo25gpEWVahfMMtFEUBlc',
    altText: 'Victoria Fernández - Tu verdadera esencia',
    caption: 'Tu verdadera esencia'
  },
  plans: [
    {
      id: 'plan1',
      tabLabel: 'Plan Brote',
      shortName: 'Brote',
      tabIcon: 'fa-solid fa-seedling',
      tabIconColor: 'text-green-600 opacity-70',
      title: 'Plan 1: Brote',
      subtitle: 'Mantenimiento constante y presencia activa.',
      price: 400,
      currency: '$',
      period: '/ mes',
      iconClass: 'fa-solid fa-seedling',
      iconBoxClass: 'bg-green-100 text-green-600',
      priceColorClass: 'text-green-700',
      tabThemeBg: '#F4FAEF',
      isFeatured: false,
      deliverables: [
        { label: '2 Carruseles semanales:', text: '1 Informativo + 1 Trend.', isBold: true },
        { label: '2 Videos cortos semanales.', text: '', isBold: true },
        { label: '2 Videos largos al mes (YouTube):', text: 'Formato de 5 a 8 minutos.', isBold: true },
        { label: '4 Historias semanales.', text: '', isBold: true },
        { text: 'Guionización de todos los videos.', isBold: false },
        { text: 'Estrategia de contenido quincenal.', isBold: false },
        { text: 'Grilla de contenido quincenal.', isBold: false },
        { text: 'Redacción de copys persuasivos.', isBold: false },
        { text: 'Optimización de la cuenta.', isBold: false },
        { text: 'Reporte estadístico mensual.', isBold: false }
      ],
      summary: {
        heading: 'Ideal para:',
        description: 'Mantener la interacción y asegurar que tu audiencia tenga contenido constante.',
        stats: [
          { value: '4', label: 'Posts Cortos/Sem' },
          { value: '2', label: 'YouTube/Mes' }
        ]
      }
    },
    {
      id: 'plan2',
      tabLabel: 'Plan Expansión',
      shortName: 'Expansión',
      tabIcon: 'fa-solid fa-fire-flame-curved',
      tabIconColor: 'text-pink-500 opacity-80',
      title: 'Plan 2: Expansión',
      subtitle: 'Equilibrio perfecto entre atracción masiva y fidelización profunda.',
      price: 500,
      currency: '$',
      period: '/ mes',
      iconClass: 'fa-solid fa-fire-flame-curved',
      iconBoxClass: 'bg-[#F72585] text-white shadow-lg shadow-pink-200',
      priceColorClass: 'text-[#F72585]',
      tabThemeBg: '#FDE8F1',
      isFeatured: true,
      deliverables: [
        { label: '2 Carruseles semanales:', text: '1 Informativo + 1 Trending.', isBold: true, highlightColor: 'text-[#2D1B4E]' },
        { label: '5 Videos cortos semanales:', text: 'Presencia diaria de alto alcance.', isBold: true, highlightColor: 'text-[#2D1B4E]' },
        { label: '1 Video de YouTube SEMANAL:', text: 'Crecimiento acelerado en tu plataforma de autoridad.', isBold: true, isPill: true },
        { text: 'Guionización de todos los videos.', isBold: false },
        { text: 'Estrategia y Grilla de contenido quincenal.', isBold: false },
        { text: 'Redacción de copys persuasivos y Optimización de cuenta.', isBold: false },
        { label: 'Publicación del contenido:', text: 'Te libramos de la operatividad al 100%.', isBold: true, highlightColor: 'text-[#F72585]' },
        { label: 'Monitorización de Redes:', text: 'Atención constante de las redes.', isBold: true, highlightColor: 'text-[#F72585]' },
        { text: 'Reporte estadístico mensual.', isBold: false }
      ],
      summary: {
        badge: 'Crecimiento Equilibrado',
        description: 'Potenciamos tu marca y le damos visibilidad constante, logrando que tu cuenta crezca de forma orgánica y saludable.',
        stats: [
          { value: '7', label: 'Posts Cortos/Sem', isSecondary: false },
          { value: '4', label: 'YouTube/Mes', isSecondary: true }
        ],
        footerBadge: 'Incluye Publicación y Monitorización'
      }
    },
    {
      id: 'plan3',
      tabLabel: 'Plan Dosel',
      shortName: 'Dosel',
      tabIcon: 'fa-solid fa-crown',
      tabIconColor: 'text-purple-600 opacity-80',
      title: 'Plan 3: Dosel',
      subtitle: 'Dominio omnicanal y gestión comunitaria 360.',
      price: 750, // Tarifa actualizada requerida por el usuario
      currency: '$',
      period: '/ mes',
      iconClass: 'fa-solid fa-crown',
      iconBoxClass: 'bg-purple-100 text-purple-700 border border-purple-200',
      priceColorClass: 'text-purple-700',
      tabThemeBg: '#E8E2F2',
      isFeatured: false,
      deliverables: [
        { label: '4 Carruseles semanales.', text: '', isBold: true },
        { label: '7 Videos semanales.', text: '', isBold: true },
        { label: '7 Historias semanales.', text: '', isBold: true },
        { label: '2 Videos largos a la semana (YouTube).', text: '', isBold: true },
        { text: 'Guionización de TODOS los formatos.', isBold: false },
        { text: 'Estrategia y Grilla de contenido quincenal.', isBold: false },
        { text: 'Redacción de copys y Optimización de la cuenta.', isBold: false },
        { label: 'Publicación del contenido.', text: '', isBold: true, highlightColor: 'text-purple-700' },
        { label: 'Community Management Completo:', text: 'Atención constante con moderación y respuesta directa a comentarios.', isBold: true, highlightColor: 'text-purple-700' },
        { text: 'Reporte estadístico mensual.', isBold: false }
      ],
      summary: {
        heading: 'Máximo Alcance',
        description: 'Para delegar el 100% de la operatividad y la interacción. Requiere un volumen muy alto de grabación de tu parte.',
        stats: [
          { value: '11', label: 'Posts Cortos/Sem' },
          { value: '8', label: 'YouTube/Mes' }
        ],
        footerBadge: 'Delegación Total de CM + Respuestas'
      }
    }
  ]
};
