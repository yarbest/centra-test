import React from 'react';
import Button from 'src/components/Button';
import { useMediaQuery } from 'src/hooks/useMediaQuery';
import { numToArr } from 'src/utils';

import s from './SearchResults.module.scss';

interface FlightRouteProps {
  from?: string;
  to?: string;
  routes?: { id: number; changes: string[] }[];
}

const FlightRoute = ({ from, to, routes }: FlightRouteProps) => {
  const mediumScreen = useMediaQuery('(max-width: 1199px)');
  const smallScreen = useMediaQuery('(max-width: 767px)');

  const maxDots = mediumScreen ? (smallScreen ? 18 : 25) : 40;

  const getDotsBetweenOutline = (changesLength: number) => {
    const rangesWithDots = changesLength! + 1;
    const dotsBetweenOutline = Math.floor(maxDots / rangesWithDots);
    return dotsBetweenOutline;
  };

  const isOutlined = (idx: number, changesLength: number) => {
    return idx > 0 && idx < maxDots - 2 && idx % getDotsBetweenOutline(changesLength) === 0;
  };

  return (
    <>
      {routes?.map((route) => {
        const changes = [...route.changes];
        return (
          <div className={s.FlightRoute}>
            <div className={s.FlightRoute__route}>
              <span className={s.FlightRoute__contraction}>{from}</span>
              <div className={s.FlightRoute__dots}>
                <div className={s.FlightRoute__dot_outline} />
                {numToArr(maxDots).map((i) => (
                  <div key={i} className={isOutlined(i, route.changes.length) ? s.FlightRoute__dot_outline : s.FlightRoute__dot}>
                    {isOutlined(i, route.changes.length) && <span className={s.FlightRoute__change}>{changes.shift()}</span>}
                  </div>
                ))}
                <div className={s.FlightRoute__dot_outline} />
              </div>
              <span className={s.FlightRoute__contraction}>{to}</span>
            </div>

            <div className={s.FlightRoute__right}>
              <span>{route.changes.length} changes</span>
              <Button primary>Go!</Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FlightRoute;
