import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { breakpoints } from '../../utils ';
import { Flex, Box, Text, Contianer } from '..';

const StyledFooter = styled.footer`
  background: ${theme('colors.thisdGrey')};
  height: 100px;
`;

const StyledBox = styled(props => <Box {...props} />)`
  padding: 15px;
  @media ${breakpoints.phoneOnly} {
    padding: 5px;
    &.hideOnMobile {
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter className="Footer">
      <Contianer>
        <Flex
          flexDirection={['column', 'row']}
          height="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <StyledBox>
            <Text color="white">© DeevHub Copyright 2019</Text>
          </StyledBox>
          <Box className="hideOnMobile" flexGrow={1}></Box>
          <StyledBox>
            <Text color="white">Privacy Policy</Text>
          </StyledBox>
          <StyledBox>
            <Text color="white">Terms & Conditions</Text>
          </StyledBox>
        </Flex>
      </Contianer>
    </StyledFooter>
  );
};

export default Footer;
