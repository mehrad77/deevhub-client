import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Flex } from '../components';
import { SignupForm } from '../features ';
import { LeftBox, RightBox } from './Styles';

const UserPage: FC = () => {
  return (
    <>
      <Helmet>
        <title> Signup </title>
      </Helmet>
      <Flex flexDirection="row">
        <LeftBox>
          <SignupForm />
        </LeftBox>
        <RightBox>
          <ul></ul>
        </RightBox>
      </Flex>
    </>
  );
};

export default UserPage;
