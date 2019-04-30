import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default AllScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is the All screen</Text>
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
