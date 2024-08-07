import React from "react";
import { Text, View } from "react-native";

import FullWidthImage from "../components/FullWidthImage";
import MenuButton from "../components/MenuButton";

import styles from "./styles";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.menuContainer}>
        <Text style={styles.titleText}>Pennsylvania Butterflies</Text>
        <FullWidthImage source={require("../assets/logo.png")} />
        <MenuButton
          onPress={() => this.props.navigation.navigate("ByGroup")}
          title="Butterflies by Group"
        />
        <MenuButton
          onPress={() => this.props.navigation.navigate("All")}
          title="All Butterflies"
        />
        <MenuButton
          onPress={() => this.props.navigation.navigate("What")}
          title="What butterflies are in this app?"
        />
        <MenuButton
          onPress={() => this.props.navigation.navigate("About")}
          title="About"
        />
      </View>
    );
  }
}
