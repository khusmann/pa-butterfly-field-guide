import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import FullWidthImage from '../components/FullWidthImage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Pennsylvania Butterflies</Text>
        <FullWidthImage 
          source={require('../assets/logo.png')}
        />
        <Button
          style={styles.menuButton}
          onPress={() => this.props.navigation.navigate('ByGroup')}
          title="Butterflies by Group"
        />
        <Button
          style={styles.menuButton}
          onPress={() => this.props.navigation.navigate('All')}
          title="All Butterflies"
        />
        <Button
          style={styles.menuButton}
          onPress={() => this.props.navigation.navigate('What')}
          title="What butterflies are in this app?"
        />
        <Button
          style={styles.menuButton}
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
  menuButton: {

  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
