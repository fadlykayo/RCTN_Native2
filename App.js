import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Router, Scene, Stack } from 'react-native-router-flux';

import {
  Home,
  Login,
} from './src/pages';

import store from './src/configs';

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <Stack key="root" hideNavBar>
            <Scene key="login" component={Login} initial/>
            <Scene key="home" component={Home} />
          </Stack>
        </Router>
      </Provider>
    );
  };
};
