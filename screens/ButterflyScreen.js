import React from 'react';
import { Text, ScrollView } from 'react-native';
import FullWidthImage from '../components/FullWidthImage';

import { WebBrowser } from 'expo';

import BFDB from '../database/ButterflyDatabase';

const replaceLinkText = (t, navigation) => (
  t.split(/(\[.*?\]\(.*?\))/)
   .map((i, idx) => {
      const m = i.match(/\[(.*?)\]\((.*?)\)/);
      return m ? (
        <Text
          key={`${m[1]}${idx}`} 
          style={{ color: 'aqua' }}
          onPress={
            BFDB.bf.find(bf => (bf.name === m[2])) ?
              () => navigation.push('Butterfly', { butterfly: m[2] }) :
              () => WebBrowser.openBrowserAsync(m[2])
          }
        >
          {m[1]}
        </Text>
      ) : i;
   })
);

export default ButterflyScreen = (props) => {
  const { navigation } = props;
  const butterfly = BFDB.bf.find((item) => item.name == navigation.getParam('butterfly'));

  return (
      <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
        <FullWidthImage source={butterfly.image} />
        <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
          Scientific Name: <Text style={{ fontStyle: 'italic' }}>{butterfly.sciName}</Text>
        </Text>
        <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
          Family: <Text style={{ fontStyle: 'italic' }}>{butterfly.family}</Text>
        </Text>
        <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
          Subfamily: <Text style={{ fontStyle: 'italic' }}>{butterfly.subfamily}</Text>
        </Text>
        <Text style={{ fontSize: 20, margin: 10, color: '#fff' }}>
          {replaceLinkText(butterfly.extra, navigation)}
        </Text>
        <Text style={{ fontSize: 12, margin: 10, marginTop: 30, color: '#fff' }}>
          {replaceLinkText(butterfly.copyright, navigation)}
        </Text>
      </ScrollView>
  );
};
