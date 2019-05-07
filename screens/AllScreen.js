import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';

import FullWidthImage from '../components/FullWidthImage';
import withLoadingIndicator from '../components/withLoadingIndicator';

import BFDB from '../database/ButterflyDatabase';

const bfColor = bf => BFDB.grp.find(item => item.name === bf.group).color;

export default AllScreen = withLoadingIndicator((props) => {
  const { navigation } = props;
  const group = navigation.getParam('group');
  const butterflies = BFDB.bf
                      .sort((a, b) => a.nobs < b.nobs)
                      .filter((item) => !group || (item.group === group));

  return (
    <ScrollView style={styles.container}>
      {
        butterflies.map((bf) => (
          <Card
            key={bf.name}
            containerStyle={{ backgroundColor: bfColor(bf), borderRadius: 10 }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Butterfly', { butterfly: bf.name })}
            >
              <FullWidthImage source={bf.image} />
            </TouchableOpacity>
            <Button
              title={bf.name}
              onPress={() => props.navigation.navigate('Butterfly', { butterfly: bf.name })}
            />
          </Card>
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
