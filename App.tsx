/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';

import {Provider} from 'react-redux';
import store from './@core';
function App(): JSX.Element {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Text>Hello</Text>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
