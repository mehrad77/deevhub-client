import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Contianer, Flex, Box, Text } from '../../components';
import { breakpoints } from '../../utils ';
import { HeaderWrapper, StyledImg, StyledLogo, StyledSmall } from './Styles';
import { AuthenticationContext } from '../../providers';

const Header: FC = () => {
  const { token, setToken } = useContext(AuthenticationContext);
  const isLoggedIn = token ? true : false;
  const isMobile = useMediaQuery({ query: breakpoints.phoneOnly });
  const Logout = () => {
    setToken();
  };
  return (
    <HeaderWrapper className="Header">
      <Contianer className="HeaderContianer">
        <Flex height="100%" alignItems="center" justifyContent="space-between">
          <Link to="/">
            <Flex justifyContent="center" alignItems="center" padding="15px">
              <StyledLogo src="/logo.svg" />
              {/* TODO: don't use inline style prop */}
              <Text size="28px" style={{ marginBottom: '-20px' }}>
                <strong>Deev</strong>hu
                <br />
                <StyledSmall>Deevin' Around</StyledSmall>
              </Text>
            </Flex>
          </Link>
          {!isMobile && (
            <>
              <Flex justifyContent="center" alignItems="center" padding="15px">
                <Text>My Campaigns</Text>
              </Flex>
              <Flex justifyContent="center" alignItems="center" padding="15px">
                <Text>Froum</Text>
              </Flex>
              <Flex justifyContent="center" alignItems="center" padding="15px">
                <Text>Studio</Text>
              </Flex>
              <Box flexGrow={1}></Box>
            </>
          )}
          <Flex justifyContent="center" alignItems="center" padding="15px">
            {/* TODO: change this padding to margin */}
            {isLoggedIn && (
              <>
                <Box>
                  <Text padding="0 10px 0 0" cursor="pointer" onClick={Logout}>
                    Logout
                  </Text>
                </Box>
                <Box>
                  <Link to="/settings">
                    <StyledImg alt="avatar" src="https://i.pravatar.cc/46" />
                  </Link>
                </Box>
              </>
            )}
            {!isLoggedIn && (
              <>
                <Box>
                  <Link to="/signup">
                    <Text padding="0 10px 0 0">SignUp</Text>
                  </Link>
                </Box>
                <Box>
                  <Link to="/login">
                    <Text padding="0 10px 0 0">Login</Text>
                  </Link>
                </Box>
              </>
            )}
          </Flex>
        </Flex>
      </Contianer>
    </HeaderWrapper>
  );
};

export default Header;
