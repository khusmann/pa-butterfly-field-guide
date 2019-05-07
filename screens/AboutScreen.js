import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

export default AboutScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        This is the about screen
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
