import React from 'react';

import Rating from 'src/components/Rating';
import Button from 'src/components/Button';

import warsaw from 'src/assets/images/warsaw.jpg';

import s from './Card.module.scss';

const connections = ['BCN', 'MAD', 'ALC', 'CDG', 'CIA', 'DXB', 'AMS', 'LIS', 'LCY', 'WAW', 'WRO', 'JFK', 2, 2, 2, 2, 2];

const Card = () => {
  const maxConnections = 12;
  return (
    <div className={s.Card}>
      <img className={s.Card__background} src={warsaw} alt="" />
      <div className={s.Card__overlay} />
      <div className={s.Card__content}>
        <div className={s.Card__title}>
          <p className={s.Card__city}>Warsaw</p>
          <Rating rating={3.5} />
        </div>
        <p className={s.Card__airport}>Warsaw Chopin Airport</p>
        <p className={s.Card__connections_title}>Direct connections</p>
        <div className={s.Card__connections}>
          {connections.slice(0, maxConnections).map((connection, i) => (
            <span key={i}>{connection} |</span>
          ))}
          {connections.length > maxConnections && <span>+ {connections.length - maxConnections} more</span>}
        </div>
        <div className={s.Card__buttons}>
          <Button>Start from</Button>
          <Button>Go to</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
