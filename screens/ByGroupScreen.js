import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default ByGroupScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is the by group screen</Text>
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
