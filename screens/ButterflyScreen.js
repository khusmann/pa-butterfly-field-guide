import React from "react";
import { Text, ScrollView } from "react-native";

import FullWidthImage from "../components/FullWidthImage";

import styles from "./styles";

import { WebBrowser } from "expo";

import BFDB from "../database/ButterflyDatabase";

const replaceLinkText = (t, navigation) =>
  t.split(/(\[.*?\]\(.*?\))/).map((i, idx) => {
    const m = i.match(/\[(.*?)\]\((.*?)\)/);
    return m ? (
      <Text
        key={`${m[1]}${idx}`}
        style={styles.link}
        onPress={
          BFDB.bf.find((bf) => bf.name === m[2])
            ? () => navigation.push("Butterfly", { butterfly: m[2] })
            : () => WebBrowser.openBrowserAsync(m[2])
        }
      >
        {m[1]}
      </Text>
    ) : (
      i
    );
  });

export default ButterflyScreen = (props) => {
  const { navigation } = props;
  const butterfly = BFDB.bf.find(
    (item) => item.name == navigation.getParam("butterfly"),
  );

  return (
    <ScrollView style={styles.container}>
      <FullWidthImage source={butterfly.image} />
      <Text style={styles.text}>
        Scientific Name: <Text style={styles.emph}>{butterfly.sciName}</Text>
      </Text>
      <Text style={styles.text}>
        Family: <Text style={styles.emph}>{butterfly.family}</Text>
      </Text>
      <Text style={styles.text}>
        Subfamily: <Text style={styles.emph}>{butterfly.subfamily}</Text>
      </Text>
      <Text style={styles.text}>
        {replaceLinkText(butterfly.extra, navigation)}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.copyright}>
          {replaceLinkText(butterfly.copyright, navigation)}
        </Text>
      </Text>
    </ScrollView>
  );
};
