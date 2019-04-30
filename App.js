import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Pennsylvania Butterflies</Text>
        <Image 
          source={require('./assets/logo.png')}
        />
        <Button
          style={styles.menuButton}
          title="Butterflies by Group"
        />
        <Button
          style={styles.menuButton}
          title="All Butterflies"
        />
        <Button
          style={styles.menuButton}
          title="What butterflies are in this app?"
        />
        <Button
          style={styles.menuButton}
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
