export enum EventTypes {
  RECRUTING = 'recruiting_event',
  WORKSHOP = 'workshop_event',
  COMPETITION = 'competition_event',
  SOCIAL = 'social_event',
}

export interface Event {
  title: string;
  description: string;
  date: Date;
  eventType: EventTypes;
}

export const events: Event[] = [
  {
    title: 'Portes ouvertes',
    description: 'Venez au portes ouvertes!',
    date: new Date('02/15/2025 09:00:00 GMT-0500'),
    eventType: EventTypes.COMPETITION,
  },
  {
    title: 'Soft lock de Rove',
    description:
      'Pas de développement ou nouveau projet. Période de test et réglage de problèmes.',
    date: new Date('05/12/2025 00:00:00 GMT-0500'),
    eventType: EventTypes.COMPETITION,
  },
  {
    title: 'SHIPPING DE ROVE',
    description: 'Tout doit être prêt pour le shipping de Rove!',
    date: new Date('06/16/2025 00:00:00 GMT-0500'),
    eventType: EventTypes.COMPETITION,
  },
  {
    title: 'EnRicH 2025',
    description: 'Bonjour le sommeil!',
    date: new Date('06/30/2025 00:00:00 GMT-0500'),
    eventType: EventTypes.COMPETITION,
  },
].sort((a, b) => a.date?.getTime() || 0 - b.date?.getTime() || 0);
