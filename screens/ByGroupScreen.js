import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';

import FullWidthImage from '../components/FullWidthImage';

import BFDB from '../database/ButterflyDatabase';

export default ByGroupScreen = (props) => {
  const groups = BFDB.grp;

  return (
    <ScrollView style={styles.container}>
      {
        groups.map((grp) => (
          <Card
            key={grp.name}
            containerStyle={{ backgroundColor: '#FFCF9E', borderRadius: 10 }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate('All', { group: grp.name })}
            >
              <FullWidthImage source={grp.image} />
            </TouchableOpacity>
            <Button
              title={grp.name}
              onPress={() => props.navigation.navigate('All', { group: grp.name })}
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
    backgroundColor: '#000',
  },
});

