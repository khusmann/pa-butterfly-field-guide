import React from 'react';

import HomeScreen from './screens/HomeScreen.js';
import AboutScreen from './screens/AboutScreen.js';
import AllScreen from './screens/AllScreen.js';
import ByGroupScreen from './screens/ByGroupScreen.js';
import WhatScreen from './screens/WhatScreen.js';

import { createStackNavigator, createAppContainer } from "react-navigation";
import ButterflyScreen from './screens/ButterflyScreen.js';

HomeScreen.navigationOptions = {
  header: null,
};

AboutScreen.navigationOptions = {
  title: 'About',
};

ByGroupScreen.navigationOptions = {
  title: 'Butterflies by Group',
};

AllScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('group', 'All Butterflies'),
});

WhatScreen.navigationOptions = {
  title: 'What butterflies are in this app?',
};

ButterflyScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('butterfly'),
});

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  All: AllScreen,
  ByGroup: ByGroupScreen,
  What: WhatScreen,
  Butterfly: ButterflyScreen,
},
{
  defaultNavigationOptions: {
    headerTitleStyle: {
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
  },
});

export default createAppContainer(AppNavigator);