import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Contianer } from '../components';
import { Header } from '../features ';
import { HomePage, UserPage, SettingsPage, SignupPage, LoginPage } from '../pages';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Contianer>
        <Switch>
          <Route path={`/login`}>
            <LoginPage />
          </Route>
          <Route path={`/signup`}>
            <SignupPage />
          </Route>
          <Route path={`/settings`}>
            <SettingsPage />
          </Route>
          <Route path={`/user/:userId`}>
            <UserPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Contianer>
      <Footer />
    </Router>
  );
};

export default Routes;
