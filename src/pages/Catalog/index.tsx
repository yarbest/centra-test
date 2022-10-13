import React from 'react';
import Card from 'src/components/Card';
import Search from 'src/components/Search';
import { useTypedSelector } from 'src/hooks/reduxHooks';

import s from './Catalog.module.scss';

const Catalog = () => {
  const { flights } = useTypedSelector((state) => state.flightsSlice);

  return (
    <div className={s.Catalog__container}>
      <Search />
      <div className={s.Catalog__cards}>
        {flights.slice(1).map((flight) => (
          <Card key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
