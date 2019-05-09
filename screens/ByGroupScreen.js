import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View, Text } from 'react-native';

import FullWidthImage from '../components/FullWidthImage';
import withLoadingIndicator from '../components/withLoadingIndicator';

import BFDB from '../database/ButterflyDatabase';

export default ByGroupScreen =  withLoadingIndicator((props) => {
  const groups = BFDB.grp;

  return (
    <ScrollView style={styles.container}>
      {
        groups.map((grp, idx) => (
          <TouchableOpacity
            key={grp.name}
            onPress={() => props.navigation.navigate('All', { group: grp.name })}
          >
            <View 
              style={{
                backgroundColor: grp.color,
                borderRadius: 10,
                padding: 15,
                margin: 15,
                marginTop: idx === 0 ? undefined : 0,
              }}
            >
              <FullWidthImage source={grp.image} />
              <View 
                style={{
                  padding: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#969696'
                }}
               >
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#323232' }}>
                  {grp.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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

