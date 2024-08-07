import React from "react";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen.js";
import AboutScreen from "./screens/AboutScreen.js";
import AllScreen from "./screens/AllScreen.js";
import ByGroupScreen from "./screens/ByGroupScreen.js";
import WhatScreen from "./screens/WhatScreen.js";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ButterflyScreen from "./screens/ButterflyScreen.js";

HomeScreen.navigationOptions = {
  header: null,
};

AboutScreen.navigationOptions = {
  title: "About",
};

ByGroupScreen.navigationOptions = {
  title: "Butterflies by Group",
};

AllScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("group", "All Butterflies"),
});

WhatScreen.navigationOptions = {
  title: "What butterflies are in this app?",
};

ButterflyScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("butterfly"),
});

const withGestureHandlerRootView = (Component) => (props) =>
  (
    <GestureHandlerRootView>
      <Component {...props} />
    </GestureHandlerRootView>
  );

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    All: AllScreen,
    ByGroup: ByGroupScreen,
    What: WhatScreen,
    Butterfly: ButterflyScreen,
  },
  {
    defaultNavigationOptions: (props) => ({
      headerTitleStyle: {
        color: "#fff",
      },
      headerStyle: {
        backgroundColor: "#000",
      },
      headerTintColor: "#fff",
    }),
  }
);

export default withGestureHandlerRootView(createAppContainer(AppNavigator));
