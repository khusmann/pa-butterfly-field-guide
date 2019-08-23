import React from 'react';
import { ScrollView } from 'react-native';

import withLoadingIndicator from '../components/withLoadingIndicator';
import ImageCard from '../components/ImageCard';

import styles from './styles';

import BFDB from '../database/ButterflyDatabase';

const bfColor = bf => BFDB.grp.find(item => item.name === bf.group).color;

export default AllScreen = withLoadingIndicator((props) => {
  const { navigation } = props;
  const group = navigation.getParam('group');
  const butterflies = BFDB.bf
                      .filter((item) => !(group && (item.group !== group)));

  return (
    <ScrollView style={styles.container} removeClippedSubviews>
      {
        butterflies.map(bf => (
          <ImageCard
            key={bf.name}
            title={bf.name}
            image={bf.image}
            backgroundColor={bfColor(bf)}
            onPress={() => props.navigation.navigate('Butterfly', { butterfly: bf.name })}
          />
        ))
      }
    </ScrollView>
  );
});
