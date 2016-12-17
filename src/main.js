import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Panel from './containers/Panel'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

ReactDOM.render(
  <Provider store={configureStore}>
      <Panel />
  </Provider>
  , document.getElementById('app'));
