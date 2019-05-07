import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

export default WhatScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        The 109 butterflies in this app are those...
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
