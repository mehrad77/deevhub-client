import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Flex } from '../components';
import { LoginForm } from '../features ';
import { LeftBox, RightBox } from './Styles';

const UserPage: FC = () => {
  return (
    <>
      <Helmet>
        <title> Login </title>
      </Helmet>
      <Flex flexDirection="row">
        <LeftBox>
          <LoginForm />
        </LeftBox>
        <RightBox>
          <ul></ul>
        </RightBox>
      </Flex>
    </>
  );
};

export default UserPage;
