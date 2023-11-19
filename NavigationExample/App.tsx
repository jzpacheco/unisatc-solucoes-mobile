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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import HomeScreen from './src/screens/HomeScreen';
import FinalScreen from './src/screens/FinalScreen';
import ListScreen from './src/screens/ListScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const navigator = createStackNavigator (
  {
      Home: HomeScreen,
      List: ListScreen,
      Final: FinalScreen
  },
  {
      initialRouteName: "Home",
      defaultNavigationOptions: {
          title:"App",
      },
  }
);

export default createAppContainer(navigator);