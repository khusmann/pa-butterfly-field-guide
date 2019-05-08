import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

export default AboutScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        This app was designed by Margaret Teuber as part of her masters thesis on informal science learning and education at the Pennsylvania State University. She is a graduate assistant with Shaver's Creek Environmental Center.
      </Text>
        <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        The goal of the research project is to study how people learn about biodiversity and the natural environment through their own initiative.
      </Text>
        <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        The app was coded and created by Kyle Husmann. Without him, this project would not have been possible.
      </Text>
        <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        The artwork used to represent each butterfly group was created by Bethany Gindhart.
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
