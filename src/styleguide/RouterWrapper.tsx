import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeWrapper } from '../providers';

const RouterWrapper: FC = ({ children }) => {
  return (
    <ThemeWrapper>
      <Router>{children}</Router>
    </ThemeWrapper>
  );
};

export default RouterWrapper;
