import React, { useState, FC } from 'react';
import Star from './Star';
import { StyledWrapper } from './Styles';
import { IStarRatingProps } from './types';

const StarRating: FC<IStarRatingProps> = ({ totalStars, editable, initialValue }) => {
  const [starsSelected, selectStar] = useState(initialValue ? initialValue : 0);
  return (
    <StyledWrapper className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={i < starsSelected} onClick={editable ? () => selectStar(i + 1) : undefined} />
      ))}
    </StyledWrapper>
  );
};

StarRating.defaultProps = {
  totalStars: 5,
  editable: false,
};

export default StarRating;
