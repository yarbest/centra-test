import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import FlightRoute from './FlightRoute';
import { useTypedSelector } from 'src/hooks/reduxHooks';
import { ArrowLeftSVG, FlightSVG, FlightSmallSVG } from 'src/assets/svg';

import s from './SearchResults.module.scss';

const SearchResults = () => {
  const navigate = useNavigate();
  const { flightFrom, flightTo } = useTypedSelector((state) => state.flightsSlice);

  useEffect(() => {
    if (!flightFrom || !flightTo) navigate('/catalog');
  }, [flightFrom, flightTo, navigate]);

  return (
    <div className={s.SearchResults}>
      <div className={s.SearchResults__background}>
        <img className={s.SearchResults__background__from} src={flightFrom?.image} alt="country" />
        <img className={s.SearchResults__background__to} src={flightTo?.image} alt="country" />
        <div className={s.SearchResults__background__overlay} />
      </div>

      <div className={s.SearchResults__body}>
        <FlightSVG className={s.SearchResults__flight_icon} />
        <FlightSmallSVG className={s.SearchResults__flight_icon_small} />

        <div className={s.SearchResults__body__from}>
          <div onClick={() => navigate('/catalog')} className={s.SearchResults__back}>
            <ArrowLeftSVG />
            <span>Back</span>
          </div>

          <p className={s.SearchResults__country}>{flightFrom?.country}</p>
          <p className={s.SearchResults__airport}>{flightFrom?.airport}</p>
        </div>
        <div className={s.SearchResults__body__to}>
          <p className={s.SearchResults__country}>{flightTo?.country}</p>
          <p className={s.SearchResults__airport}>{flightTo?.airport}</p>
        </div>
        <div className={s.SearchResults__routes}>
          <FlightRoute from={flightFrom?.contraction} to={flightTo?.contraction} routes={flightFrom?.routes} />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
