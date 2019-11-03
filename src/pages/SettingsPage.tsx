import React from 'react';
import { Helmet } from 'react-helmet';
import { Flex } from '../components';
// import { SettingsTabs } from '../features ';

function SettingsPage() {
  return (
    <>
      <Helmet>
        <title> Setting </title>
      </Helmet>
      <Flex padding="40px 5px">{/* <SettingsTabs /> */}</Flex>
    </>
  );
}

export default SettingsPage;
