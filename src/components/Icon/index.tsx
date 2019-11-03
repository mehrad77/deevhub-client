import React, { FC } from 'react';
import styled from 'styled-components';
import { FaRegStar, FaStar, FaRetweet, FaAngleDown } from 'react-icons/fa';
import LoadingSpiner from './LoadingSpiner';
import { prop, theme } from 'styled-tools';
import { IStyledIcon, TIconName, IIconProps } from './types';

const StyledIcon = styled.span<IStyledIcon>`
  padding: ${prop('padding', 0)}px;
  font-size: ${prop('size', 0)}px;
  color: ${({ color }) => (color ? theme('colors.' + color) : 'black')};
  /* TODO: rewrite this lineHeight */
  line-height: 0px;

  &.icon-spin {
    animation: icon-spin 2s infinite linear;
  }

  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;

const getIcon = (name: TIconName) => {
  switch (name) {
    case 'down-o':
      return <FaAngleDown />;
    case 'retweet-o':
      return <FaRetweet />;
    case 'star-f':
      return <FaStar />;
    case 'star-o':
      return <FaRegStar />;
    case 'loading':
      return <LoadingSpiner />;
    default:
      return <LoadingSpiner />;
  }
};

const Icon: FC<IIconProps> = ({ type, size, padding, spin, ...rest }) => {
  return (
    <StyledIcon
      size={size}
      padding={padding}
      className={spin ? 'icon-spin' : ''}
      {...rest}
    >
      {getIcon(type)}
    </StyledIcon>
  );
};

Icon.defaultProps = {
  size: 12,
  padding: 0,
};

export default Icon;
