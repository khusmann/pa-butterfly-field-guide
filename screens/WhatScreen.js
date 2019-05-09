import React from 'react';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

export default WhatScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        The 109 butterflies in this app are those that are commonly found in Pennsylvania.
      </Text>
      <Text style={styles.text}>
        The butterflies are listed by their commonality. When looking at "All Butterflies" or looking at a butterfly group (subfamily), they are arranged from most common to least common.
      </Text>
      <Text style={styles.text}>
        In Pennsylvania, there are around 153 butterfly species that have been identified. Out of these 153 butterflies, 44 are not common and can look similar to common species.
      </Text>
      <Text style={styles.text}>
        If you do not see your butterfly:
      </Text>
      <Text style={styles.text}>
        1. Look again! Some butterfly species have some variation of appearance!
      </Text>
      <Text style={styles.text}>
        2. It may be a moth! Many moths look similar to butterflies, and many butterflies look like moths! The easiest way to tell them apart is that moths will have feathery antennae, while butterflies do not!
      </Text>
      <Text style={styles.text}>
        3. If you double checked and it is definitely a butterfly, congratulations! You saw a rare butterfly! Rare butterflies are not necessarily endangered, it just means they are less common in Pennsylvania because of their natural range.
      </Text>
    </ScrollView>
  );
}
