export interface Robot {
  name: string;
  description: string;
  years: string;
}

export const Takin: Robot = {
  name: 'Takin',
  description: 'Robot de la saison 2023',
  years: '2016-2019',
};

export const Markhor: Robot = {
  name: 'Markhor',
  description: 'Robot de la saison 2024',
  years: '2019-2023',
};

export const Rove: Robot = {
  name: 'Rove',
  description: 'Robot de la saison 2024',
  years: '2024-courant',
};

export const robots: Robot[] = [Takin, Markhor, Rove];
