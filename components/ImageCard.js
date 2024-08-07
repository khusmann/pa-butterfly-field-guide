import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import FullWidthImage from "../components/FullWidthImage";

export default ImageCard = (props) => {
  const { image, onPress, backgroundColor, title } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginTop: 0,
      }}
    >
      <FullWidthImage source={image} />
      <View
        style={{
          padding: 15,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#278577",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#f0f0f0" }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
