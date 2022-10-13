import warsaw from 'src/assets/images/warsaw.jpg';
import amsterdam from 'src/assets/images/amsterdam.jpg';
import dubai from 'src/assets/images/dubai.jpg';
import lisboa from 'src/assets/images/lisboa.jpg';
import paris from 'src/assets/images/paris.jpg';
import rome from 'src/assets/images/rome.jpg';
import barcelona from 'src/assets/images/barcelona.jpg';
import berlin from 'src/assets/images/berlin.jpg';
import london from 'src/assets/images/london.jpg';

export const data = [
  {
    id: 0,
    country: 'Popular Airports',
    airport: 'Nearby',
    image: warsaw,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 5,
    contraction: 'POP',
    routes: [
      { id: 1, changes: ['AMS'] },
      { id: 2, changes: ['AMS', 'CDG'] },
      { id: 3, changes: ['AMS', 'CDG', 'ALC'] },
    ],
  },
  {
    id: 1,
    country: 'Warsaw',
    airport: 'Warsaw Chopin Airport',
    image: warsaw,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 5,
    contraction: 'WAW',
    routes: [
      { id: 1, changes: ['AMS'] },
      { id: 2, changes: ['AMS', 'CDG'] },
      { id: 3, changes: ['AMS', 'CDG', 'ALC'] },
    ],
  },
  {
    id: 2,
    country: 'Lisboa',
    airport: 'Aeropuerto da Portela',
    image: lisboa,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 4.5,
    contraction: 'LIS',
    routes: [
      { id: 1, changes: ['AMS'] },
      { id: 2, changes: ['AMS', 'CDG'] },
      { id: 3, changes: ['AMS', 'CDG', 'ALC'] },
    ],
  },
  {
    id: 3,
    country: 'Amsterdam',
    airport: 'Luchthaven Schiphol',
    image: amsterdam,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 4.5,
    contraction: 'AMS',
    routes: [
      { id: 1, changes: ['AMS'] },
      { id: 2, changes: ['AMS', 'CDG'] },
      { id: 3, changes: ['AMS', 'CDG', 'ALC'] },
    ],
  },
  {
    id: 4,
    country: 'Paris',
    airport: 'Aeroport de Charles-de-Gaulle',
    image: paris,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 3.5,
    contraction: 'PAR',
    routes: [
      { id: 1, changes: ['AMS'] },
      { id: 2, changes: ['AMS', 'CDG'] },
    ],
  },
  {
    id: 5,
    country: 'Rome',
    airport: 'Ciampino-Aeroporto Internazionale',
    image: rome,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 3,
    contraction: 'ROM',
    routes: [
      { id: 1, changes: ['AMS'] },
      { id: 2, changes: ['AMS', 'CDG'] },
    ],
  },
  {
    id: 6,
    country: 'Dubai',
    airport: 'Dubai International Airport',
    image: dubai,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 2.5,
    contraction: 'DUB',
    routes: [
      { id: 1, changes: ['AMS'] },
      { id: 2, changes: ['AMS', 'CDG'] },
    ],
  },

  {
    id: 7,
    country: 'Berlin',
    airport: 'Flughafen Berlin Brandenburg',
    image: berlin,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 4,
    contraction: 'BER',
    routes: [
      { id: 1, changes: ['AMS'] },
      { id: 2, changes: ['AMS', 'CDG'] },
    ],
  },
  {
    id: 8,
    country: 'Barcelona',
    airport: 'Aeropuerto de Barcelona- El Prat',
    image: barcelona,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 3.5,
    contraction: 'BAR',
    routes: [
      { id: 1, changes: ['AMS'] },
      { id: 2, changes: ['AMS', 'CDG'] },
    ],
  },
  {
    id: 9,
    country: 'London',
    airport: 'London City Airport',
    image: london,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 2.5,
    contraction: 'LON',
    routes: [
      { id: 1, changes: ['AMS'] },
      { id: 2, changes: ['AMS', 'CDG'] },
    ],
  },
];
