import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default MenuButton = (props) => {
  const { onPress, title } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width:'100%',
        backgroundColor: '#282828',
        padding: 15,
        borderRadius: 40,
        alignItems: 'center',
      }}
    >
      <Text 
        style={{ 
          color: '#ffffff',
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
 