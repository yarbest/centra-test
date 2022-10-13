import React from 'react';
import Button from 'src/components/Button';
import DropDown from 'src/components/DropDown/DropDown';
import { AirplaneSVG, GeoSVG, SearchSVG } from 'src/assets/svg';

import s from './Search.module.scss';

const dropdownOptions = [
  { id: 0, value: 'Popular airports nearby', icon: <AirplaneSVG /> },
  { id: 1, value: 'Wrocław, Wrocław Copernicus Airport', icon: <GeoSVG /> },
  { id: 2, value: 'Wrocław, Wrocław Copernicus Airport', icon: <GeoSVG /> },
  { id: 4, value: 'Wrocław, Wrocław Copernicus Airport', icon: <GeoSVG /> },
];

const Search = () => {
  return (
    <div className={s.Search}>
      <DropDown className={s.Search__dropdown} options={dropdownOptions} title="From" />
      <div className={s.Search__divider}></div>
      <DropDown className={s.Search__dropdown} options={dropdownOptions} title="To" />
      <div className={s.Search__divider}></div>
      <Button primary className={s.Search__button}>
        <SearchSVG />
      </Button>
    </div>
  );
};

export default Search;
