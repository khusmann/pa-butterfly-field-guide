import React from 'react';
import { Image } from 'react-native';

export default FullWidthImage = (props) => {
  const { source } = props;
  const { width, height } = Image.resolveAssetSource(source);
  return (
    <Image
      source={source}
      style={{
        resizeMode: 'contain',
        width:'100%', 
        height: null, 
        aspectRatio: width/height,
      }}    
    />
  );
};