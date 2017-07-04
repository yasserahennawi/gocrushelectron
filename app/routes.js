/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Homepage from './containers/Homepage';
import Loginpage from './containers/Loginpage';

export default () => (
  <App>
    <Switch>
      <Route path="/login" component={Loginpage} />
      <Route path="/" component={Homepage} />
    </Switch>
  </App>
);
