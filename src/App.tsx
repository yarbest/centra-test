import React from 'react';
import Card from './components/Card';
import Search from './components/Search';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.App__container}>
      <Search />
      <div className={s.App__cards}></div>
      <Card />
    </div>
  );
}

export default App;
