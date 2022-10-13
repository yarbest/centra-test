import React from 'react';

import Rating from 'src/components/Rating';
import Button from 'src/components/Button';
import { Flight, setFlightFrom, setFlightTo } from 'src/store/slices/flightsSlice';

import s from './Card.module.scss';
import { useTypedDispatch } from 'src/hooks/reduxHooks';

interface CardProps {
  flight: Flight;
}

const Card = ({ flight }: CardProps) => {
  const dispatch = useTypedDispatch();
  const handleChooseFrom = () => dispatch(setFlightFrom(flight));
  const handleChooseTo = () => dispatch(setFlightTo(flight));

  const maxConnections = 12;
  const connections = flight.directConnections;
  return (
    <div className={s.Card}>
      <img className={s.Card__background} src={flight.image} alt="" />
      <div className={s.Card__overlay} />
      <div className={s.Card__content}>
        <div className={s.Card__title}>
          <p className={s.Card__city}>{flight.country}</p>
          <Rating rating={flight.rating} />
        </div>
        <p className={s.Card__airport}>{flight.airport}</p>
        <p className={s.Card__connections_title}>Direct connections</p>
        <div className={s.Card__connections}>
          {connections.slice(0, maxConnections).map((connection, i) => (
            <span key={i}>{connection} |</span>
          ))}
          {connections.length > maxConnections && <span>+ {connections.length - maxConnections} more</span>}
        </div>
        <div className={s.Card__buttons}>
          <Button onClick={handleChooseFrom}>
            <a href="#search">Start from</a>
          </Button>
          <Button onClick={handleChooseTo}>
            <a href="#search">Go to</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
