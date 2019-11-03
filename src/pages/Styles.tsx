import React from 'react';
import styled from 'styled-components';
import { Box } from '../components';

export const LeftBox = styled(props => <Box {...props} />)`
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 10px;
  width: 50%;
`;

export const RightBox = styled(props => <Box {...props} />)`
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 10px;
  width: 50%;
`;
