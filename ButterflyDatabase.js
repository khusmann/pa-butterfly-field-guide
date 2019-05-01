import React from 'react';
import { View, Text } from 'react-native';

const BFDB = [
  {
    name: 'Blues',
    family: 'Lycaenidae',
    subfamily: 'Polyommatinae',
    img: require('./assets/butterflies/blues/104c.jpg'),
    members: [
      {
        name: 'Spring Azure',
        sciName: 'Ceasdflm',
        img: require('./assets/butterflies/blues/104c.jpg'),
        copyright: (
          <Text>
            "Spring Azure" by blah is licensed under CC-Basdf
          </Text>
        )
      },
      {
        name: 'Eastern Tailed-Blue',
        sciName: 'Ceasdflm',
        img: require('./assets/butterflies/blues/103c.jpg'),
        copyright: (
          <Text>
            "Eastern Tailed-Blue" by blah is licensed under CC-Basdf
          </Text>
        )
      },
    ],
  },
  {
    name: 'Blues2',
    family: 'Lycaenidae',
    subfamily: 'Polyommatinae',
    img: require('./assets/butterflies/blues/104c.jpg'),
    members: [
      {
        name: 'Spring Azure2',
        sciName: 'Ceasdflm',
        img: require('./assets/butterflies/blues/104c.jpg'),
        copyright: (
          <Text>
            "Spring Azure" by blah is licensed under CC-Basdf
          </Text>
        )
      },
      {
        name: 'Eastern Tailed-Blue2',
        sciName: 'Ceasdflm',
        img: require('./assets/butterflies/blues/103c.jpg'),
        copyright: (
          <Text>
            "Eastern Tailed-Blue" by blah is licensed under CC-Basdf
          </Text>
        )
      },
    ],
  }
];

export default BFDB;