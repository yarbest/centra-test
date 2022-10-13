import React, { memo } from 'react';
import { StarFullSVG, StarHalfSVG, StarEmptySVG } from 'src/assets/svg';
import { numToArr } from 'src/utils';

import s from './Rating.module.scss';

interface RatingProps {
  rating: number;
}

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
