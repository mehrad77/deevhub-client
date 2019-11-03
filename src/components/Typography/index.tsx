import React, { FC } from 'react';
import styled from 'styled-components';
import { prop, switchProp, theme } from 'styled-tools';
import { IStyledHeading, THeadingTags, IHeading, IText } from './types';

const TextColors = {
  blue: theme('colors.blue'),
  green: theme('colors.green'),
  white: theme('colors.white'),
  black: theme('colors.black'),
  seconfGrety: theme('colors.seconfGrety'),
  thisdGrey: theme('colors.thisdGrey'),
};

// All headings use the same styled-component "Heading" function
/**
 * @component
 */
const StyledHeading = styled.div<IStyledHeading>`
  font-size: ${({ level }) => 4 / level}em;
  font-weight: 300;
  margin: 0;
  padding: ${prop('padding', '0px')};
  color: ${switchProp('color', TextColors, theme('colors.textBlack'))};
`;

/**
 * @component
 */
export const Heading: FC<IHeading> = ({ level = 1, children, ...rest }) => {
  const headingLevel: THeadingTags = `h${level}` as THeadingTags;
  return (
    // the trick here is the "as={...}" to create dynamic tag name
    <StyledHeading as={headingLevel} level={level} {...rest}>
      {children}
    </StyledHeading>
  );
};

/**
 * @component
 */
export const Text = styled.span<IText>`
  display: inline-block;
  font-family: Work Sans;
  font-style: normal;
  font-weight: ${prop('weight', '400')};
  line-height: ${prop('lineHeight', '14px')};
  font-size: ${prop('size', '14px')};
  color: ${({ color }) => (color ? theme('colors.' + color) : theme('colors.textBlack'))};
  padding: ${prop('padding', '')};
  cursor: ${prop('cursor', '')};
  &.strong,
  strong {
    font-size: 35px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }
`;

/**
 * @component
 */
export const Paragraph = styled.p<IText>`
  font-size: ${prop('size', '14px')};
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: ${prop('weight', '300')};
  line-height: ${prop('lineHeight', '20px')};
  font-size: ${prop('size', '14px')};
  color: ${switchProp('color', TextColors, theme('colors.textBlack'))};
  padding: ${prop('padding', '')};
`;
