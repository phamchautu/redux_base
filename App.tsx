/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import store from './@core/redux';
import Counter from './src/Counter';
function App(): JSX.Element {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Counter />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
