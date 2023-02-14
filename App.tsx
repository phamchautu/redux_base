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
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Product />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
