import warsaw from 'src/assets/images/warsaw.jpg';
import amsterdam from 'src/assets/images/amsterdam.jpg';
import dubai from 'src/assets/images/dubai.jpg';
import lisboa from 'src/assets/images/lisboa.jpg';
import paris from 'src/assets/images/paris.jpg';
import rome from 'src/assets/images/rome.jpg';

export const data = [
  {
    id: 1,
    country: 'Warsaw',
    airport: 'Warsaw Chopin Airport',
    image: warsaw,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 5,
  },
  {
    id: 2,
    country: 'Lisboa',
    airport: 'Aeropuerto da Portela',
    image: lisboa,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 4.5,
  },
  {
    id: 3,
    country: 'Amsterdam',
    airport: 'Luchthaven Schiphol',
    image: amsterdam,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 4.5,
  },
  {
    id: 4,
    country: 'Paris',
    airport: 'Aeroport de Charles-de-Gaulle',
    image: paris,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 3.5,
  },
  {
    id: 5,
    country: 'Rome',
    airport: 'Ciampino-Aeroporto Internazionale',
    image: rome,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 3,
  },
  {
    id: 6,
    country: 'Dubai',
    airport: 'Dubai International Airport',
    image: dubai,
    directConnections: ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK'],
    rating: 2.5,
  },
];
