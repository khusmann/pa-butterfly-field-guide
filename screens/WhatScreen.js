import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default WhatScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is the what screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
