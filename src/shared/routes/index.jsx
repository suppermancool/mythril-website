/**
 * Root router of the app.
 */

import ApiKeyPage from 'components/ApiKeyPage';
import Background from 'components/Background';
import DocsPage from 'components/DocsPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Error404Page from 'components/Error404Page';
import HomePage from 'components/HomePage';
import NewsPage from 'components/NewsPage';
import React from 'react';

import { Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <div>
      <Background />
      <Header />
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={ApiKeyPage} exact path="/api-key" />
        <Route component={DocsPage} exact path="/docs" />
        <Route component={NewsPage} exact path="/news" />
        <Error404Page />
      </Switch>
      <Footer />
    </div>
  );
}
