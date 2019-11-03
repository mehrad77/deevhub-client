import React, { FC } from 'react';
import styled from 'styled-components';
import { Icon } from '..';

const StyledStar = styled.span`
  margin: 1px;
`;

interface IStar {
  selected: boolean;
  onClick?: () => void;
}

const Star: FC<IStar> = ({ selected = false, onClick = () => {} }) => {
  return (
    <StyledStar className={selected ? 'star selected' : 'star'} onClick={onClick}>
      {selected ? <Icon type="star-f" color="orange" /> : <Icon type="star-o" color="orange" />}
    </StyledStar>
  );
};

export default Star;
