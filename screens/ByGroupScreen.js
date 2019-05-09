import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import withLoadingIndicator from '../components/withLoadingIndicator';
import ImageCard from '../components/ImageCard';

import styles from './styles';

import BFDB from '../database/ButterflyDatabase';

export default ByGroupScreen =  withLoadingIndicator((props) => {
  const groups = BFDB.grp;

  return (
    <ScrollView style={styles.container}>
      {
        groups.map((grp, idx) => (
          <ImageCard
            key={grp.name}
            title={grp.name}
            image={grp.image}
            first={idx === 0}
            backgroundColor={grp.color}
            onPress={() => props.navigation.navigate('All', { group: grp.name })}
          />
        ))
      }
    </ScrollView>
  );
});
