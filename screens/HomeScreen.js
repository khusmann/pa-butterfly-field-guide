import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FullWidthImage from '../components/FullWidthImage';
import MenuButton from '../components/MenuButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Pennsylvania Butterflies</Text>
        <FullWidthImage 
          source={require('../assets/logo.png')}
        />
        <MenuButton
          onPress={() => this.props.navigation.navigate('ByGroup')}
          title="Butterflies by Group"
        />
        <MenuButton
          onPress={() => this.props.navigation.navigate('All')}
          title="All Butterflies"
        />
        <MenuButton
          onPress={() => this.props.navigation.navigate('What')}
          title="What butterflies are in this app?"
        />
        <MenuButton
          onPress={() => this.props.navigation.navigate('About')}
          title="About"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
