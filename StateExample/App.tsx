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
import CounterScreen from './android/src/screens/CounterScreen';



 function App(): JSX.Element{
  return(
    <SafeAreaView>
        <CounterScreen/>
    </SafeAreaView>
  )

};

export default App;
