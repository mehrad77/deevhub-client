import React, { FC } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'reflexbox/styled-components';
import { prop } from 'styled-tools';
import { ICommonStyles, CustomFlexBoxProps } from './types';

const CFlex = styled(Flex)<ICommonStyles>`
  /* common syles */
  height: ${prop('height', 'auto')};
  width: ${prop('width', 'auto')};
  margin: ${prop('margin', '')};
  padding: ${prop('padding', '')};
`;

const CBox = styled(Box)<ICommonStyles>`
  /* common syles */
  height: ${prop('height', 'auto')};
  width: ${prop('width', 'auto')};
  margin: ${prop('margin', '')};
  padding: ${prop('padding', '')};
  text-align: ${prop('textAlign', '')};
  min-width: ${prop('minWidth', 'auto')};
`;

export const CustomFlex: FC<CustomFlexBoxProps> = ({ children, ...rest }) => {
  return <CFlex {...rest}>{children}</CFlex>;
};

export const CustomBox: FC<CustomFlexBoxProps> = ({ children, ...rest }) => {
  return <CBox {...rest}>{children}</CBox>;
};
