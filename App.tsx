/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import store from './@core/redux';
import Product from './src/Products';
function App(): JSX.Element {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Product />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
