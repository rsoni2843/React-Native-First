import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Images = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Images</Text>
      <Image style={styles.img} source={require("../assets/test1.jpeg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
  img: {
    width: 400,
    height: "70%",
  },
});

export default Images;
