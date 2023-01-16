import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const FlatListDemo = () => {
  // In react native id's should be in string
  const names = [
    {
      id: "1",
      name: "Raj",
    },
    {
      id: "2",
      name: "Meraj",
    },
    {
      id: "3",
      name: "Siraj",
    },
    {
      id: "4",
      name: "Viraj",
    },
  ];

  return (
    <FlatList
      style={styles.list}
      keyExtractor={(key) => key.id}
      data={names}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={(el) => {
        return <Text style={styles.names}>{el?.item?.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  names: {
    backgroundColor: "blue",
    fontSize: 25,
    margin: 20,
    padding: 20,
    color: "white",
  },
  list: {
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
});

export default FlatListDemo;
