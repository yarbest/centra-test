import React from 'react';
import Card from './components/Card';
import Search from './components/Search';

import { useTypedSelector } from 'src/hooks/reduxHooks';
import s from './App.module.scss';

function App() {
  const { flights } = useTypedSelector((state) => state.flightsSlice);

  return (
    <div className={s.App__container}>
      <Search />
      <div className={s.App__cards}>
        {flights.map((flight) => (
          <Card key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
}

export default App;
