import React, { memo } from 'react';
import { StarFullSVG, StarHalfSVG, StarEmptySVG } from 'src/assets/svg';

import s from './Rating.module.scss';

interface RatingProps {
  rating: number;
}

const numToArr = (num: number) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(i);
  }
  return result;
};

const Rating = ({ rating }: RatingProps) => {
  const fullStarsNumber = Math.floor(rating); //3
  const emptyStarsNumber = Math.floor(5 - rating);
  const hasFloat = rating.toString().includes('.');

  return (
    <div className={s.Rating}>
      {numToArr(fullStarsNumber).map((i) => (
        <StarFullSVG key={i} />
      ))}

      {hasFloat && <StarHalfSVG />}

      {numToArr(emptyStarsNumber).map((i) => (
        <StarEmptySVG key={i} />
      ))}
    </div>
  );
};

export default memo(Rating);
