import React from 'react';

import HomeScreen from './screens/HomeScreen.js';
import AboutScreen from './screens/AboutScreen.js';
import AllScreen from './screens/AllScreen.js';
import ByGroupScreen from './screens/ByGroupScreen.js';
import WhatScreen from './screens/WhatScreen.js';

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  All: AllScreen,
  ByGroup: ByGroupScreen,
  What: WhatScreen,
},
{
  headerMode: 'none',
//  navigationOptions: {
//    headerVisible: false,
//  },
});

export default createAppContainer(AppNavigator);