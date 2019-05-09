import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import FullWidthImage from '../components/FullWidthImage';

export default ImageCard = (props) => {
  const { image, onPress, backgroundColor, first, title } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginTop: first ? undefined : 0,
      }}
    >
      <FullWidthImage source={image} />
      <View 
        style={{
          padding: 15,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#969696'
        }}
        >
        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#323232' }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
