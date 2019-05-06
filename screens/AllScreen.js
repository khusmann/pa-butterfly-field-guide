import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';

import BFDB from '../database/ButterflyDatabase';

export default AllScreen = (props) => {
  const butterflies = BFDB.sort((a, b) => a.nobs < b.nobs);
  return (
    <ScrollView style={styles.container}>
      {
        butterflies.map((bf) => (
          <Card
            key={bf.name}
            image={bf.image}
            imageProps={{ resizeMode: 'contain' }}
          >
            <Button
              title={bf.name}
              onPress={() => props.navigation.navigate('Butterfly', { butterfly: bf.name })}
            />
          </Card>
        ))
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
