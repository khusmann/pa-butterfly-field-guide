import React from 'react';
import { View, Text } from 'react-native';

import imagelookup from './imagelookup';

const BFDB = require('./bfdb').map(i => ({
  ...i,
  image: imagelookup[i.image],
}));

export default BFDB;