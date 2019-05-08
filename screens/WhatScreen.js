import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

export default WhatScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        The 109 butterflies in this app are those that are commonly found in Pennsylvania.
      </Text>
      <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        The butterflies are listed by their commonality. When looking at "All Butterflies" or looking at a butterfly group (subfamily), they are arranged from most common to least common.
      </Text>
      <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        In Pennsylvania, there are around 153 butterfly species that have been identified. Out of these 153 butterflies, 44 are not common and can look similar to common species.
      </Text>
      <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        If you do not see your butterfly:
      </Text>
      <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        1. Look again! Some butterfly species have some variation of appearance!
      </Text>
      <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        2. It may be a moth! Many moths look similar to butterflies, and many butterflies look like moths! The easiest way to tell them apart is that moths will have feathery antennae, while butterflies do not!
      </Text>
      <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
        3. If you double checked and it is definitely a butterfly, congratulations! You saw a rare butterfly! Rare butterflies are not necessarily endangered, it just means they are less common in Pennsylvania because of their natural range.
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
