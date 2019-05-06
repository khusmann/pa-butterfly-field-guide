import React from 'react';
import { Image } from 'react-native';
import withScreenDimensions from './withScreenDimensions';

export default FullWidthImage = withScreenDimensions((props) => {
  const { source, screen } = props;
  const { width, height } = Image.resolveAssetSource(source);
  return (
    <Image
      source={source}
      style={{ resizeMode: 'contain', width: screen.width, height: screen.width*height/width }}
    />
  );
});