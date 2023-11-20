/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,

} from 'react-native';

import ColorGenerator from './src/screens/ColorGenerator';


function App(): JSX.Element {
  return(
  <SafeAreaView>
      <ColorGenerator />
  </SafeAreaView>
  )
}



export default App;
