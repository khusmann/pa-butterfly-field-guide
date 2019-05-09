import React from 'react';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

export default AboutScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        This app was designed by Margaret Teuber as part of her masters thesis on informal science learning and education at the Pennsylvania State University. She is a graduate assistant with Shaver's Creek Environmental Center.
      </Text>
      <Text style={styles.text}>
        The goal of the research project is to study how people learn about biodiversity and the natural environment through their own initiative.
      </Text>
      <Text style={styles.text}>
        The app was coded by Kyle Husmann. Without him, this project would not have been possible.
      </Text>
      <Text style={styles.text}>
        The artwork used to represent each butterfly group was created by Bethany Gindhart.
      </Text>
    </ScrollView>
  );
}
