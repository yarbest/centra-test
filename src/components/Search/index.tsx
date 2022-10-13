import React, { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'src/components/Button';
import DropDown from 'src/components/DropDown/DropDown';
import { AirplaneSVG, GeoSVG, SearchSVG } from 'src/assets/svg';
import { useTypedSelector, useTypedDispatch } from 'src/hooks/reduxHooks';
import { OptionType } from 'src/components/DropDown/DropDownTypes';
import { setFlightFrom, setFlightTo } from 'src/store/slices/flightsSlice';
import s from './Search.module.scss';

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { flights, flightFrom, flightTo } = useTypedSelector((state) => state.flightsSlice);

  const dropdownOptions = useMemo(() => {
    const titleOption = { id: 0, value: 'Popular airports nearby', icon: <AirplaneSVG /> };
    const options = flights.map((flight) => ({ id: flight.id, value: `${flight.country}, ${flight.airport}`, icon: <GeoSVG /> }));
    return [titleOption].concat(options);
  }, [flights]);

  const handleSelectFrom = useCallback(
    (option?: OptionType) => {
      dispatch(setFlightFrom(flights.find((flight) => flight.id === option?.id)));
    },
    [dispatch, flights]
  );

  const handleSelectTo = useCallback(
    (option?: OptionType) => {
      dispatch(setFlightTo(flights.find((flight) => flight.id === option?.id)));
    },
    [dispatch, flights]
  );

  const handleSeacrhConfirm = () => {
    navigate('/search-results');
  };

  return (
    <div id="search" className={s.Search}>
      <DropDown
        className={s.Search__dropdown}
        onSelect={handleSelectFrom}
        options={dropdownOptions}
        selectedOptionProp={dropdownOptions.find((option) => option.id === flightFrom?.id)}
        title="From"
      />
      <div className={s.Search__divider}></div>
      <DropDown
        className={s.Search__dropdown}
        onSelect={handleSelectTo}
        options={dropdownOptions}
        selectedOptionProp={dropdownOptions.find((option) => option.id === flightTo?.id)}
        title="To"
      />
      <div className={s.Search__divider}></div>
      <Button onClick={handleSeacrhConfirm} primary className={s.Search__button} disabled={!flightFrom || !flightTo}>
        <SearchSVG />
      </Button>
    </div>
  );
};

export default Search;
