import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import withLoadingIndicator from '../components/withLoadingIndicator';
import ImageCard from '../components/ImageCard';

import BFDB from '../database/ButterflyDatabase';

const bfColor = bf => BFDB.grp.find(item => item.name === bf.group).color;

export default AllScreen = withLoadingIndicator((props) => {
  const { navigation } = props;
  const group = navigation.getParam('group');
  const butterflies = BFDB.bf
                      .filter((item) => !(group && (item.group !== group)));

  return (
    <ScrollView style={styles.container}>
      {
        butterflies.map((bf, idx) => (
          <ImageCard
            key={bf.name}
            title={bf.name}
            image={bf.image}
            first={idx === 0}
            backgroundColor={bfColor(bf)}
            onPress={() => props.navigation.navigate('Butterfly', { butterfly: bf.name })}
          />
        ))
      }
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
